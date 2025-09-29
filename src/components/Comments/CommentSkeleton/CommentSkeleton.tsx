import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";

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

const styles = StyleSheet.create({
  commentContainer: {
    flexDirection: "row",
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 8,
    backgroundColor: "#E0E0E0",
  },
  commentContent: {
    flex: 1,
    backgroundColor: "#F0F2F5",
    borderRadius: 18,
    padding: 12,
  },
  commentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  userName: {
    width: 100,
    height: 14,
    borderRadius: 4,
    backgroundColor: "#E0E0E0",
  },
  timestamp: {
    width: 40,
    height: 12,
    borderRadius: 4,
    backgroundColor: "#E0E0E0",
  },
  commentText: {
    width: "100%",
    height: 14,
    borderRadius: 4,
    backgroundColor: "#E0E0E0",
    marginBottom: 6,
  },
  commentTextShort: {
    width: "60%",
    height: 14,
    borderRadius: 4,
    backgroundColor: "#E0E0E0",
  },
});
