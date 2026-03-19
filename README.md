# 👋 Command Center Greeting Widget

A dynamic greeting widget for Notion, built for **Jordan's Command Center** at Bruce Auto Group.

## Features

- **Time-aware greeting** — Good morning / afternoon / evening / night
- **Live clock** — 12-hour format, updates every 10 seconds
- **Real weather** — Pulls from [Open-Meteo](https://open-meteo.com/) (free, no API key) for Middleton, NS
- **Dark theme** — Matches Notion dark mode with BAG brand accent (`#147EA3`)
- **Smooth animations** — Staggered fade-in with ambient glow

## Setup

### 1. Enable GitHub Pages
1. Go to your repo **Settings → Pages**
2. Under **Source**, select `main` branch and `/ (root)`
3. Click **Save**
4. Your widget will be live at: `https://<your-username>.github.io/command-center-widget/`

### 2. Embed in Notion
1. In your Notion page, type `/embed`
2. Paste your GitHub Pages URL
3. Resize the embed block to fit (recommended: full width, ~160px height)

## Customization

Edit `index.html` to change:
- **Name**: Search for `Jordan` and replace with any name
- **Location**: Change the `lat` and `lon` values in the `fetchWeather()` function
- **Accent color**: Update `--accent: #147EA3` in the CSS variables
