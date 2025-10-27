import { StyleSheet } from "react-native";

export const userProfileStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
  },
  content: {
    backgroundColor: "white",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    minHeight: "60%",
    overflow: "hidden",
  },
  cover: {
    width: "100%",
    height: 140,
    resizeMode: "cover",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
  },
  dp: {
    width: 72,
    height: 72,
    borderRadius: 36,
    marginRight: 12,
    marginTop: -36,
    borderWidth: 3,
    borderColor: "white",
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
  },
  closeButton: {
    padding: 8,
  },
  postsList: {
    paddingHorizontal: 12,
  },
  postItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  postText: {
    color: "#111",
  },
});
