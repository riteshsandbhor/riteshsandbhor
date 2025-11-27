# Quick Start Guide

## ✅ Fixed: Now loads from JSON file only!

The app has been updated to **only load from `data/voters.json`** - no more hardcoded data.

## 🚀 How to Run Locally

### Option 1: Python Server (Easiest)

```bash
# Navigate to voter-list-app folder
cd voter-list-app

# Start server
python -m http.server 8000

# Open in browser:
# http://localhost:8000
```

### Option 2: Node.js Server

```bash
# Install http-server (one time)
npm install -g http-server

# Navigate to folder
cd voter-list-app

# Start server
http-server

# Open in browser:
# http://localhost:8080
```

### Option 3: VS Code Live Server

1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## ⚠️ Important

**Don't open `index.html` directly** (double-clicking) - browsers block JSON loading due to CORS.

**Always use a local server** (options above) or deploy to GitHub Pages.

## 📊 Current Data

- **30 voters** loaded from `data/voters.json`
- Voter numbers: 31-60
- All data in JSON format

## 🔍 Verify It's Working

1. Open browser console (F12)
2. Look for: `✅ Data loaded successfully: 30 voters from data/voters.json`
3. You should see 30 voters in the table

## 📝 To Add More Data

1. Edit `data/voters.json`
2. Add more voter entries
3. Refresh the page
4. All data will load automatically!


