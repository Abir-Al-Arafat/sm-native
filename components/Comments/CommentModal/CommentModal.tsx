import React from "react";
import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Comment } from "../../../database/comments";
import { CommentItem } from "../CommentItem/CommentItem";
import { commentModalStyles } from "./styles";

interface CommentModalProps {
  isVisible: boolean;
  postId: number | null;
  comments: Comment[];
  onClose: () => void;
}

export const CommentModal: React.FC<CommentModalProps> = ({
  isVisible,
  postId,
  comments,
  onClose,
}) => {
  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <SafeAreaView style={commentModalStyles.modalContainer}>
        <View style={commentModalStyles.contentContainer}>
          <View style={commentModalStyles.header}>
            <Text style={commentModalStyles.headerTitle}>Comments</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={commentModalStyles.closeButton}>✕</Text>
            </TouchableOpacity>
          </View>

          <ScrollView style={commentModalStyles.commentsList}>
            {comments.length > 0 ? (
              comments.map((comment) => (
                <CommentItem key={comment.id} comment={comment} />
              ))
            ) : (
              <Text style={commentModalStyles.noComments}>
                No comments yet. Be the first to comment!
              </Text>
            )}
          </ScrollView>
        </View>
      </SafeAreaView>
    </Modal>
  );
};
