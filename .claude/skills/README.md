# Claude Code skills for this project

These are third-party skills for Claude Code, installed so that working on the
Form & Heritage channel from this repository (in Claude Code or claude.ai/code)
has them available. They do not plug into the YouTube Automation Agent app
itself; they shape how Claude helps in chat. All four sources are MIT licensed;
each source's LICENSE is kept alongside its files. Every file was read before
installing. None of them send anything anywhere unless you set up the optional
paid services noted below.

| Folder(s) | Source | Snapshot | Notes |
| --- | --- | --- | --- |
| `youtube-transcript` | [tubeagentkit/youtube-transcript-skills](https://github.com/tubeagentkit/youtube-transcript-skills) | 8ea4c21 | Fetches transcripts, searches, and playlists through getyoutubetranscript.com. Metered: 100 free credits per account, then from $5/month. The scripts only call that domain; the key is stored in `~/.config/getyoutubetranscript/`. Nothing runs until you ask for a transcript and agree to set up an account. |
| `youtube-marketing` | [sergebulaev/youtube-skills](https://github.com/sergebulaev/youtube-skills) | 0829e02 | Nine YouTube skills (titles, descriptions, hooks, thumbnail briefs, community posts, weekly plans, repurposing, channel page audit, audience insights). Works in manual mode with no keys. Optional: a YouTube Data API key for comment and stats reads, Publora for publishing, Pixfaro for images. The repo's large image assets and maintenance scripts were left out. |
| `youtube-chapter-generator`, `youtube-video-description-writer`, `youtube-to-twitter-thread`, `content-idea-brainstormer`, `content-repurposing-planner`, `community-post-ideas`, `tiktok-script-template`, `instagram-reels-script-writer` | [calebvbi/creatorskills-free-skills](https://github.com/calebvbi/creatorskills-free-skills) | f0b765a | Plain instruction skills, no scripts. Eight of the seventeen were installed; the rest (newsletters, KDP, LinkedIn, podcasts, email subject lines) were not relevant. |
| `seo-audit`, `ai-seo`, `content-strategy`, `copywriting`, `copy-editing`, `social`, `video`, `competitors`, `customer-research`, `marketing-plan`, `marketing-ideas`, `schema` | [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | e85f3cb | Twelve of fifty-two skills, chosen for a small studio's website and channel. Their `evals/` test folders were left out to keep the repo small. |

## Using them

Ask in plain words and the matching skill loads on its own, for example:

- "Pull the transcript of this video and tell me how it hooks viewers" (youtube-transcript)
- "Give me five title options for the floating desk video" (youtube-marketing)
- "Turn this transcript into YouTube chapters" (youtube-chapter-generator)
- "Audit formandheritage.com for SEO" (seo-audit)

## Updating

Re-copy from the source repository and update the snapshot column. Review the
diff before committing; these are third-party instructions and scripts.
