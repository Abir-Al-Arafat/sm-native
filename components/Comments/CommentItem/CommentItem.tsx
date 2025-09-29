import React from "react";
import { Image, Text, View } from "react-native";
import { Comment } from "../../../database/comments";
import { commentItemStyles } from "./styles";

interface CommentItemProps {
  comment: Comment;
}

export const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
  return (
    <View style={commentItemStyles.commentContainer}>
      <Image
        source={{ uri: comment.user.avatar }}
        style={commentItemStyles.avatar}
      />
      <View style={commentItemStyles.commentContent}>
        <View style={commentItemStyles.commentHeader}>
          <Text style={commentItemStyles.userName}>{comment.user.name}</Text>
          <Text style={commentItemStyles.timestamp}>{comment.timestamp}</Text>
        </View>
        <Text style={commentItemStyles.commentText}>{comment.text}</Text>
      </View>
    </View>
  );
};
