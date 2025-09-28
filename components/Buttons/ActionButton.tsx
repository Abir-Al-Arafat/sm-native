import React from "react";
import { Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";
import { actionButtonStyles } from "./styles";

interface IActionButtonProps {
  icon: string;
  text: string | number;
  onPress?: () => void;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}

export const ActionButton: React.FC<IActionButtonProps> = ({
  icon,
  text,
  onPress,
  buttonStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={[actionButtonStyles.actionButton, buttonStyle]}
      onPress={onPress}
    >
      <Text style={[actionButtonStyles.actionText, textStyle]}>
        {icon} {text}
      </Text>
    </TouchableOpacity>
  );
};
