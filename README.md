# sm-native

sm-native/
├── app/ # Expo Router app directory
│ ├── \_layout.tsx # Root layout with Stack navigator
│ ├── index.tsx # Main app screen
│ └── styles.ts # App-level styles
├── components/ # Reusable UI components
│ ├── Buttons/ # Button components
│ │ └── ActionButton.tsx # Like/Comment/Share buttons
│ ├── Headers/ # Header components
│ │ ├── Header/ # App header component
│ │ └── UserHeader/ # User info in posts
│ ├── Posts/ # Post-related components
│ │ ├── CreatePost/ # Post creation component
│ │ ├── PostFeed/ # Feed container
│ │ └── PostItem/ # Individual post display
│ └── index.ts # Component export barrel file
├── database/ # Mock data storage
│ └── posts.ts # Dummy post data
├── interfaces/ # TypeScript interfaces
│ ├── IPost.ts # Post data model
│ └── IUser.ts # User data model
└── styles/ # Shared styles
