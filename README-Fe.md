# Influish Mobile App

**Influish Mobile App** is a cross-platform Flutter application that connects influencers and brands for streamlined collaborations and marketing campaigns. The app supports dual user flows with tailored experiences for both influencers and brands.

## 🚀 Project Overview

This is part of the **Influish** ecosystem which includes:
- **frontend_app** (Flutter) - Main mobile application
- **admin-web-app** (React.js) - Admin panel
- **backend** (NestJS) - Common backend API

## ✨ Key Features

### 🎯 For Influencers
- **Campaign Discovery**: Browse and apply for brand campaigns
- **Performance Analytics**: Track campaign performance and earnings
- **Content Management**: Upload and manage collaboration content
- **Wallet System**: Track earnings and withdraw funds
- **Instagram Integration**: Connect and verify Instagram accounts
- **KYC Verification**: Complete profile verification for payments

### 🏢 For Brands
- **Campaign Creation**: Create AI-powered or custom campaigns
- **Influencer Discovery**: Find and connect with relevant influencers
- **Campaign Management**: Track active campaigns and submissions
- **Payment Integration**: Secure payment processing with multiple gateways
- **Analytics Dashboard**: Monitor campaign performance and ROI

### 🔄 Common Features
- **Real-time Chat**: Direct messaging between brands and influencers
- **Push Notifications**: Campaign updates, chat messages, and system alerts
- **Multi-language Support**: Localized content and interfaces
- **Offline Support**: Basic functionality without internet connectivity
- **Social Media Integration**: Instagram, YouTube content integration

## 🛠 Tech Stack

### Core Framework
- **Flutter** `^3.3.4` - Cross-platform mobile development
- **Dart** - Programming language

### State Management & Architecture
- **Riverpod** (`hooks_riverpod: ^2.5.1`) - State management
- **Flutter Bloc** (`flutter_bloc: ^9.1.0`) - Business logic components
- **Hydrated Bloc** (`hydrated_bloc: ^10.0.0`) - State persistence
- **Get It** (`get_it: ^8.0.0`) - Dependency injection

### UI & Design
- **Flutter Screen Util** (`flutter_screenutil: ^5.9.3`) - Responsive design
- **Flutter SVG** (`flutter_svg: ^2.0.10+1`) - Vector graphics
- **Lottie** (`lottie: ^3.3.1`) - Animations
- **Shimmer** (`shimmer: ^3.0.0`) - Loading effects
- **Custom Fonts**: Montserrat, Poppins

### Networking & Data
- **Retrofit** (`retrofit: ^4.4.0`) - HTTP client with code generation
- **Dio** (`awesome_dio_interceptor: ^1.2.0`) - HTTP interceptors
- **Floor** (`floor: ^1.4.2`) - Local SQLite database
- **Cached Network Image** (`cached_network_image: ^3.4.1`) - Image caching

### Media & Files
- **Image Picker** (`image_picker: ^1.1.2`) - Camera/gallery access
- **Video Player** (`video_player: ^2.9.2`) - Video playback
- **Image Cropper** (`image_cropper: ^9.0.0`) - Image editing
- **File Picker** (`file_picker: ^9.0.0`) - File selection
- **Flutter Image Compress** (`flutter_image_compress: ^2.4.0`) - Image optimization

### Payment Integration
- **Razorpay** (`razorpay_flutter: ^1.3.7`) - Payment gateway
- **Cashfree** (`flutter_cashfree_pg_sdk: ^2.2.8+46`) - Payment processing

### Firebase Services
- **Firebase Core** (`firebase_core: ^3.13.0`) - Firebase SDK
- **Firebase Messaging** (`firebase_messaging: ^15.2.5`) - Push notifications
- **Firebase Analytics** (`firebase_analytics: ^11.4.5`) - User analytics

### Communication
- **Socket.IO** (`socket_io_client: ^3.0.2`) - Real-time communication
- **Just Audio** (`just_audio: ^0.9.41`) - Audio playback

