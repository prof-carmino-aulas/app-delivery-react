// src/pages/CartPage.tsx
// Objetivo: reservar a revisão do pedido para controle de quantidade, subtotal e prevenção de erro.

import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

import { useAppStore } from "../core/stores/app.store";

export function CartPage() {
  const cartItemsCount = useAppStore((state) => state.cartItemsCount);

  return (
    <section className="page-section">
      <div className="section-heading">
        <h1>Carrinho</h1>
        <p>Revise os itens antes de seguir para o pagamento.</p>
      </div>

      <div className="placeholder-card">
        <FiShoppingCart aria-hidden="true" />
        <h2>{cartItemsCount === 0 ? "Carrinho vazio" : "Itens no carrinho"}</h2>
        <p>
          O controle de quantidades, subtotal e taxa de entrega será
          implementado no Módulo 5.
        </p>

        <Link to="/" className="btn-primary">
          Escolher restaurante
        </Link>
      </div>
    </section>
  );
}