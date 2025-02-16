import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  // Cores principais
  primaryColor:{ color: "#00264D"},
  secondaryColor: {color: "#fff"},
  textColor: {color: "#333"},

  // Layout principal
  container: {
    flex: 1,
    backgroundColor: "#00264D",
    justifyContent: "center",
    alignItems: "center",
  },

  // Header (Cabeçalho)
  headerContainer: {
    backgroundColor: "#00264D",
    justifyContent: "space-between",
  },
  headerUser: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerIcon: {
    marginTop: 10,
  },
  leftComponent: {
    flexDirection: "row",
    alignItems: "center",
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
    padding: 30,
  },
  logo: {
    width: 170,
    height: 150,
    marginBottom: 30,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },

  // Botões
  button: {
    fontSize: 24,
    textDecorationLine: "underline",
    color: "#fff",
  },

  //Search
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  listItem: {
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default globalStyles;