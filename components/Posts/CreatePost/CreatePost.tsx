import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { createPostStyles } from "./styles";

interface ICreatePostProps {
  userAvatar?: string;
  placeholder?: string;
  backgroundColor?: string;
  onPress?: () => void;
}

export const CreatePost: React.FC<ICreatePostProps> = ({
  userAvatar = "https://i.pravatar.cc/100?img=10",
  placeholder = "What's on your mind?",
  backgroundColor = "white",
  onPress,
}) => {
  return (
    <View style={[createPostStyles.createPostContainer, { backgroundColor }]}>
      <Image
        source={{ uri: userAvatar }}
        style={createPostStyles.createPostAvatar}
      />
      <TouchableOpacity
        style={createPostStyles.createPostInput}
        onPress={onPress}
      >
        <Text style={createPostStyles.createPostText}>{placeholder}</Text>
      </TouchableOpacity>
    </View>
  );
};
