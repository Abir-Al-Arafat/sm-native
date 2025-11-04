import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { userProfileStyles } from "../../components/Profiles/UserProfile/styles";
import { DUMMY_POSTS } from "../../database/posts";

export default function Profile() {
  const { userId } = useLocalSearchParams();

  // find user by id from DUMMY_POSTS (fallback minimal)
  const posts = DUMMY_POSTS.filter((p) => String(p.user.id) === String(userId));
  const user = posts.length ? posts[0].user : { name: "Unknown", avatar: "" };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <Image source={{ uri: user.avatar }} style={userProfileStyles.cover} />
        <View style={userProfileStyles.headerRow}>
          <Image source={{ uri: user.avatar }} style={userProfileStyles.dp} />
          <View style={{ flex: 1 }}>
            <Text style={userProfileStyles.name}>{user.name}</Text>
          </View>
        </View>

        <View style={{ padding: 12 }}>
          {posts.map((p) => (
            <View
              key={p.id}
              style={{
                paddingVertical: 8,
                borderBottomWidth: 1,
                borderBottomColor: "#eee",
              }}
            >
              <Text>{p.content}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
