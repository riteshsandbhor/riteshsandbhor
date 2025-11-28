#!/bin/bash

# Script to deploy voter list app to GitHub Pages

echo "🚀 Deploying Voter List App to GitHub Pages"
echo "============================================"
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing git repository..."
    git init
fi

# Check if icons exist
if [ ! -f "icon-192.png" ] || [ ! -f "icon-512.png" ]; then
    echo "⚠️  Warning: App icons not found!"
    echo "   Please create icons using create-icons.html first"
    echo "   Or continue without icons (PWABuilder may fail)"
    read -p "Continue anyway? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Add all files
echo "📝 Adding files to git..."
git add .

# Check if there are changes
if git diff --staged --quiet; then
    echo "ℹ️  No changes to commit"
else
    # Commit
    echo "💾 Committing changes..."
    read -p "Enter commit message (or press Enter for default): " commit_msg
    if [ -z "$commit_msg" ]; then
        commit_msg="Deploy voter list PWA to GitHub Pages"
    fi
    git commit -m "$commit_msg"
fi

# Check if remote exists
if ! git remote | grep -q origin; then
    echo ""
    echo "🔗 Setting up GitHub remote..."
    read -p "Enter your GitHub username: " github_username
    read -p "Enter repository name (default: voter-list-app): " repo_name
    if [ -z "$repo_name" ]; then
        repo_name="voter-list-app"
    fi
    
    git remote add origin "https://github.com/${github_username}/${repo_name}.git"
    echo "✓ Remote added: https://github.com/${github_username}/${repo_name}.git"
fi

# Push to GitHub
echo ""
echo "📤 Pushing to GitHub..."
git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "📋 Next steps:"
    echo "   1. Go to: https://github.com/${github_username}/${repo_name}/settings/pages"
    echo "   2. Under 'Source', select:"
    echo "      - Branch: main"
    echo "      - Folder: / (root)"
    echo "   3. Click 'Save'"
    echo "   4. Wait 1-2 minutes for deployment"
    echo "   5. Your app will be at:"
    echo "      https://${github_username}.github.io/${repo_name}/"
    echo ""
    echo "🔨 Then convert to APK:"
    echo "   1. Go to: https://www.pwabuilder.com/"
    echo "   2. Enter: https://${github_username}.github.io/${repo_name}/"
    echo "   3. Build → Android → Download APK"
    echo ""
else
    echo ""
    echo "❌ Push failed!"
    echo "   Make sure:"
    echo "   - Repository exists on GitHub"
    echo "   - You have push access"
    echo "   - Remote URL is correct"
    echo ""
    exit 1
fi

