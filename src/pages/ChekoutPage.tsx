// src/pages/CheckoutPage.tsx
// Objetivo: reservar o checkout para cadastro progressivo apenas na transação.

import { FiLock, FiMapPin } from "react-icons/fi";

export function CheckoutPage() {
  return (
    <section className="page-section">
      <div className="section-heading">
        <h1>Checkout</h1>
        <p>
          O usuário navega como visitante e informa seus dados apenas nesta
          etapa.
        </p>
      </div>

      <div className="placeholder-card">
        <FiMapPin aria-hidden="true" />
        <h2>Endereço e pagamento</h2>
        <p>
          Formulário com validação, endereço, pagamento e segurança será
          implementado no Módulo 6.
        </p>

        <span className="info-pill">
          <FiLock aria-hidden="true" />
          Login progressivo
        </span>
      </div>
    </section>
  );
}