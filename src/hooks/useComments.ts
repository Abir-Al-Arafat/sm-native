import { useState } from "react";
import { Comment, DUMMY_COMMENTS } from "../database/comments";

export interface UseCommentsResult {
  isCommentModalVisible: boolean;
  selectedPostId: number | null;
  currentComments: Comment[];
  handleCommentPress: (postId: number) => void;
  handleCloseCommentModal: () => void;
}

export function useComments(): UseCommentsResult {
  const [isCommentModalVisible, setIsCommentModalVisible] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
  const [currentComments, setCurrentComments] = useState<Comment[]>([]);

  const handleCommentPress = (postId: number) => {
    console.log("Comment pressed for post:", postId);
    setSelectedPostId(postId);
    setCurrentComments(DUMMY_COMMENTS[postId] || []);
    setIsCommentModalVisible(true);
  };

  const handleCloseCommentModal = () => {
    setIsCommentModalVisible(false);
    setSelectedPostId(null);
  };

  return {
    isCommentModalVisible,
    selectedPostId,
    currentComments,
    handleCommentPress,
    handleCloseCommentModal,
  };
}
