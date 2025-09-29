import React, { useEffect } from "react";
import {
  Animated,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Comment } from "../../../database/comments";
import { useSwipeGesture } from "../../../hooks";
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
  // Use our custom hook for swipe gesture handling
  const { panResponder, translateY, animatedStyle } = useSwipeGesture({
    onSwipeDown: onClose,
    swipeThreshold: 150,
  });

  // Reset position when modal appears
  useEffect(() => {
    if (isVisible) {
      translateY.setValue(0);
    }
  }, [isVisible, translateY]);

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <SafeAreaView style={commentModalStyles.modalContainer}>
        <Animated.View
          {...panResponder.panHandlers}
          style={[commentModalStyles.contentContainer, animatedStyle]}
        >
          <View style={commentModalStyles.swipeIndicator} />

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
        </Animated.View>
      </SafeAreaView>
    </Modal>
  );
};