### Utilities
- **Go Router** (`go_router: ^14.3.0`) - Navigation
- **Shared Preferences** (`shared_preferences: ^2.3.2`) - Local storage
- **Permission Handler** (`permission_handler: ^11.4.0`) - Device permissions
- **Connectivity Plus** (`connectivity_plus: ^6.1.1`) - Network status
- **Device Info Plus** (`device_info_plus: ^11.2.0`) - Device information
- **Package Info Plus** (`package_info_plus: ^8.1.2`) - App information

### Analytics & Monitoring
- **Mixpanel** (`mixpanel_flutter: ^2.4.4`) - User analytics
- **Sentry** (`sentry_flutter: ^8.14.1`) - Error tracking and monitoring

## 🔧 Installation & Setup

### Prerequisites
- **Flutter SDK** `>=3.3.4 <4.0.0`
- **Dart SDK** (included with Flutter)
- **Android Studio** / **Xcode** for mobile development
- **Git** for version control

### 1. Clone the Repository
```bash
git clone <repository-url>
cd influish/frontend_app
```

### 2. Install Dependencies
```bash
flutter pub get
```

### 3. Generate Code (Required)
```bash
# Generate code for Retrofit, Floor, and JSON serialization
flutter packages pub run build_runner build --delete-conflicting-outputs
```

### 4. Firebase Configuration

#### Android Setup
1. Add `google-services.json` to `android/app/`
2. Ensure Firebase is configured in `android/app/build.gradle`

#### iOS Setup  
1. Add `GoogleService-Info.plist` to `ios/Runner/`
2. Configure iOS capabilities in Xcode for push notifications

### 5. Environment Configuration
Create necessary configuration files:
- API endpoints configuration
- Payment gateway keys (Razorpay, Cashfree)
- Socket.IO server configuration

### 6. Run the Application

#### Development
```bash
# Android
flutter run --flavor dev -t lib/main.dart

# iOS  
flutter run --flavor dev -t lib/main.dart -d ios
```

#### Production
```bash
# Android
flutter build apk --release
flutter build appbundle --release

# iOS
flutter build ios --release
```

### 7. Code Generation Commands
```bash
# Generate files after model changes
flutter packages pub run build_runner build

# Watch for changes and generate automatically  
flutter packages pub run build_runner watch

# Clean and regenerate all files
flutter packages pub run build_runner clean
flutter packages pub run build_runner build --delete-conflicting-outputs
```

## 📁 Project Architecture

The app follows **Clean Architecture** principles with **feature-based organization** separating concerns between Influencer and Brand flows.

