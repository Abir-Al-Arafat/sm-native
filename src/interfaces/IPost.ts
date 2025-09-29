import { User } from "./IUser";
export interface Post {
  id: number;
  user: User;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
}
