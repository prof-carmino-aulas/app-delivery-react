// src/pages/SearchPage.tsx
// Objetivo: reservar a tela de busca e filtros para evolução incremental do fluxo.

import { FiFilter, FiSearch } from "react-icons/fi";

export function SearchPage() {
  return (
    <section className="page-section">
      <div className="section-heading">
        <h1>Busca e filtros</h1>
        <p>
          Este módulo será expandido com filtros reversíveis, resultados
          dinâmicos e limpeza de critérios.
        </p>
      </div>

      <div className="placeholder-card">
        <FiSearch aria-hidden="true" />
        <h2>Busca inicial</h2>
        <p>Campo de busca e filtros serão implementados no Módulo 3.</p>

        <button className="btn-secondary" type="button">
          <FiFilter aria-hidden="true" />
          Filtros em breve
        </button>
      </div>
    </section>
  );
}