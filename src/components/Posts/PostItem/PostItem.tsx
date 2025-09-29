import React from "react";
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
          icon="👍"
          text={post.likes}
          onPress={() => onLikePress?.(post.id)}
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
