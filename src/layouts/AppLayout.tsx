// src/layouts/AppLayout.tsx
// Objetivo: organizar a estrutura visual principal, navegação e affordances do aplicativo.

import { NavLink, Outlet } from "react-router-dom";
import {
  FiHome,
  FiSearch,
  FiShoppingCart,
  FiMapPin,
  FiClock,
  FiCoffee,
} from "react-icons/fi";

import { useAppStore } from "../core/stores/app.store";

export function AppLayout() {
  const cartItemsCount = useAppStore((state) => state.cartItemsCount);

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="app-header__brand">
          <span className="app-header__logo" aria-hidden="true">
            <FiCoffee />
          </span>

          <div>
            <strong className="app-header__title">Delivery PWA</strong>
            <p className="app-header__subtitle">Pedido rápido, simples e seguro</p>
          </div>
        </div>
      </header>

      <main className="app-main">
        <Outlet />
      </main>

      <nav className="bottom-navigation" aria-label="Navegação principal">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive
              ? "bottom-navigation__link bottom-navigation__link--active"
              : "bottom-navigation__link"
          }
        >
          <FiHome aria-hidden="true" />
          <span>Home</span>
        </NavLink>

        <NavLink
          to="/busca"
          className={({ isActive }) =>
            isActive
              ? "bottom-navigation__link bottom-navigation__link--active"
              : "bottom-navigation__link"
          }
        >
          <FiSearch aria-hidden="true" />
          <span>Busca</span>
        </NavLink>

        <NavLink
          to="/carrinho"
          className={({ isActive }) =>
            isActive
              ? "bottom-navigation__link bottom-navigation__link--active"
              : "bottom-navigation__link"
          }
        >
          <span className="bottom-navigation__cart-wrapper">
            <FiShoppingCart aria-hidden="true" />

            {cartItemsCount > 0 && (
              <span className="bottom-navigation__badge">{cartItemsCount}</span>
            )}
          </span>
          <span>Carrinho</span>
        </NavLink>

        <NavLink
          to="/checkout"
          className={({ isActive }) =>
            isActive
              ? "bottom-navigation__link bottom-navigation__link--active"
              : "bottom-navigation__link"
          }
        >
          <FiMapPin aria-hidden="true" />
          <span>Checkout</span>
        </NavLink>

        <NavLink
          to="/acompanhar"
          className={({ isActive }) =>
            isActive
              ? "bottom-navigation__link bottom-navigation__link--active"
              : "bottom-navigation__link"
          }
        >
          <FiClock aria-hidden="true" />
          <span>Status</span>
        </NavLink>
      </nav>
    </div>
  );
}