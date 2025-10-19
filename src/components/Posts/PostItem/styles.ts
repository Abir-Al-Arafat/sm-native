import { StyleSheet } from "react-native";

export const postItemStyles = StyleSheet.create({
  postContainer: {
    marginHorizontal: 12,
    marginBottom: 8,
    borderRadius: 8,
    padding: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  postContent: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 16,
  },
  postActions: {
    flexDirection: "row",
    // Let flex children (each button with flex:1) determine widths evenly
    justifyContent: "space-between",
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#e4e6ea",
  },
});
