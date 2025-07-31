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
- ✅ **Custom Font Integration**: OpenSans-Regular font với splash screen
- ✅ **Path Aliasing**: Configured `@components`, `@constants`, `@hooks`, `@assets`
- ✅ **React Navigation**: Native stack navigation với TypeScript
- ✅ **Modal Components**: Create review modal với form validation
- ✅ **Image Handling**: Background images và icon integration
- ✅ **Form Management**: TextInput với validation và state management
- ✅ **Custom Styling**: Text shadows, overlays và responsive design
- ✅ **Vector Icons**: Expo vector icons (AntDesign)
- ✅ **TypeScript Support**: Full type safety với navigation types
- ✅ **Component Architecture**: Modular và reusable components

## 📁 Project Structure

```
MyApp/
├── App.tsx                 # Main app entry point với React Navigation
├── app/                    # Expo router app (deprecated)
│   └── App.tsx            # Todo app component với form handling
├── components/            # Reusable components
│   ├── Tab/              # Screen components
│   │   ├── home.tsx      # Home screen với navigation buttons
│   │   ├── detail.tsx    # Detail screen với background image & stars
│   │   ├── about.tsx     # About screen
│   │   └── create.model.tsx # Modal component cho create review
│   └── navigation/       # Navigation configuration
│       └── app.navigation.tsx # Stack navigator setup
├── types/                # TypeScript type definitions
│   └── navigation.ts     # Navigation param types
├── constants/            # App constants
│   └── const.ts         # Font constants và global styles
├── assets/              # Static assets
│   ├── fonts/          # Custom fonts (OpenSans-Regular.ttf)
│   └── images/         # App images (star.webp, native.webp)
├── babel.config.js     # Babel configuration với module resolver
└── tsconfig.json      # TypeScript configuration với path mapping
```

## 🎨 Styling Features

### Custom Fonts với Splash Screen
```tsx
// Font loading với error handling
const [loaded, error] = useFonts({
    [OPENSANS_REGULAR]: require('../assets/fonts/OpenSans-Regular.ttf'),
});

useEffect(() => {
    if (loaded || error) {
        SplashScreen.hideAsync();
    }
}, [loaded, error]);
```

### React Navigation với TypeScript
```tsx
// Type-safe navigation
type RootStackParamList = {
  Home: undefined;
  Detail: { id: number; title: string; star: number };
  About: undefined;
};

const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
navigation.navigate('Detail', { id: 1, title: 'Test', star: 5 });
```

### Modal Component với Form Validation
```tsx
// Modal với state management
const [modalVisible, setModalVisible] = useState(false);
const [title, setTitle] = useState("");
const [star, setStar] = useState(0);

// Form validation
const handleSubmit = () => {
    if (!title || star == 0) {
        Alert.alert('Validation Error', 'Please fill all fields');
        return;
    }
    // Process form data
};
```

### Background Image với Overlay
```tsx
// Background image với semi-transparent overlay
<ImageBackground 
    source={require("@assets/images/native.webp")} 
    style={{flex: 1}}
    resizeMode="cover"
>
    <View style={{backgroundColor: 'rgba(0, 0, 0, 0.3)', flex: 1}}>
        <Text style={{
            color: '#fff',
            textShadowColor: 'rgba(0, 0, 0, 0.75)',
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: 10
        }}>Content hiển thị rõ ràng</Text>
    </View>
</ImageBackground>
```

### Vector Icons Integration
```tsx
// Sử dụng Expo vector icons
import AntDesign from '@expo/vector-icons/AntDesign';

<AntDesign 
    name="close" 
    size={24} 
    color="black" 
    onPress={() => setModalVisible(false)}
/>
```

## 🔧 Configuration & Setup

### Babel Configuration
Path aliasing được cấu hình trong `babel.config.js`:
```javascript
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@': './app',
            '@components': './components',
            '@constants': './constants',
            '@assets': './assets',
          },
        },
      ],
    ],
  };
};
```

### TypeScript Configuration
Type checking và path mapping trong `tsconfig.json`:
```json
{
  "compilerOptions": {
    "strict": true,
    "paths": {
      "@/*": ["./*"],
      "@components/*": ["./components/*"],
      "@constants/*": ["./constants/*"],
      "@assets/*": ["./assets/*"]
    }
  }
}
```

### Expo Configuration
Tắt Expo Router để sử dụng React Navigation:
```json
// app.json - Đã remove "expo-router" khỏi plugins
"plugins": [
  ["expo-splash-screen", {...}],
  "expo-font"
]
```

