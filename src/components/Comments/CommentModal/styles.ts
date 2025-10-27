import { StyleSheet } from "react-native";

export const commentModalStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  contentContainer: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    minHeight: "60%",
    paddingVertical: 16,
  },
  swipeIndicator: {
    width: 40,
    height: 5,
    backgroundColor: "#D0D0D0",
    borderRadius: 5,
    alignSelf: "center",
    marginBottom: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E4E6EB",
    marginBottom: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  closeButton: {
    fontSize: 24,
    color: "#65676B",
    padding: 5,
  },
  commentsList: {
    paddingHorizontal: 16,
    maxHeight: "80%",
  },
  noComments: {
    textAlign: "center",
    color: "#65676B",
    padding: 16,
    fontStyle: "italic",
  },
});
