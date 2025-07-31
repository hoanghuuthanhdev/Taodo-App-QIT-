# TaoDo App - React Native Expo Project 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## 📱 About Project
This is a project practice of course **HoiDanIT** with React Native Expo - A simple Todo application with modern React Native features.

## 🚀 Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## 🛠️ Technical Stack

### Core Technologies
- **React Native**: 0.79.5
- **Expo SDK**: ~53.0.20
- **TypeScript**: ~5.8.3
- **React**: 19.0.0

### Navigation & Routing
- `@react-navigation/native`: ^7.1.16
- `@react-navigation/native-stack`: ^7.3.23
- `@react-navigation/bottom-tabs`: ^7.3.10
- `expo-router`: ~5.1.4

### UI & Styling
- `@expo/vector-icons`: ^14.1.0
- `expo-font`: ~13.3.2 (Custom fonts integration)
- `expo-image`: ~2.4.0
- `expo-blur`: ~14.1.5
- `expo-symbols`: ~0.4.5

### Development Tools
- `babel-plugin-module-resolver`: ^5.0.2 (Path aliasing)
- `eslint-config-expo`: ~9.2.0
- Custom Babel configuration with aliases

### Features Implemented
- ✅ **Custom Font Integration**: OpenSans-Regular font
- ✅ **Path Aliasing**: Configured `@components`, `@constants`, `@hooks`, `@assets`
- ✅ **Array Styles**: Combined styling approach
- ✅ **Component-based Architecture**: Modular tab components
- ✅ **TypeScript Support**: Full type safety
- ✅ **React Navigation**: Native stack navigation setup

## 📁 Project Structure

```
MyApp/
├── app/                    # Main app entry point
│   └── index.tsx          # App component with font loading
├── components/            # Reusable components
│   └── Tab/              # Tab-based components
│       ├── home.tsx      # Home screen
│       ├── detail.tsx    # Detail screen  
│       └── about.tsx     # About screen
├── constants/            # App constants
│   └── const.ts         # Font and style constants
├── assets/              # Static assets
│   ├── fonts/          # Custom fonts
│   └── images/         # App images
├── babel.config.js     # Babel configuration with aliases
└── tsconfig.json      # TypeScript configuration
```

## 🎨 Styling Features

### Custom Fonts
```tsx
// Font integration example
const [loaded, error] = useFonts({
    'Thanh': require('../assets/fonts/OpenSans-Regular.ttf'),
});
```

### Array Styles Usage
```tsx
// Combining multiple styles
<Text style={[styles.about, globalFont.font]}>About Screen</Text>
```

### Path Aliases
```tsx
// Clean imports with aliases
import { OPENSANS_REGULAR } from "@constants/const";
import HomeScreen from "@components/Tab/home";
```

## 🔧 Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## 📚 Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## 🤝 Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

## 👨‍💻 Author
**Course**: HoiDanIT - React Native Expo Practice Project





