// src/pages/RestaurantPage.tsx
// Objetivo: reservar a tela de restaurante e cardápio para integração progressiva com carrinho.

import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiShoppingCart } from "react-icons/fi";

import { restaurants } from "../core/mocks/delivery.mock";

export function RestaurantPage() {
  const { restaurantId } = useParams();

  const restaurant = restaurants.find((item) => item.id === restaurantId);

  if (!restaurant) {
    return (
      <section className="page-section">
        <div className="placeholder-card">
          <h1>Restaurante não encontrado</h1>
          <p>Volte para a Home e escolha uma opção disponível.</p>

          <Link to="/" className="btn-primary">
            <FiArrowLeft aria-hidden="true" />
            Voltar para Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="page-section">
      <div className="section-heading">
        <h1>{restaurant.name}</h1>
        <p>{restaurant.description}</p>
      </div>

      <div className="placeholder-card">
        <FiShoppingCart aria-hidden="true" />
        <h2>Cardápio em construção</h2>
        <p>
          A listagem de itens, botão de adicionar e feedback de carrinho serão
          implementados no Módulo 4.
        </p>
      </div>
    </section>
  );
}