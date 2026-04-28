// src/pages/HomePage.tsx
// Objetivo: apresentar a exploração inicial com categorias e restaurantes, reduzindo carga cognitiva.

import { Link } from "react-router-dom";
import { FiSearch, FiStar, FiClock, FiTruck } from "react-icons/fi";

import { categories, restaurants } from "../core/mocks/delivery.mock";

export function HomePage() {
  return (
    <section className="page-section">
      <div className="hero-card">
        <p className="hero-card__eyebrow">Delivery Web/PWA</p>
        <h1 className="hero-card__title">Peça sua refeição com poucos passos</h1>
        <p className="hero-card__description">
          Navegue como visitante, escolha um restaurante, revise o carrinho e
          informe seus dados apenas na etapa de checkout.
        </p>

        <Link to="/busca" className="btn-primary">
          <FiSearch aria-hidden="true" />
          Buscar restaurantes
        </Link>
      </div>

      <div className="content-block">
        <div className="section-heading">
          <h2>Categorias</h2>
          <p>Opções organizadas para facilitar reconhecimento e escolha.</p>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <article className="category-card" key={category.id}>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="content-block">
        <div className="section-heading">
          <h2>Restaurantes em destaque</h2>
          <p>Informações essenciais aparecem antes da decisão.</p>
        </div>

        <div className="restaurant-list">
          {restaurants.map((restaurant) => (
            <article className="restaurant-card" key={restaurant.id}>
              <div className="restaurant-card__content">
                <h3>{restaurant.name}</h3>
                <p>{restaurant.description}</p>

                <div className="restaurant-card__meta">
                  <span>
                    <FiStar aria-hidden="true" />
                    {restaurant.rating.toFixed(1)}
                  </span>

                  <span>
                    <FiClock aria-hidden="true" />
                    {restaurant.deliveryTimeMinutes} min
                  </span>

                  <span>
                    <FiTruck aria-hidden="true" />
                    R$ {restaurant.deliveryFee.toFixed(2)}
                  </span>
                </div>
              </div>

              <Link
                to={`/restaurante/${restaurant.id}`}
                className="btn-secondary"
              >
                Ver cardápio
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}