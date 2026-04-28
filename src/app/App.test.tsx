// src/app/App.test.tsx
// Objetivo: testar renderização inicial e navegação principal do fluxo guest-first.

import { describe, expect, it } from "vitest";
import { RouterProvider } from "react-router-dom";
import { render, screen, within } from "@testing-library/react";

import { router } from "../app/router";

describe("App delivery - módulo 1", () => {
  it("deve renderizar a Home com chamada principal", () => {
    render(<RouterProvider router={router} />);

    expect(
      screen.getByRole("heading", {
        name: /peça sua refeição com poucos passos/i,
      })
    ).toBeInTheDocument();
  });

  it("deve exibir navegação principal", () => {
    render(<RouterProvider router={router} />);

    const navigation = screen.getByRole("navigation", {
      name: /navegação principal/i,
    });

    expect(navigation).toBeInTheDocument();

    expect(
      within(navigation).getByRole("link", { name: /home/i })
    ).toBeInTheDocument();

    expect(
      within(navigation).getByRole("link", { name: /^busca$/i })
    ).toBeInTheDocument();

    expect(
      within(navigation).getByRole("link", { name: /carrinho/i })
    ).toBeInTheDocument();

    expect(
      within(navigation).getByRole("link", { name: /checkout/i })
    ).toBeInTheDocument();

    expect(
      within(navigation).getByRole("link", { name: /status/i })
    ).toBeInTheDocument();
  });
});