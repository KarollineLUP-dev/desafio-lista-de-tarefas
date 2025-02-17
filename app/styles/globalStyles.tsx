import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  // Cores principais
  primaryColor: { color: "#00264D" },
  secondaryColor: { color: "#fff" },
  textColor: { color: "#333" },
  displayFlex: { flex: 1 },

  // Layout principal
  container: {
    flex: 1,
    backgroundColor: "#00264D",
    justifyContent: "center",
    alignItems: "center",
  },

  rowComponent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },

  // Header (Cabeçalho)
  headerContainer: {
    backgroundColor: "#00264D",
    justifyContent: "space-between",
  },

  headerIcon: {
    marginTop: 10,
  },
  leftComponent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rightComponent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  // Drawer (Menu Lateral)
  drawerHeaderContainer: {
    alignItems: "center",
    padding: 20,
  },

  // Perfil do Usuário
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#fff",
  },
  profileImageLarge: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  userName: {
    color: "#fff",
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
  },

  // Login
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00264D",
  },
  loginBox: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 10,
  },
  logo: {
    width: 170,
    height: 150,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    padding: 20,
  },

  // Botões
  button: {
    fontSize: 24,
    textDecorationLine: "underline",
    color: "#fff",
  },

  //Search
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  searchInput: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 10,
    width: 200,
    height: 40,
  },
  listItem: {
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },

  //Modal
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 25,
    borderRadius: 5,
  },
  //Tasks List
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  taskContainer: {
    flexDirection:"row",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginBottom: 5,
  },
  taskLeft: {
    flexDirection: "row", 
    alignItems: "center", 
  },
  taskText: {
    fontSize: 18,
    marginLeft: 10,
  },
  taskDate: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
  },
  completedTask: {
    textDecorationLine: "line-through",
    color: "gray",
  },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 20,
    width: 60,
    height: 60,
    backgroundColor: "#00264D",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  fabText: {
    fontSize: 30,
    color: "white",
  },
  buttonFilter: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  }
});

export default globalStyles;
