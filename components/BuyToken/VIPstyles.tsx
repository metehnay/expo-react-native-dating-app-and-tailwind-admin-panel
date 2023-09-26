import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  modalView: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  headerButtons: {
    width: "100%",
    marginBottom: 20,
  },
  buttonMonthly: {
    backgroundColor: "#2196F3",
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    position: "relative",
  },
  buttonMonthlySelected: {
    backgroundColor: "#1976D2", // Slightly darker shade than buttonMonthly
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    position: "relative",
    borderWidth: 8,
    borderColor: "gray",
  },
  popularText: {
    justifyContent: "center",
    textAlign: "center",
    display: "flex",
    backgroundColor: "purple",
    padding: 9,
    color: "#fff",
    borderRadius: 24,
  },
  buttonYearly: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
  },
  buttonYearlySelected: {
    backgroundColor: "#388E3C", // Slightly darker shade than buttonYearly
    padding: 15,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    borderWidth: 5,
    borderColor: "gray",
  },
  featureCard: {
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    position: "relative",
  },
  featureText: {
    paddingLeft: 10,
    maxWidth: 250,
  },
  buttonCancel: {
    backgroundColor: "gray",
    opacity: 0.5,
    padding: 10,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  buttonContinue: {
    backgroundColor: "#960ffe",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    paddingLeft: 5,
  },
});