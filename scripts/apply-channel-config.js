#!/usr/bin/env node
/**
 * Loads a channel profile and operator strategy from a JSON file into a running dashboard.
 *
 * Usage:
 *   npm run channel:apply -- config/channel-profile.formandheritage.json
 *
 * The file has optional top-level keys "profile" and "strategy", shaped like the bodies
 * accepted by PUT /api/profile and PUT /api/operator/strategy, and an optional "env" map
 * of .env lines that is printed for you to copy (this script never writes .env). The dashboard must be
 * running (npm start). Set DASHBOARD_URL to target another host, and API_KEY if the
 * dashboard requires one. The strategy is saved as a draft unless the file says otherwise;
 * activate it from the Autonomous operator panel when you are ready.
 */
require('dotenv').config();
const fs = require('fs');
const path = require('path');

async function main() {
  const file = process.argv[2];
  if (!file) {
    console.error('Usage: npm run channel:apply -- <path-to-channel-config.json>');
    process.exit(1);
  }

  const config = JSON.parse(fs.readFileSync(path.resolve(file), 'utf8'));
  const baseUrl = (process.env.DASHBOARD_URL || `http://127.0.0.1:${process.env.PORT || 3456}`).replace(/\/$/, '');
  const headers = { 'content-type': 'application/json' };
  if (process.env.API_KEY) headers['x-api-key'] = process.env.API_KEY;

  const put = async (route, body) => {
    let response;
    try {
      response = await fetch(`${baseUrl}${route}`, { method: 'PUT', headers, body: JSON.stringify(body) });
    } catch (error) {
      throw new Error(`Could not reach the dashboard at ${baseUrl}. Start it with "npm start" first. (${error.message})`);
    }
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || payload.success === false) {
      throw new Error(`${route} rejected: ${payload.error || response.statusText}`);
    }
    return payload.result;
  };

  if (config.profile) {
    const result = await put('/api/profile', config.profile);
    console.log(`Channel profile saved: ${result.channel_name || config.profile.channelName}`);
  }
  if (config.strategy) {
    const result = await put('/api/operator/strategy', config.strategy);
    console.log(`Operator strategy saved (${result.status}): ${result.contentPillars.length} pillars, ${result.cadence_per_week}/week`);
  }
  if (!config.profile && !config.strategy) {
    console.error('The config file has neither a "profile" nor a "strategy" key.');
    process.exit(1);
  }
  if (config.env && typeof config.env === 'object') {
    console.log('\nAdd or update these lines in your .env file (the dashboard reads them on restart):');
    for (const [key, value] of Object.entries(config.env)) {
      console.log(`${key}=${value}`);
    }
  }
  console.log('\nDone. Open the dashboard and review Channel setup and Autonomous operator.');
}

main().catch(error => {
  console.error(error.message);
  process.exit(1);
});
