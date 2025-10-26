import React, { useEffect, useState } from "react";
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
import { CommentSkeleton } from "../CommentSkeleton/CommentSkeleton";
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
  // Loading state for skeleton display
  const [isLoading, setIsLoading] = useState(true);

  // Use our custom hook for swipe gesture handling
  const { panResponder, translateY, animatedStyle } = useSwipeGesture({
    onSwipeDown: onClose,
    swipeThreshold: 150,
  });

  // Reset position when modal appears and simulate loading
  useEffect(() => {
    if (isVisible) {
      translateY.setValue(0);

      // Start with loading state
      setIsLoading(true);

      // Simulate loading delay (2 seconds)
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);

      // Clear timeout on component unmount or modal close
      return () => clearTimeout(timer);
    }
  }, [isVisible, translateY]);

  // Background opacity animation
  const backgroundOpacity = useState(new Animated.Value(0))[0];

  // Animate background opacity when modal appears/disappears
  useEffect(() => {
    if (isVisible) {
      Animated.timing(backgroundOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(backgroundOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isVisible, backgroundOpacity]);

  return (
    <Modal
      visible={isVisible}
      animationType="none"
      transparent={true}
      onRequestClose={onClose}
    >
      <Animated.View
        style={[
          commentModalStyles.modalContainer,
          { opacity: backgroundOpacity },
        ]}
      >
        <SafeAreaView style={{ flex: 1, justifyContent: "flex-end" }}>
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
              {isLoading ? (
                // Show skeleton loader while loading
                <CommentSkeleton count={4} />
              ) : comments.length ? (
                // Show comments when loaded
                comments.map((comment) => (
                  <CommentItem key={comment.id} comment={comment} />
                ))
              ) : (
                // Show empty state when no comments
                <Text style={commentModalStyles.noComments}>
                  No comments yet. Be the first to comment!
                </Text>
              )}
            </ScrollView>
          </Animated.View>
        </SafeAreaView>
      </Animated.View>
    </Modal>
  );
};
