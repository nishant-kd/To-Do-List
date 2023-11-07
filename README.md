# React Native Setup Guide

## System Requirements:

- **CPU:** AMD Ryzen 7 5800H with Radeon Graphics 
- **RAM:** 16.0 GB (15.4 GB usable)
- **Operating System:** Windows 11 Home

## Installation Instructions:

1. **Install Node.js:** React Native requires Node.js to function. 
   - [Download the latest LTS version from the Node.js website.](https://nodejs.org/en/download/current)

2. **Java Development Kit (JDK):** React Native requires the JDK. 
   - [Download and install from Oracle's official site.](https://www.oracle.com/ca-en/java/technologies/javase/jdk11-archive-downloads.html) 
   
## Configuration Steps:

### Android Development Setup:

1. [Install Android Studio from the official website.](https://developer.android.com/studio/)
   - Ensure you've checked "Android SDK" and "Android Virtual Device" during the installation process.

2. **Set Environment Variable:** 
   - Add the ANDROID_HOME environment variable with the path pointing to your Android SDK location. Furthermore, include the platform-tools directory in your system's PATH variable.

## Project Creation:

1. Open your terminal or command prompt and change to the directory where you want your project to be located.
2. Execute npm install to set up npm in that directory.
3. Create a new React Native application named "TodoListApp" by running npx react-native@latest init TodoListApp.

### Creating a Virtual Machine:

1. Open Android Studio, look for "More Actions" and choose "Virtual Device Manager".
2. Press "Create Device", pick a phone device you prefer, then click "Next".
3. Choose a system image that suits your requirements.

## Running the Project:

1. In Android Studio, click the "Open" option and select the `android` folder of your project.
2. Click on "Make Project" under the "Build" option.
3. Once the project has built successfully, click on "Run" and choose your desired device.

## Troubleshooting:

- **Issues with Metro Bundler:** 
  - Clear cache using `npx react-native start --reset-cache`.

- **Encountering Build Errors:**
  1. Validate the `ANDROID_HOME` setting.
  2. Delete the `node_modules` folder and `package-lock.json`, then run `npm install`.

## Resources:

- [Official React Native Documentation](https://reactnative.dev/docs/environment-setup)
