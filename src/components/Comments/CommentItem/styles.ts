import { StyleSheet } from "react-native";

export const commentItemStyles = StyleSheet.create({
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
    marginBottom: 4,
  },
  userName: {
    fontWeight: "600",
    fontSize: 14,
  },
  timestamp: {
    fontSize: 12,
    color: "#65676B",
  },
  commentText: {
    fontSize: 14,
  },
});
