import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { headerStyles } from "./styles";

interface IHeaderProps {
  title?: string;
  backgroundColor?: string;
  titleColor?: string;
  onSearchPress?: () => void;
  onMessagePress?: () => void;
}

export const Header: React.FC<IHeaderProps> = ({
  title = "FB",
  backgroundColor = "#4267B2",
  titleColor = "white",
  onSearchPress,
  onMessagePress,
}) => {
  return (
    <View style={[headerStyles.header, { backgroundColor }]}>
      <Text style={[headerStyles.headerTitle, { color: titleColor }]}>
        {title}
      </Text>
      <View style={headerStyles.headerActions}>
        <TouchableOpacity
          style={headerStyles.headerButton}
          onPress={onSearchPress}
        >
          <Text style={headerStyles.headerButtonText}>🔍</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={headerStyles.headerButton}
          onPress={onMessagePress}
        >
          <Text style={headerStyles.headerButtonText}>💬</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
