import React, { useEffect, useRef } from "react";
import { Animated, View } from "react-native";
import { styles } from "./styles";

interface CommentSkeletonProps {
  count?: number;
}

export const CommentSkeleton: React.FC<CommentSkeletonProps> = ({
  count = 3,
}) => {
  // Animation value for the skeleton pulse effect
  const pulseAnim = useRef(new Animated.Value(0.3)).current;

  // Start the pulse animation when the component mounts
  useEffect(() => {
    const pulse = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 0.3,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    );

    pulse.start();

    return () => {
      pulse.stop();
    };
  }, [pulseAnim]);

  // Create an array of the specified count to render multiple skeleton items
  const skeletonItems = Array(count).fill(0);

  return (
    <>
      {skeletonItems.map((_, index) => (
        <View key={index} style={styles.commentContainer}>
          {/* Avatar skeleton */}
          <Animated.View style={[styles.avatar, { opacity: pulseAnim }]} />
          <View style={styles.commentContent}>
            <View style={styles.commentHeader}>
              {/* Username skeleton */}
              <Animated.View
                style={[styles.userName, { opacity: pulseAnim }]}
              />
              {/* Timestamp skeleton */}
              <Animated.View
                style={[styles.timestamp, { opacity: pulseAnim }]}
              />
            </View>
            {/* Comment text skeleton - two lines */}
            <Animated.View
              style={[styles.commentText, { opacity: pulseAnim }]}
            />
            <Animated.View
              style={[styles.commentTextShort, { opacity: pulseAnim }]}
            />
          </View>
        </View>
      ))}
    </>
  );
};
