import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { userHeaderStyles } from "./styles";

interface IUserHeaderProps {
  name: string;
  avatar: string;
  timestamp: string;
  nameColor?: string;
  timestampColor?: string;
  onPress?: () => void;
}

export const UserHeader: React.FC<IUserHeaderProps> = ({
  name,
  avatar,
  timestamp,
  nameColor = "#1c1e21",
  timestampColor = "#65676b",
  onPress,
}) => {
  return (
    <View style={userHeaderStyles.postHeader}>
      <TouchableOpacity
        onPress={onPress}
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        <Image source={{ uri: avatar }} style={userHeaderStyles.avatar} />
        <View style={userHeaderStyles.userInfo}>
          <Text style={[userHeaderStyles.userName, { color: nameColor }]}>
            {name}
          </Text>
          <Text style={[userHeaderStyles.timestamp, { color: timestampColor }]}>
            {timestamp}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