## 🚨 Common Issues & Solutions

### 1. Expo Router vs React Navigation Conflict
**Vấn đề**: Dự án được tạo với Expo Router, nhưng muốn sử dụng React Navigation  
**Giải pháp**: 
- Remove `expo-router` khỏi `app.json`
- Thay đổi `main` entry trong `package.json`
- Tạo `App.tsx` ở root làm entry point

### 2. Image Import Issues
**Vấn đề**: `Cannot find module '@assets/images/image.png'`  
**Giải pháp**: Sử dụng `require()` thay vì ES6 import
```tsx
// ❌ Sai cách
import image from '@assets/images/image.png';

// ✅ Đúng cách
source={require('@assets/images/image.png')}
```

### 3. Background Image Overlay
**Vấn đề**: Text bị mờ trên background image  
**Giải pháp**: 
- Sử dụng `resizeMode="cover"`
- Thêm overlay với `backgroundColor: 'rgba(0,0,0,0.3)'`
- Áp dụng `textShadow` cho text

## 📱 App Features

### Main Screens
1. **Home Screen**: Navigation buttons đến các screens khác
2. **Detail Screen**: Hiển thị thông tin với background image và star rating
3. **About Screen**: Thông tin về app với custom styling
4. **Create Modal**: Form tạo review mới với validation

### Key Components
- **Navigation**: Stack navigator với custom headers
- **Modal**: Create review với form handling
- **Image Display**: Background images và icons
- **Form Validation**: Alert dialogs cho validation errors
- **Custom Fonts**: OpenSans integration với splash screen

## �️ Recommended Technical Improvements

### 🎯 Immediate Actions (This Week)

#### 1. Data Persistence Layer
```tsx
// Implement AsyncStorage service
export class StorageService {
  static async saveTodos(todos: ITodo[]) {
    await AsyncStorage.setItem('todos', JSON.stringify(todos));
  }
  
  static async loadTodos(): Promise<ITodo[]> {
    const stored = await AsyncStorage.getItem('todos');
    return stored ? JSON.parse(stored) : [];
  }
}
```

#### 2. Error Boundary Implementation
```tsx
// Create ErrorBoundary component
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  
  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }
  
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('App Error:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <ErrorFallbackScreen onRetry={() => this.setState({ hasError: false })} />;
    }
    return this.props.children;
  }
}
```

#### 3. Custom Hooks for State Management
```tsx
// useAsyncStorage hook
export const useAsyncStorage = <T>(key: string, defaultValue: T) => {
  const [data, setData] = useState<T>(defaultValue);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    loadData();
  }, []);
  
  const loadData = async () => {
    try {
      const stored = await AsyncStorage.getItem(key);
      if (stored) setData(JSON.parse(stored));
    } catch (error) {
      console.error('Failed to load data:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const saveData = async (newData: T) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(newData));
      setData(newData);
    } catch (error) {
      console.error('Failed to save data:', error);
    }
  };
  
  return { data, loading, saveData, loadData };
};
```

#### 4. Performance Optimizations
```tsx
// Memo components to prevent unnecessary re-renders
const TodoItem = React.memo(({ todo, onDelete }: TodoItemProps) => {
  const handleDelete = useCallback(() => onDelete(todo.id), [todo.id, onDelete]);
  
  return (
    <Pressable onPress={handleDelete}>
      <Text>{todo.name}</Text>
    </Pressable>
  );
});

// Use FlatList for better performance
const TodoList = ({ todos, onDelete }: TodoListProps) => {
  const renderItem = useCallback(({ item }: { item: ITodo }) => (
    <TodoItem todo={item} onDelete={onDelete} />
  ), [onDelete]);
  
  const keyExtractor = useCallback((item: ITodo) => item.id.toString(), []);
  
  return (
    <FlatList
      data={todos}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      removeClippedSubviews={true}
      maxToRenderPerBatch={10}
      windowSize={10}
    />
  );
};
```

### 🔧 Technical Architecture Improvements

#### 1. Context API for Global State
```tsx
// AppContext for global state management
interface AppContextType {
  todos: ITodo[];
  reviews: IReview[];
  theme: 'light' | 'dark';
  addTodo: (todo: ITodo) => void;
  deleteTodo: (id: number) => void;
  toggleTheme: () => void;
}

export const AppContext = createContext<AppContextType | null>(null);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { data: todos, saveData: saveTodos } = useAsyncStorage<ITodo[]>('todos', []);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  const addTodo = useCallback((todo: ITodo) => {
    const newTodos = [...todos, todo];
    saveTodos(newTodos);
  }, [todos, saveTodos]);
  
  const deleteTodo = useCallback((id: number) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    saveTodos(newTodos);
  }, [todos, saveTodos]);
  
  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }, []);
  
  return (
    <AppContext.Provider value={{ todos, addTodo, deleteTodo, theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};
```

