// Dummy data for comments
import { User } from "../interfaces/IUser";

export interface Comment {
  id: number;
  user: User;
  text: string;
  timestamp: string;
}

// Map of post IDs to their comments
export const DUMMY_COMMENTS: Record<number, Comment[]> = {
  1: [
    {
      id: 101,
      user: {
        id: 3,
        name: "Mike Chen",
        avatar: "https://i.pravatar.cc/100?img=3",
      },
      text: "Love this cafe! What's the name?",
      timestamp: "1h",
    },
    {
      id: 102,
      user: {
        id: 4,
        name: "Emma Wilson",
        avatar: "https://i.pravatar.cc/100?img=4",
      },
      text: "I need to check it out this weekend!",
      timestamp: "45m",
    },
    {
      id: 103,
      user: {
        id: 5,
        name: "Alex Johnson",
        avatar: "https://i.pravatar.cc/100?img=5",
      },
      text: "Do they have good WiFi?",
      timestamp: "20m",
    },
  ],
  2: [
    {
      id: 201,
      user: {
        id: 1,
        name: "John Smith",
        avatar: "https://i.pravatar.cc/100?img=1",
      },
      text: "Breathtaking! Where was this taken?",
      timestamp: "3h",
    },
    {
      id: 202,
      user: {
        id: 6,
        name: "Sophia Lee",
        avatar: "https://i.pravatar.cc/100?img=6",
      },
      text: "The colors are amazing! 😍",
      timestamp: "2h",
    },
  ],
  3: [
    {
      id: 301,
      user: {
        id: 2,
        name: "Sarah Johnson",
        avatar: "https://i.pravatar.cc/100?img=2",
      },
      text: "I'd recommend 'The Midnight Library' if you enjoyed this!",
      timestamp: "5h",
    },
    {
      id: 302,
      user: {
        id: 7,
        name: "David Brown",
        avatar: "https://i.pravatar.cc/100?img=7",
      },
      text: "The Great Gatsby is a classic. Have you read any other Fitzgerald?",
      timestamp: "4h",
    },
    {
      id: 303,
      user: {
        id: 8,
        name: "Lisa Taylor",
        avatar: "https://i.pravatar.cc/100?img=8",
      },
      text: "I just finished it too! The ending really made me think.",
      timestamp: "2h",
    },
  ],
  4: [
    {
      id: 401,
      user: {
        id: 9,
        name: "Ryan Martinez",
        avatar: "https://i.pravatar.cc/100?img=9",
      },
      text: "Great insights!",
      timestamp: "1h",
    },
  ],
};
