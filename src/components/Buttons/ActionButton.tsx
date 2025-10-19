import React from "react";
import { Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";
import { actionButtonStyles } from "./styles";

interface IActionButtonProps {
  icon?: string;
  iconElement?: React.ReactElement;
  text: string | number;
  onPress?: () => void;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}

export const ActionButton: React.FC<IActionButtonProps> = ({
  icon,
  iconElement,
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
        {iconElement ? iconElement : icon} {text}
      </Text>
    </TouchableOpacity>
  );
};
