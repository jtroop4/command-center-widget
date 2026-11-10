# Command Center Header (Notion embed)

Greeting, clock, date, Kentville weather (°C, 5-day) and today/tomorrow Google Calendar events, styled to match Notion dark mode.

## Publish
GitHub Pages only serves **public** repos on a free plan. There are no secrets in this repo; the calendar URL is passed in the link instead.
1. Settings → General → Danger Zone → Change visibility → **Public**
2. Settings → Pages → Source: `main` / `(root)` → Save
3. URL: `https://jtroop4.github.io/command-center-widget/`

## Calendar (n8n)
1. In n8n: Import `n8n-calendar-feed.json`, then pick your Google Calendar credential on **Get Events** and activate it.
2. Copy the Production webhook URL from the Webhook node.
3. Embed link: `https://jtroop4.github.io/command-center-widget/?cal=<webhook URL>`

## Options (URL params)
`name`, `place`, `lat`, `lon`, `theme=light`
