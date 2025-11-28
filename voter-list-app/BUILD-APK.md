# Building Android APK for Voter List App

This guide will help you build an Android APK from the voter list web application.

## Prerequisites

1. **Node.js** (v14 or higher) - Already installed ✓
2. **Java JDK** (v11 or higher) - Required for Android builds
3. **Android Studio** - Required for building the APK
4. **Android SDK** - Installed via Android Studio

## Step 1: Install Java JDK

If you don't have Java installed:

**macOS:**
```bash
brew install openjdk@11
```

**Linux:**
```bash
sudo apt-get install openjdk-11-jdk
```

**Windows:**
Download from: https://adoptium.net/

## Step 2: Install Android Studio

1. Download Android Studio from: https://developer.android.com/studio
2. Install Android Studio
3. Open Android Studio and complete the setup wizard
4. Install Android SDK (API level 33 or higher recommended)

## Step 3: Set Environment Variables

Add these to your `~/.zshrc` or `~/.bashrc`:

```bash
export ANDROID_HOME=$HOME/Library/Android/sdk  # macOS
# export ANDROID_HOME=$HOME/Android/Sdk  # Linux
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
```

Then reload:
```bash
source ~/.zshrc  # or source ~/.bashrc
```

## Step 4: Sync Capacitor (Already Done)

The project is already configured with Capacitor. If you make changes to web files:

```bash
npm run sync
```

This copies your web files to the Android project.

## Step 5: Build APK

### Option A: Using Android Studio (Recommended)

1. Open Android Studio
2. Click "Open an Existing Project"
3. Navigate to: `voter-list-app/android`
4. Wait for Gradle sync to complete
5. Go to **Build > Build Bundle(s) / APK(s) > Build APK(s)**
6. Wait for the build to complete
7. Click "locate" in the notification to find your APK
8. APK will be at: `android/app/build/outputs/apk/debug/app-debug.apk`

### Option B: Using Command Line

```bash
cd android
./gradlew assembleDebug
```

The APK will be at: `android/app/build/outputs/apk/debug/app-debug.apk`

## Step 6: Install APK on Device

1. Transfer the APK to your Android device
2. Enable "Install from Unknown Sources" in device settings
3. Open the APK file and install

## Building Release APK (For Distribution)

### 1. Generate Signing Key

```bash
keytool -genkey -v -keystore voter-list-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias voter-list
```

### 2. Configure Signing

Edit `android/app/build.gradle` and add:

```gradle
android {
    ...
    signingConfigs {
        release {
            storeFile file('../voter-list-release-key.jks')
            storePassword 'YOUR_STORE_PASSWORD'
            keyAlias 'voter-list'
            keyPassword 'YOUR_KEY_PASSWORD'
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
        }
    }
}
```

### 3. Build Release APK

```bash
cd android
./gradlew assembleRelease
```

Release APK will be at: `android/app/build/outputs/apk/release/app-release.apk`

## Troubleshooting

### "Command not found: gradlew"
Make the script executable:
```bash
chmod +x android/gradlew
```

### "SDK location not found"
Set ANDROID_HOME environment variable (see Step 3)

### "Java version error"
Ensure Java 11+ is installed and JAVA_HOME is set:
```bash
export JAVA_HOME=$(/usr/libexec/java_home -v 11)
```

### App crashes on startup
- Check that all files are synced: `npm run sync`
- Check Android logs: `adb logcat`

## Quick Commands

```bash
# Sync web files to Android
npm run sync

# Open Android project in Android Studio
npm run open:android

# Build debug APK (command line)
cd android && ./gradlew assembleDebug
```

## App Information

- **App Name**: Voter List
- **Package ID**: com.voterlist.app
- **Version**: 1.0.0
- **Min Android Version**: API 21 (Android 5.0)
- **Target Android Version**: API 33 (Android 13)

