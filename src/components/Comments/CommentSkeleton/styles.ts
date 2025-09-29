import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
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
