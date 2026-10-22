# YouTube to Twitter Thread — Quick Start Guide

## What Is This?

YouTube to Twitter Thread turns one video into one ready-to-post Twitter/X thread. Give it a transcript (or a detailed summary), and it extracts the 5-7 strongest standalone moments, writes a scroll-stopping hook, and closes with a link back to the full video — instead of a generic "new video is up" post that gets ignored.

## Who It's For

YouTubers who already post on Twitter/X but currently do it by hand — pasting a title and hoping for engagement, or skipping Twitter promotion for a video entirely because writing a good thread takes longer than it should. If you want threads for every platform at once (Twitter, LinkedIn, Instagram captions, TikTok scripts) in one pass, check out the Video-to-Everything Repurposer skill instead — this one is Twitter-only and built to be fast.

## Key Features

- **Extraction, not summary** — pulls out the moments that work standing alone, cuts the connective tissue that only makes sense inside the video
- **Hook-first structure** — Tweet 1 is written to stop a scroll, not announce a video
- **Character-count aware** — every tweet is checked against the 280-character limit before it ships
- **Preserves your actual voice** — pulls phrasing from your transcript instead of flattening everything into generic listicle language
- **Honest about its limits** — if you only give it a URL with no transcript, it asks for more instead of guessing

## Example Use Case

You just published a 12-minute video on the editing workflow that cut your render time in half. You paste the transcript in. It comes back with a 6-tweet thread that opens with the specific time-saved claim, breaks down the 3 workflow changes that mattered most (one per tweet, in your own words from the transcript), and closes with a one-line recap plus your video link — ready to copy and post in under two minutes.

## What's Included

| File | Purpose |
|------|---------|
| `SKILL.md` | The brain — extraction rules, thread structure, character-limit enforcement |
| `EXAMPLE.md` | Two fully worked examples, including one where the creator only has a URL |
| `README.md` | This file — setup and first prompts |

## How to Install

1. Open your Claude project (or ChatGPT project/custom GPT)
2. Upload `SKILL.md` to your project knowledge base
3. Paste your video transcript or a detailed summary when you're ready to repurpose

## Try This First

### From a Full Transcript

```
Video title: [title]
Transcript: [paste full transcript]

Turn this into a Twitter thread.
```

### From a Detailed Summary (no transcript available)

```
Video title: [title]
Here's what the video covers: [bullet the main points, in order, with any
specific numbers or claims you make]

Turn this into a Twitter thread.
```

### Tightening a Draft You Already Wrote

```
Here's a thread I drafted from my last video, but it feels flat: [paste draft]
Sharpen the hook and cut anything that doesn't stand alone.
```

## Getting the Best Results

- **Paste the real transcript when you can.** YouTube's built-in "Show transcript" option (under the video description) takes 20 seconds and gives the skill actual language to work with instead of a paraphrase.
- **Flag your best specific claim up front.** If your video has one standout number or result, mention it explicitly — it's almost always the strongest hook.
- **Tell it your channel's voice if it's not obvious.** A transcript alone doesn't always convey whether you're casual or technical — one line about your usual tone sharpens the match.

## What This Won't Do

This writes one Twitter/X thread from one video — it doesn't generate LinkedIn posts, Instagram captions, or TikTok scripts from the same source (that's the Video-to-Everything Repurposer skill), and it doesn't fetch or transcribe the video for you. You bring the source text; it brings the thread.
