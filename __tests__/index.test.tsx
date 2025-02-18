import React from "react";
import { render } from "@testing-library/react-native";
import { Redirect } from "expo-router";
import Index from "../app/index"; // Ajuste o caminho para o componente correto

// Mock do Redirect do expo-router
jest.mock("expo-router", () => ({
  Redirect: jest.fn(() => null), // Mock simples do componente Redirect
}));

describe("Index", () => {
  it("deve redirecionar para /login", () => {
    // Renderiza o componente Index
    render(<Index />);

    // Verifica se o Redirect foi chamado com o href correto
    expect(Redirect).toHaveBeenCalledWith({ href: "/login" }, {});
  });
});
