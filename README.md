# Command Center Header (Notion embed)

Greeting, clock, date, Kentville weather (°C, 5-day) and today/tomorrow Google Calendar events, styled to match Notion dark mode.

## Publish
GitHub Pages only serves **public** repos on a free plan. There are no secrets in this repo; the calendar URL is passed in the link instead.
1. Settings → General → Danger Zone → Change visibility → **Public**
2. Settings → Pages → Source: `main` / `(root)` → Save
3. URL: `https://jtroop4.github.io/command-center-widget/`

## Calendar (Google Apps Script)
1. Go to script.google.com → New project → paste `calendar-feed.gs` → Save.
2. Deploy → New deployment → type **Web app** → Execute as **Me**, Who has access **Anyone** → Deploy → authorize.
3. Copy the Web app URL (ends in `/exec`).
4. Embed link: `https://jtroop4.github.io/command-center-widget/?cal=<that /exec URL>`

(`n8n-calendar-feed.json` is an alternative if n8n is ever exposed over HTTPS.)

## Options (URL params)
`name`, `place`, `lat`, `lon`, `theme=light`
