import React, { useState } from "react";
import { Text, View } from "react-native";
import { Post } from "../../../interfaces/IPost";
import { ActionButton } from "../../Buttons/ActionButton";
import { UserHeader } from "../../Headers/UserHeader/UserHeader";
import { postItemStyles } from "./styles";

interface IPostItemProps {
  post: Post;
  backgroundColor?: string;
  contentColor?: string;
  onLikePress?: (postId: number) => void;
  onCommentPress?: (postId: number) => void;
  onSharePress?: (postId: number) => void;
}

export const PostItem: React.FC<IPostItemProps> = ({
  post,
  backgroundColor = "white",
  contentColor = "#1c1e21",
  onLikePress,
  onCommentPress,
  onSharePress,
}) => {
  // Local like state so the UI updates immediately on press
  const [liked, setLiked] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number>(post.likes ?? 0);

  const handleLocalLike = () => {
    // Toggle liked state and update displayed count
    setLiked((prev) => {
      const next = !prev;
      setLikeCount((c) => (next ? c + 1 : Math.max(0, c - 1)));
      return next;
    });

    // Forward the event if parent wants to react
    onLikePress?.(post.id);
  };

  return (
    <View style={[postItemStyles.postContainer, { backgroundColor }]}>
      <UserHeader
        name={post.user.name}
        avatar={post.user.avatar}
        timestamp={post.timestamp}
      />

      <Text style={[postItemStyles.postContent, { color: contentColor }]}>
        {post.content}
      </Text>

      <View style={postItemStyles.postActions}>
        <ActionButton
          icon={liked ? "👍" : "👍"}
          text={likeCount}
          onPress={handleLocalLike}
        />
        <ActionButton
          icon="💬"
          text={post.comments}
          onPress={() => onCommentPress?.(post.id)}
        />
        <ActionButton
          icon="📤"
          text="Share"
          onPress={() => onSharePress?.(post.id)}
        />
      </View>
    </View>
  );
};
