#!/bin/bash

# Script to build Android APK for Voter List App

echo "🔨 Building Android APK for Voter List App"
echo "=========================================="
echo ""

# Check if Android SDK is available
if [ -z "$ANDROID_HOME" ]; then
    if [ -d "$HOME/Library/Android/sdk" ]; then
        export ANDROID_HOME="$HOME/Library/Android/sdk"
        export PATH=$PATH:$ANDROID_HOME/platform-tools
        echo "✓ Found Android SDK at: $ANDROID_HOME"
    else
        echo "❌ Android SDK not found!"
        echo ""
        echo "Please install Android Studio first:"
        echo "1. Download: https://developer.android.com/studio"
        echo "2. Install and complete setup wizard"
        echo "3. Install Android SDK (API 33+)"
        echo ""
        echo "Or set ANDROID_HOME environment variable:"
        echo "export ANDROID_HOME=\$HOME/Library/Android/sdk"
        exit 1
    fi
fi

# Check Java
if ! command -v java &> /dev/null; then
    echo "❌ Java not found!"
    echo "Install Java JDK 11+: brew install openjdk@11"
    exit 1
fi

echo "✓ Java found: $(java -version 2>&1 | head -1)"
echo ""

# Sync web files
echo "📦 Syncing web files to Android project..."
npm run sync

if [ $? -ne 0 ]; then
    echo "❌ Sync failed!"
    exit 1
fi

echo ""
echo "✅ Sync complete!"
echo ""

# Check if gradlew exists
if [ ! -f "android/gradlew" ]; then
    echo "❌ Gradle wrapper not found!"
    echo "Android project may not be set up correctly."
    exit 1
fi

# Make gradlew executable
chmod +x android/gradlew

echo "🔨 Building APK..."
echo "This may take 5-10 minutes on first build..."
echo ""

cd android

# Build debug APK
./gradlew assembleDebug

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ APK build successful!"
    echo ""
    echo "📱 Your APK file is at:"
    echo "   $(pwd)/app/build/outputs/apk/debug/app-debug.apk"
    echo ""
    echo "📦 To install on your phone:"
    echo "   1. Transfer APK to your Android device"
    echo "   2. Enable 'Install from Unknown Sources' in phone settings"
    echo "   3. Open APK file and install"
    echo ""
else
    echo ""
    echo "❌ Build failed!"
    echo ""
    echo "💡 Try building with Android Studio instead:"
    echo "   1. Open Android Studio"
    echo "   2. Open project: voter-list-app/android"
    echo "   3. Build → Build Bundle(s) / APK(s) → Build APK(s)"
    echo ""
    exit 1
fi

