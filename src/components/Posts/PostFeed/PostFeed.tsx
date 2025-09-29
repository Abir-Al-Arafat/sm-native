import React from "react";
import { ScrollView } from "react-native";
import { Post } from "../../../interfaces/IPost";
import { PostItem } from "../PostItem/PostItem";
import { postFeedStyles } from "./styles";

interface IPostFeedProps {
  posts: Post[];
  showScrollIndicator?: boolean;
  onLikePress?: (postId: number) => void;
  onCommentPress?: (postId: number) => void;
  onSharePress?: (postId: number) => void;
}

export const PostFeed: React.FC<IPostFeedProps> = ({
  posts,
  showScrollIndicator = false,
  onLikePress,
  onCommentPress,
  onSharePress,
}) => {
  return (
    <ScrollView
      style={postFeedStyles.feed}
      showsVerticalScrollIndicator={showScrollIndicator}
    >
      {posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          onLikePress={onLikePress}
          onCommentPress={onCommentPress}
          onSharePress={onSharePress}
        />
      ))}
    </ScrollView>
  );
};
