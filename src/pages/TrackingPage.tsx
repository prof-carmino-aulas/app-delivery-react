// src/pages/TrackingPage.tsx
// Objetivo: reservar a tela de acompanhamento para visibilidade do estado do pedido.

import { FiClock, FiTruck } from "react-icons/fi";

import { deliverySteps } from "../core/mocks/delivery.mock";

export function TrackingPage() {
  return (
    <section className="page-section">
      <div className="section-heading">
        <h1>Acompanhamento</h1>
        <p>Visibilidade do estado do sistema após confirmação do pedido.</p>
      </div>

      <div className="tracking-list">
        {deliverySteps.map((step) => (
          <article
            className={
              step.completed
                ? "tracking-item tracking-item--completed"
                : "tracking-item"
            }
            key={step.id}
          >
            <div className="tracking-item__icon">
              {step.completed ? (
                <FiClock aria-hidden="true" />
              ) : (
                <FiTruck aria-hidden="true" />
              )}
            </div>

            <div>
              <h2>{step.label}</h2>
              <p>{step.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}