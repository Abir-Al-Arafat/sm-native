import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { CreatePost, Header, PostFeed } from "../components";
import { DUMMY_POSTS } from "../database/posts";
import { indexStyles } from "./styles";

export default function Index() {
  // Handler functions for user interactions
  const handleSearchPress = () => {
    console.log("Search pressed");
  };

  const handleMessagePress = () => {
    console.log("Message pressed");
  };

  const handleCreatePostPress = () => {
    console.log("Create post pressed");
  };

  const handleLikePress = (postId: number) => {
    console.log("Like pressed for post:", postId);
  };

  const handleCommentPress = (postId: number) => {
    console.log("Comment pressed for post:", postId);
  };

  const handleSharePress = (postId: number) => {
    console.log("Share pressed for post:", postId);
  };

  return (
    <SafeAreaView style={indexStyles.container}>
      <Header
        title="FB"
        onSearchPress={handleSearchPress}
        onMessagePress={handleMessagePress}
      />

      <CreatePost
        onPress={handleCreatePostPress}
        placeholder="What's on your mind?"
      />

      <PostFeed
        posts={DUMMY_POSTS}
        onLikePress={handleLikePress}
        onCommentPress={handleCommentPress}
        onSharePress={handleSharePress}
      />
    </SafeAreaView>
  );
}