#### 2. Type Safety Improvements
```tsx
// Enhanced type definitions
export interface ITodo {
  readonly id: number;
  title: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
  priority: 'low' | 'medium' | 'high';
  category?: string;
}

export interface IReview {
  readonly id: number;
  title: string;
  rating: number; // 1-5
  content: string;
  createdAt: Date;
  tags: string[];
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

// Navigation types enhancement
export type RootStackParamList = {
  Home: undefined;
  Detail: { 
    id: number; 
    title: string; 
    star: number;
    source?: 'todo' | 'review';
  };
  About: undefined;
  CreateTodo: undefined;
  EditTodo: { todoId: number };
  Settings: undefined;
};
```

#### 3. Service Layer Architecture
```tsx
// API Service layer
export class ApiService {
  private static baseURL = __DEV__ ? 'http://localhost:3000' : 'https://api.taodoapp.com';
  
  static async request<T>(endpoint: string, options?: RequestInit): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
        ...options,
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      return {
        data: null as T,
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }
  
  static async getTodos(): Promise<ApiResponse<ITodo[]>> {
    return this.request<ITodo[]>('/todos');
  }
  
  static async createTodo(todo: Omit<ITodo, 'id' | 'createdAt' | 'updatedAt'>): Promise<ApiResponse<ITodo>> {
    return this.request<ITodo>('/todos', {
      method: 'POST',
      body: JSON.stringify(todo),
    });
  }
}
```

### 🎨 UI/UX Enhancements

#### 1. Theme System Implementation
```tsx
// Theme configuration
export const themes = {
  light: {
    colors: {
      primary: '#007AFF',
      background: '#FFFFFF',
      surface: '#F2F2F7',
      text: '#000000',
      textSecondary: '#6D6D70',
      border: '#C6C6C8',
      error: '#FF3B30',
      success: '#34C759',
    },
    spacing: {
      xs: 4,
      sm: 8,
      md: 16,
      lg: 24,
      xl: 32,
    },
  },
  dark: {
    colors: {
      primary: '#0A84FF',
      background: '#000000',
      surface: '#1C1C1E',
      text: '#FFFFFF',
      textSecondary: '#8E8E93',
      border: '#38383A',
      error: '#FF453A',
      success: '#30D158',
    },
    spacing: {
      xs: 4,
      sm: 8,
      md: 16,
      lg: 24,
      xl: 32,
    },
  },
};

// useTheme hook
export const useTheme = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useTheme must be used within AppProvider');
  
  return {
    theme: themes[context.theme],
    isDark: context.theme === 'dark',
    toggleTheme: context.toggleTheme,
  };
};
```

#### 2. Loading States & Feedback
```tsx
// Loading component
export const LoadingSpinner: React.FC<{ size?: 'small' | 'large' }> = ({ size = 'small' }) => {
  const { theme } = useTheme();
  
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ActivityIndicator 
        size={size} 
        color={theme.colors.primary} 
      />
    </View>
  );
};

// Skeleton loader
export const SkeletonLoader: React.FC<{ width: number; height: number }> = ({ width, height }) => {
  const opacity = useRef(new Animated.Value(0.3)).current;
  
  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, { toValue: 1, duration: 500, useNativeDriver: true }),
        Animated.timing(opacity, { toValue: 0.3, duration: 500, useNativeDriver: true }),
      ])
    );
    animation.start();
    return () => animation.stop();
  }, []);
  
  return (
    <Animated.View 
      style={[
        { width, height, backgroundColor: '#E0E0E0', borderRadius: 4 }, 
        { opacity }
      ]} 
    />
  );
};
```

### 🧪 Testing Strategy

#### 1. Unit Testing Setup
```bash
# Install testing dependencies
npm install --save-dev @testing-library/react-native @testing-library/jest-native jest-expo
```

