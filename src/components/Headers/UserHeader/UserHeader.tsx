import React from "react";
import { Image, Text, View } from "react-native";
import { userHeaderStyles } from "./styles";

interface IUserHeaderProps {
  name: string;
  avatar: string;
  timestamp: string;
  nameColor?: string;
  timestampColor?: string;
}

export const UserHeader: React.FC<IUserHeaderProps> = ({
  name,
  avatar,
  timestamp,
  nameColor = "#1c1e21",
  timestampColor = "#65676b",
}) => {
  return (
    <View style={userHeaderStyles.postHeader}>
      <Image source={{ uri: avatar }} style={userHeaderStyles.avatar} />
      <View style={userHeaderStyles.userInfo}>
        <Text style={[userHeaderStyles.userName, { color: nameColor }]}>
          {name}
        </Text>
        <Text style={[userHeaderStyles.timestamp, { color: timestampColor }]}>
          {timestamp}
        </Text>
      </View>
    </View>
  );
};
