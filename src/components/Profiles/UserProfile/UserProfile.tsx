import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Post } from "../../../interfaces/IPost";
import { userProfileStyles } from "./styles";

interface IUserProfileProps {
  visible: boolean;
  onClose: () => void;
  user: {
    name: string;
    avatar: string;
    cover?: string;
  };
  posts: Post[];
}

export const UserProfile: React.FC<IUserProfileProps> = ({
  visible,
  onClose,
  user,
  posts,
}) => {
  return (
    <SafeAreaView style={userProfileStyles.container}>
      <View style={userProfileStyles.content}>
        <Image
          source={{ uri: user.cover || user.avatar }}
          style={userProfileStyles.cover}
        />
        <View style={userProfileStyles.headerRow}>
          <Image source={{ uri: user.avatar }} style={userProfileStyles.dp} />
          <View style={{ flex: 1 }}>
            <Text style={userProfileStyles.name}>{user.name}</Text>
          </View>
          <TouchableOpacity
            onPress={onClose}
            style={userProfileStyles.closeButton}
          >
            <Text style={{ fontSize: 18 }}>✕</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={userProfileStyles.postsList}>
          {posts.map((p) => (
            <View key={p.id} style={userProfileStyles.postItem}>
              <Text style={userProfileStyles.postText}>{p.content}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