```tsx
// Example test file: __tests__/components/TodoItem.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TodoItem from '../../components/TodoItem';

describe('TodoItem', () => {
  const mockTodo = {
    id: 1,
    title: 'Test Todo',
    completed: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    priority: 'medium' as const,
  };
  
  it('renders todo title correctly', () => {
    const { getByText } = render(<TodoItem todo={mockTodo} onDelete={jest.fn()} />);
    expect(getByText('Test Todo')).toBeTruthy();
  });
  
  it('calls onDelete when pressed', () => {
    const mockOnDelete = jest.fn();
    const { getByTestId } = render(<TodoItem todo={mockTodo} onDelete={mockOnDelete} />);
    
    fireEvent.press(getByTestId('delete-button'));
    expect(mockOnDelete).toHaveBeenCalledWith(1);
  });
});
```

## �🚀 Future Development Roadmap

### Phase 1: Core Enhancements
- 🔄 **Pull-to-Refresh**: Implement refresh functionality cho danh sách
- 🔍 **Search Functionality**: Tìm kiếm todos/reviews theo title
- 📊 **Sort & Filter**: Sắp xếp theo date, priority, star rating
- 💾 **Local Storage**: AsyncStorage để lưu data offline
- 🗑️ **Delete Confirmation**: Modal xác nhận trước khi xóa
- ✏️ **Edit Functionality**: Chỉnh sửa todos/reviews đã tạo

### Phase 2: UI/UX Improvements
- 🌙 **Dark Mode**: Theme switching với Context API
- 🎨 **Custom Themes**: Multiple color schemes
- 📱 **Responsive Design**: Better tablet và landscape support
- ⚡ **Loading States**: Skeleton loaders và progress indicators
- 🎯 **Animations**: Smooth transitions với React Native Reanimated
- 🔔 **Toast Notifications**: Success/error messages
- 📐 **Better Layouts**: Improved spacing và typography

### Phase 3: Advanced Features
- 🔐 **Authentication**: Login/Register với Expo Auth Session
- ☁️ **Cloud Sync**: Firebase integration cho real-time data
- 📷 **Image Upload**: Camera và gallery integration
- 🔔 **Push Notifications**: Expo Notifications
- 📍 **Location Services**: Expo Location cho location-based todos
- 📅 **Date Picker**: Due dates cho todos
- ⏰ **Reminders**: Scheduled notifications
- 📤 **Share Functionality**: Social sharing cho reviews

### Phase 4: Performance & Scaling
- 🚀 **Code Splitting**: Lazy loading cho screens
- 📈 **Analytics**: Expo Analytics integration
- 🧪 **Testing**: Jest và React Native Testing Library
- 📱 **App Store**: Prepare cho production deployment
- 🔒 **Security**: Input sanitization và secure storage
- 🌐 **Internationalization**: Multi-language support
- 📊 **Performance Monitoring**: Flipper integration

### Phase 5: Developer Experience
- 🛠️ **Storybook**: Component documentation
- 📋 **ESLint Rules**: Stricter code quality
- 🔧 **Husky Hooks**: Pre-commit validation
- 📦 **CI/CD**: GitHub Actions cho automated testing
- 📚 **API Documentation**: Auto-generated docs
- 🧩 **Component Library**: Reusable UI components
- 📝 **Code Generation**: Templates cho new features

## 🎯 Priority Features (Next Sprint)

### 🔥 Critical Improvements (Làm ngay)
1. **AsyncStorage Integration** - Data persistence để app không mất data khi restart
2. **Error Boundary Components** - Catch và handle React errors gracefully
3. **Loading States & Feedback** - Spinner, skeleton loading cho better UX
4. **Form Validation Enhanced** - Robust validation với clear error messages
5. **Memory Management** - Clean up timers, listeners khi unmount components

### 🚀 High Priority (Tuần tới)
1. **FlatList Implementation** - Thay thế ScrollView cho large datasets
2. **Search & Filter Logic** - Basic search trong todos/reviews
3. **Dark Mode Context** - Theme switching system
4. **Custom Hooks** - Refactor logic thành reusable hooks
5. **Image Optimization** - Compress và cache images

### 📱 Medium Priority (Tháng tới)
1. **Offline Support** - NetInfo + AsyncStorage cho offline functionality
2. **Navigation Improvements** - Better params typing, deep linking
3. **Animation System** - Smooth transitions với React Native Reanimated
4. **Testing Setup** - Unit tests cho critical components
5. **Performance Monitoring** - Identify và fix performance bottlenecks

## 🔧 Technical Debt & Improvements

### Code Quality
- [ ] Refactor repetitive styles thành shared StyleSheet
- [ ] Create custom hooks cho common logic
- [ ] Implement error boundaries
- [ ] Add prop validation với PropTypes hoặc Zod
- [ ] Standardize naming conventions

