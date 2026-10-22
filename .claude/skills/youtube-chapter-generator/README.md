# YouTube Chapter Generator — Quick Start Guide

## What Is This?

This skill turns your video transcript, outline, or notes into a formatted YouTube chapter list — the timestamps and titles that appear in your video description and let viewers jump to specific sections.

Good chapters improve watch time by helping viewers find what they came for without scrubbing. They also give YouTube more context about your video's content, which can improve search visibility.

This skill handles the formatting rules automatically (starting at 0:00, minimum chapter length, correct timestamp format) and writes titles designed to be clear and searchable.

---

## What's Included

| File | What It Contains |
|------|-----------------|
| `SKILL.md` | The full instructions loaded into your AI |
| `README.md` | This guide |
| `EXAMPLE.md` | Two worked examples showing real inputs and outputs |

---

## How to Install

### Claude (claude.ai)
1. Open a new Project in Claude
2. Go to **Project Settings → Instructions**
3. Copy and paste the full contents of `SKILL.md` into the instructions field
4. Save — the skill is now active for every conversation in that project

### ChatGPT
1. Open **ChatGPT → Customize ChatGPT** (or create a new GPT)
2. Paste the contents of `SKILL.md` into the **Instructions** field
3. Save your custom GPT

### Any Other AI
Paste the contents of `SKILL.md` at the start of your conversation as a system prompt or initial message before sending your video content.

---

## First 5 Minutes

Once the skill is installed, try it with one of these inputs:

**Option A — Paste a transcript:**
> Here's my transcript. Please generate YouTube chapters.
> [paste transcript]

**Option B — Paste your outline:**
> Here's my video outline. Generate chapters based on the section timing.
> [paste outline with approximate times]

**Option C — Describe your video:**
> My video is 18 minutes long and covers: intro (2 min), what is X (3 min), how to set it up (5 min), common mistakes (4 min), final results and wrap-up (4 min). Generate chapters.

The skill will return a plain-text chapter list you can copy directly into your YouTube video description.

---

## Tips

**Paste the transcript, not just the title.** The more detail you give, the more accurate the chapter breaks. A full transcript produces the best results. An outline works well too.

**Include approximate times when you have them.** Even rough estimates ("the setup section takes about 6 minutes") help the skill place timestamps more accurately.

**Ask for revisions.** If a chapter title feels off or a break point is wrong, just say "rename chapter 3" or "the tutorial section actually starts at 8:30, not 7:45" and the skill will adjust.

**Use it for older videos too.** If you have published videos without chapters, pull the auto-generated transcript from YouTube Studio (Subtitles tab) and run it through this skill to add chapters retroactively.

**Keep chapter titles viewer-first.** The skill writes for viewers scanning the chapter list, not for you. If a title makes sense to someone who hasn't watched the video yet, it's a good title.
