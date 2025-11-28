#!/bin/bash

# Script to sync web files and prepare for Android build

echo "🔄 Syncing web files to Android project..."
npm run sync

echo ""
echo "✅ Sync complete!"
echo ""
echo "📱 Next steps to build APK:"
echo ""
echo "Option 1: Using Android Studio (Recommended)"
echo "  1. Open Android Studio"
echo "  2. Open project: voter-list-app/android"
echo "  3. Build > Build Bundle(s) / APK(s) > Build APK(s)"
echo ""
echo "Option 2: Using Command Line"
echo "  cd android && ./gradlew assembleDebug"
echo ""
echo "📄 See BUILD-APK.md for detailed instructions"

