## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

## Fonts Summary

- There are 2 types, local and google fonts
- 2 ways to add fonts:
  - expo-font-config in app.json
  - useFont hook and load it upon app start
- useFont hook will be used in Expo Go apps as the config way is not available in them

## Assets Summary

- 2 ways to load assets

  - with build in config file
  - using useAssets hooks

- local assets are served over http during development (e.g: http://localhost:8081/assets/logo.png) and in production from device