### Performance
- [ ] Optimize image loading với lazy loading
- [ ] Implement FlatList cho large datasets
- [ ] Reduce bundle size với dynamic imports
- [ ] Add memoization cho expensive calculations
- [ ] Optimize re-renders với React.memo

### Developer Experience
- [ ] Setup absolute imports cho tất cả paths
- [ ] Add debugging tools (Reactotron)
- [ ] Create development vs production configs
- [ ] Add automated testing pipeline
- [ ] Setup code coverage reporting

## 📱 Platform-Specific Features

### iOS Enhancements
- 🍎 **Haptic Feedback**: iOS-specific touch feedback
- 📱 **Widget Support**: iOS home screen widgets
- 🔍 **Spotlight Search**: Search app content từ iOS
- 📋 **Share Extensions**: iOS share sheet integration

### Android Enhancements
- 🤖 **Material Design**: Full Material You support
- 🔔 **Rich Notifications**: Android notification channels
- 📱 **Adaptive Icons**: Dynamic icon theming
- ⚡ **Quick Actions**: Android app shortcuts

## 🧪 Experimental Features

### AI Integration
- 🤖 **Smart Suggestions**: AI-powered todo suggestions
- 📝 **Auto-completion**: Intelligent text completion
- 🏷️ **Auto-categorization**: ML-based categorization
- 📊 **Analytics Insights**: AI-powered user insights

### Emerging Technologies
- 🥽 **AR Features**: Augmented reality todo visualization
- 🎙️ **Voice Commands**: Speech-to-text integration
- 🤝 **Collaboration**: Real-time collaborative editing
- 🔗 **Web3 Integration**: Blockchain-based data storage

## 🔧 Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Note
Đây là dự án React Native Expo, khi tạo và cấu hình thì được cài sẵn Expo Router nên khi sử dụng React Native Navigation thì sẽ bị conflict."Fix bằng cách chỉ sử dụng 1 công nghệ"

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

## 📝 Development Notes
- Project sử dụng React Navigation thay vì Expo Router
- Custom fonts được load với splash screen handling
- Modal components với proper state management
- Background images với overlay techniques
- TypeScript được cấu hình đầy đủ cho type safety
- Path aliasing giúp import statements ngắn gọn và dễ maintain

## 📋 Contributing Guidelines

### Development Workflow
1. **Branch Naming**: `feature/feature-name` hoặc `bugfix/issue-description`
2. **Commit Messages**: Sử dụng conventional commits format
3. **Code Review**: Tất cả PR cần review trước khi merge
4. **Testing**: Add tests cho new features
5. **Documentation**: Update README khi có breaking changes

### Getting Started with Development
```bash
# Clone repository
git clone https://github.com/hoanghuuthanhdev/Taodo-App-QIT-.git

# Install dependencies
npm install

# Start development server
npx expo start

# Run tests (when implemented)
npm test

# Build for production
npm run build
```

### Code Style Guidelines
- Sử dụng TypeScript cho tất cả new code
- Follow React Native best practices
- Use meaningful component và variable names
- Keep components small và focused
- Implement proper error handling
- Add comments cho complex logic

## 🎯 Recommended Implementation Order

### Week 1: Foundation
1. Setup AsyncStorage cho data persistence
2. Implement error boundaries
3. Add loading states cho tất cả async operations
4. Create useAsyncStorage custom hook

### Week 2: Performance & Architecture
1. Replace ScrollView bằng FlatList
2. Implement React.memo cho components
3. Setup Context API cho global state
4. Add search functionality

### Week 3: UI/UX Improvements
1. Implement dark mode system
2. Add animations cho transitions
3. Improve form validation
4. Add toast notifications

### Week 4: Testing & Quality
1. Setup testing environment
2. Write unit tests cho critical components
3. Add performance monitoring
4. Code review và refactoring

## 💡 Key Technical Decisions

### Why AsyncStorage over Redux?
- **Simplicity**: Dự án nhỏ, không cần complex state management
- **Performance**: Ít overhead hơn Redux
- **Learning curve**: Dễ học và implement

### Why Context API over External State Management?
- **Native solution**: Built-in React, không cần thêm dependencies
- **Sufficient**: Đủ cho app scale hiện tại
- **Type-safe**: Works well với TypeScript

### Why FlatList over ScrollView?
- **Performance**: Virtual scrolling cho large datasets
- **Memory efficiency**: Chỉ render visible items
- **Built-in optimizations**: removeClippedSubviews, windowing





