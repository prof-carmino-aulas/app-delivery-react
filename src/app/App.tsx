// src/app/App.tsx
// Objetivo: manter um componente raiz simples para testes e futuras integrações globais.

import { Outlet } from "react-router-dom";

export function App() {
  return <Outlet />;
}