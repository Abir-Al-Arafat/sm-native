import { useRef } from "react";
import { Animated, PanResponder, PanResponderGestureState } from "react-native";

interface UseSwipeGestureProps {
  onSwipeDown?: () => void;
  onSwipeCancel?: () => void;
  swipeThreshold?: number;
}

interface UseSwipeGestureResult {
  panResponder: any;
  translateY: Animated.Value;
  animatedStyle: {
    transform: { translateY: Animated.Value }[];
  };
}

export const useSwipeGesture = ({
  onSwipeDown,
  onSwipeCancel,
  swipeThreshold = 150,
}: UseSwipeGestureProps): UseSwipeGestureResult => {
  // Animation value
  const translateY = useRef(new Animated.Value(0)).current;

  // Handler for swipe down gesture
  const handleSwipeDown = () => {
    Animated.timing(translateY, {
      toValue: 600,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      if (onSwipeDown) {
        onSwipeDown();
      }
    });
  };

  // Handler for when swipe is canceled/not far enough
  const handleSwipeCancel = () => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      if (onSwipeCancel) {
        onSwipeCancel();
      }
    });
  };

  // Handler for gesture release
  const handlePanResponderRelease = (
    _: any,
    gestureState: PanResponderGestureState
  ) => {
    translateY.flattenOffset();

    // If dragged more than threshold units down, trigger swipe down callback
    if (gestureState.dy > swipeThreshold) {
      handleSwipeDown();
    } else {
      handleSwipeCancel();
    }
  };

  // Define pan responder config
  const panResponderConfig = {
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      translateY.extractOffset();
      translateY.setValue(0);
    },
    onPanResponderMove: (_: any, gestureState: PanResponderGestureState) => {
      // Only allow downward swipes (positive dy values)
      if (gestureState.dy > 0) {
        translateY.setValue(gestureState.dy);
      }
    },
    onPanResponderRelease: handlePanResponderRelease,
  };

  // Create pan responder
  const panResponder = useRef(PanResponder.create(panResponderConfig)).current;

  const animatedStyle = {
    transform: [{ translateY }],
  };

  return { panResponder, translateY, animatedStyle };
};
