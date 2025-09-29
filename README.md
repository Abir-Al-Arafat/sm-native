# sm-native

A React Native social media app demo with Facebook-like UI built using Expo and TypeScript.

## Features

- Facebook-inspired UI/UX
- News feed with posts
- Post interaction buttons (like, comment, share)
- "What's on your mind?" post creation interface
- User avatars and timestamps
- Clean component architecture

## Technologies

- React Native
- Expo & Expo Router
- TypeScript
- React Native SafeAreaView
- Component-scoped StyleSheet

## Project Structure

```
sm-native/
├── app/                       # Expo Router app directory
│   ├── _layout.tsx            # Root layout with Stack navigator
│   ├── index.tsx              # Main app screen
│   └── styles.ts              # App-level styles
├── components/                # Reusable UI components
│   ├── Buttons/               # Button components
│   │   └── ActionButton.tsx   # Like/Comment/Share buttons
│   ├── Headers/               # Header components
│   │   ├── Header/            # App header component
│   │   └── UserHeader/        # User info in posts
│   ├── Posts/                 # Post-related components
│   │   ├── CreatePost/        # Post creation component
│   │   ├── PostFeed/          # Feed container
│   │   └── PostItem/          # Individual post display
│   └── index.ts               # Component export barrel file
├── database/                  # Mock data storage
│   └── posts.ts               # Dummy post data
├── interfaces/                # TypeScript interfaces
│   ├── IPost.ts               # Post data model
│   └── IUser.ts               # User data model
└── styles/                    # Shared styles
```

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- Expo CLI

### Installation

1. Clone the repository

```bash
git clone https://github.com/Abir-Al-Arafat/sm-native.git
cd sm-native
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Start the development server

```bash
npm start
# or
yarn start
```

4. Run on Android

```bash
npm run android
# or
yarn android
```

5. Run on iOS

```bash
npm run ios
# or
yarn ios
```

## Project Architecture

The application uses a component-based architecture with clean separation of concerns:

- **Component Structure**: UI elements are broken down into reusable components
- **TypeScript Interfaces**: Strong typing for data models
- **Style Organization**: Styles are co-located with their components
- **Mock Data**: Simulated backend with dummy posts

## Future Improvements

- Add state management (Redux/Context API)
- Implement authentication
- Add navigation to user profiles and post details
- Connect to a real backend API
- Support image uploads in posts
- Add animations and gestures
