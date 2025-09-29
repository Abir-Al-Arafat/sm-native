import { StyleSheet } from "react-native";

export const createPostStyles = StyleSheet.create({
  createPostContainer: {
    marginHorizontal: 12,
    marginTop: 12,
    padding: 12,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  createPostAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  createPostInput: {
    flex: 1,
    backgroundColor: "#f0f2f5",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  createPostText: {
    color: "#65676b",
    fontSize: 16,
  },
});