```text
lib/
├── main.dart                        # App entry point
├── app_root.dart                    # Root widget configuration  
├── firebase_options.dart            # Firebase configuration
└── src/
    ├── locator.dart                 # Dependency injection setup
    ├── config/                      # App-wide configuration
    │   ├── router/                  # Navigation & routing
    │   │   ├── app_router.dart      # GoRouter configuration
    │   │   ├── router_helper.dart   # Route utilities
    │   │   └── routes.dart          # Route definitions
    │   └── themes/                  # App theming
    │       └── app_themes.dart      # Material theme configuration
    │
    ├── utils/                       # Shared utilities
    │   ├── constants/               # App constants
    │   │   ├── colors.dart          # Color palette
    │   │   ├── strings.dart         # String constants
    │   │   ├── images.dart          # Asset paths
    │   │   └── shared_pref.dart     # Shared preferences keys
    │   ├── extensions/              # Dart extensions
    │   │   ├── format_util.dart     # Formatting utilities
    │   │   ├── image_picker.dart    # Image picker extensions
    │   │   └── scroll_controller.dart
    │   ├── resources/               # Resource definitions
    │   │   └── data_state.dart      # API response wrapper
    │   └── services/                # Platform services
    │       ├── auth_service.dart    # Authentication service
    │       ├── notification_handler.dart
    │       ├── socket_service.dart  # Real-time communication
    │       └── analytics/           # Analytics services
    │           ├── mixpanel_manager.dart
    │           └── analytics_service.dart
    │
    ├── common/                      # Shared components
    │   ├── blocs/                   # Shared business logic
    │   │   ├── common_user/         # User state management
    │   │   ├── payment/             # Payment processing
    │   │   └── bloc_reset_manager.dart
    │   ├── interceptors/            # HTTP interceptors
    │   │   ├── auth_interceptor.dart
    │   │   └── error_interceptor.dart
    │   ├── repositories/            # Base repository classes
    │   │   └── base_api_repository.dart
    │   ├── views/                   # Shared screens
    │   │   ├── onboarding.dart      # App onboarding
    │   │   ├── notifications.dart   # Notification center
    │   │   ├── ai_screens/          # AI-powered features
    │   │   └── dashboard/           # Common dashboard widgets
    │   └── widgets/                 # Reusable UI components
    │       ├── custom_button.dart   # Custom button widgets
    │       ├── custom_textfield.dart
    │       ├── custom_app_bar.dart
    │       ├── custom_text/         # Typography system
    │       ├── notification/        # Notification components
    │       └── ai_bot/              # AI chat components
    │
    ├── presentation/                # Feature-specific UI
    │   ├── influencer/              # Influencer user flow
    │   │   ├── blocs/               # Influencer BLoCs
    │   │   │   ├── home/            # Home screen logic
    │   │   │   ├── profile/         # Profile management
    │   │   │   ├── campaign/        # Campaign operations
    │   │   │   ├── explore/         # Campaign discovery
    │   │   │   ├── inbox/           # Chat & messaging
    │   │   │   └── signup/          # Registration flow
    │   │   ├── views/               # Influencer screens
    │   │   │   ├── influencer_home.dart
    │   │   │   ├── profile.dart
    │   │   │   ├── explore.dart
    │   │   │   ├── campaign_detail.dart
    │   │   │   ├── chat.dart
    │   │   │   ├── wallet.dart
    │   │   │   └── settings.dart
    │   │   └── widgets/             # Influencer-specific widgets
    │   │       ├── auth/            # Authentication components
    │   │       ├── campaign/        # Campaign widgets
    │   │       ├── profile/         # Profile widgets
    │   │       └── wallet/          # Wallet components
    │   │
    │   └── brand/                   # Brand user flow
    │       ├── blocs/               # Brand BLoCs
    │       │   ├── home/            # Brand dashboard logic
    │       │   ├── profile/         # Brand profile management
    │       │   ├── campaign_builder/ # Campaign creation
    │       │   ├── campaign_management/ # Campaign tracking
    │       │   ├── inbox/           # Brand messaging
    │       │   └── signup/          # Brand registration
    │       ├── views/               # Brand screens
    │       │   ├── brand_home.dart
    │       │   ├── brand_profile.dart
    │       │   ├── campaign_creation/
    │       │   │   ├── create_campaign.dart
    │       │   │   └── campaign_publish.dart
    │       │   ├── brand_inbox.dart
    │       │   ├── brand_wallet.dart
    │       │   └── influencer_details.dart
    │       └── widgets/             # Brand-specific widgets
    │           ├── campaign_management/
    │           ├── brand_profile/
    │           ├── brand_wallet/
    │           └── influencer_applied/
    │
    ├── domain/                      # Business logic layer
    │   ├── common/                  # Shared domain models
    │   │   ├── models/              # Common data models
    │   │   │   ├── requests/        # API request models
    │   │   │   └── responses/       # API response models
    │   │   └── repositories/        # Domain repository interfaces
    │   ├── influencer/              # Influencer domain
    │   │   ├── models/
    │   │   │   ├── requests/        # Influencer API requests
    │   │   │   └── responses/       # Influencer API responses
    │   │   └── repositories/        # Influencer repository interfaces
    │   └── brand/                   # Brand domain
    │       ├── models/
    │       │   ├── requests/        # Brand API requests
    │       │   └── responses/       # Brand API responses
    │       └── repositories/        # Brand repository interfaces
    │
    └── data/                        # Data access layer
        ├── common/                  # Shared data sources
        │   ├── datasources/
        │   │   ├── remote/          # API services
        │   │   │   ├── user_service.dart
        │   │   │   ├── chat_service.dart
        │   │   │   ├── content_service.dart
        │   │   │   └── payment_service.dart
        │   │   └── local/           # Local database
        │   └── repositories/        # Repository implementations
        ├── influencer/              # Influencer data layer
        │   ├── datasources/
        │   │   ├── remote/          # Influencer API services
        │   │   └── local/           # Influencer local storage
        │   └── repositories/        # Influencer repository implementations
        └── brand/                   # Brand data layer
            ├── datasources/
            │   ├── remote/          # Brand API services  
            │   └── local/           # Brand local storage
            └── repositories/        # Brand repository implementations
```

