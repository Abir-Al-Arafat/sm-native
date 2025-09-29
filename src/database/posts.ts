// Dummy data for posts
import { Post } from "../interfaces/IPost";

export const DUMMY_POSTS: Post[] = [
  {
    id: 1,
    user: {
      id: 1,
      name: "John Smith",
      avatar: "https://i.pravatar.cc/100?img=1",
    },
    content:
      "Just had an amazing coffee at the new cafe downtown! ☕️ The atmosphere is perfect for working. Highly recommend it to anyone looking for a quiet spot.",
    timestamp: "2h",
    likes: 24,
    comments: 8,
  },
  {
    id: 2,
    user: {
      id: 2,
      name: "Sarah Johnson",
      avatar: "https://i.pravatar.cc/100?img=2",
    },
    content:
      "Beautiful sunset today! Nature never fails to amaze me. Taking a moment to appreciate the little things in life. 🌅",
    timestamp: "4h",
    likes: 156,
    comments: 23,
  },
  {
    id: 3,
    user: {
      id: 3,
      name: "Mike Chen",
      avatar: "https://i.pravatar.cc/100?img=3",
    },
    content:
      'Finished reading "The Great Gatsby" today. What an incredible piece of literature! The symbolism and themes are just brilliant. Anyone have book recommendations?',
    timestamp: "6h",
    likes: 42,
    comments: 15,
  },
  {
    id: 4,
    user: {
      id: 4,
      name: "Emma Wilson",
      avatar: "https://i.pravatar.cc/100?img=4",
    },
    content:
      "Excited to announce that I got the promotion! 🎉 Hard work really pays off. Looking forward to new challenges and opportunities ahead.",
    timestamp: "8h",
    likes: 89,
    comments: 31,
  },
  {
    id: 5,
    user: {
      id: 5,
      name: "David Brown",
      avatar: "https://i.pravatar.cc/100?img=5",
    },
    content:
      "Sunday family BBQ was amazing! Nothing beats good food and great company. Hope everyone had a wonderful weekend!",
    timestamp: "12h",
    likes: 67,
    comments: 19,
  },
];