### Key Architecture Patterns

- **Clean Architecture**: Separation of concerns with clear boundaries
- **BLoC Pattern**: State management with business logic components
- **Repository Pattern**: Abstraction over data sources
- **Dependency Injection**: Using GetIt for loose coupling
- **Feature-based Organization**: Code organized by business features
- **Code Generation**: Retrofit, Floor, and JSON serialization

## 🚦 Development Guidelines

### Getting Started for New Developers

1. **Understand the Architecture**: Review the project structure and clean architecture principles
2. **Study the User Flows**: Familiarize yourself with both Influencer and Brand user journeys
3. **Review Code Patterns**: Look at existing BLoCs, repositories, and UI components
4. **Follow Naming Conventions**: Use consistent naming across files and classes
5. **Test Your Changes**: Ensure new features work on both Android and iOS

### Code Style & Standards

- **Linting**: Use `flutter analyze` to check code quality
- **Formatting**: Run `dart format .` before committing
- **State Management**: Use BLoC pattern for business logic
- **Error Handling**: Implement proper error states and user feedback
- **Responsive Design**: Use ScreenUtil for responsive layouts
- **Asset Management**: Organize images and icons in appropriate folders

### Development Workflow

1. **Create Feature Branch**: `git checkout -b feature/your-feature-name`
2. **Generate Code**: Run build_runner after model changes
3. **Test Changes**: Test on both platforms and user types
4. **Code Review**: Submit PR with clear description
5. **Update Documentation**: Update README if adding new dependencies

### Common Development Tasks

#### Adding a New Package
1. Add to `pubspec.yaml`
2. Run `flutter pub get`
3. Update README.md with package description
4. Configure platform-specific setup if needed

#### Creating a New Screen
1. Create view in appropriate feature folder
2. Create corresponding BLoC for business logic
3. Add routes in `app_router.dart`
4. Create widgets in feature widgets folder

#### Adding API Integration
1. Define request/response models in domain layer
2. Create service in data/remote layer
3. Implement repository in data/repositories
4. Use repository in BLoC for state management

### Debugging & Troubleshooting

#### Common Issues
- **Build errors**: Run `flutter clean && flutter pub get`
- **Code generation**: Run `flutter packages pub run build_runner clean`
- **Firebase issues**: Check google-services.json/GoogleService-Info.plist
- **Permission issues**: Update AndroidManifest.xml and Info.plist

#### Performance Optimization
- Use `const` constructors where possible
- Implement lazy loading for lists
- Optimize image loading with cached_network_image
- Use flutter_screenutil for responsive design

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** following our code guidelines
4. **Run tests and linting**: `flutter analyze && flutter test`
5. **Commit your changes**: `git commit -m 'Add amazing feature'`
6. **Push to branch**: `git push origin feature/amazing-feature` 
7. **Open a Pull Request** with detailed description

### Contribution Guidelines
- Follow existing code patterns and architecture
- Add documentation for new features
- Ensure cross-platform compatibility
- Test thoroughly on both user flows (Influencer/Brand)
- Update README.md if adding new dependencies

## 📞 Support & Contact

- **Technical Issues**: Create an issue in the repository
- **General Inquiries**: [support@influish.com](mailto:support@influish.com)
- **Documentation**: Check README.md and inline code comments

## 📄 License

This project is private and proprietary. All rights reserved.
