// src/core/mocks/delivery.mock.ts
// Objetivo: fornecer dados simulados para navegação inicial, categorias, restaurantes e fluxo de delivery.

export type Category = {
  id: string;
  name: string;
  description: string;
};

export type Restaurant = {
  id: string;
  name: string;
  categoryId: string;
  rating: number;
  deliveryTimeMinutes: number;
  deliveryFee: number;
  description: string;
};

export type MenuItem = {
  id: string;
  restaurantId: string;
  name: string;
  description: string;
  price: number;
};

export type DeliveryStep = {
  id: string;
  label: string;
  description: string;
  completed: boolean;
};

export const categories: Category[] = [
  {
    id: "refeicoes",
    name: "Refeições",
    description: "Pratos completos para almoço e jantar.",
  },
  {
    id: "lanches",
    name: "Lanches",
    description: "Opções rápidas para pedidos objetivos.",
  },
  {
    id: "saudavel",
    name: "Saudável",
    description: "Comidas leves, equilibradas e práticas.",
  },
];

export const restaurants: Restaurant[] = [
  {
    id: "restaurante-boa-mesa",
    name: "Boa Mesa",
    categoryId: "refeicoes",
    rating: 4.8,
    deliveryTimeMinutes: 35,
    deliveryFee: 6.9,
    description: "Comida caseira com preparo rápido e porções generosas.",
  },
  {
    id: "burger-ponto",
    name: "Burger Ponto",
    categoryId: "lanches",
    rating: 4.6,
    deliveryTimeMinutes: 25,
    deliveryFee: 5.5,
    description: "Hambúrgueres artesanais com fluxo de pedido simples.",
  },
  {
    id: "verde-prato",
    name: "Verde Prato",
    categoryId: "saudavel",
    rating: 4.7,
    deliveryTimeMinutes: 30,
    deliveryFee: 4.9,
    description: "Bowls, saladas e refeições leves para o dia a dia.",
  },
];

export const menuItems: MenuItem[] = [
  {
    id: "item-001",
    restaurantId: "restaurante-boa-mesa",
    name: "Frango grelhado com arroz e salada",
    description: "Refeição completa com preparo simples e equilibrado.",
    price: 32.9,
  },
  {
    id: "item-002",
    restaurantId: "restaurante-boa-mesa",
    name: "Carne de panela com legumes",
    description: "Prato caseiro com legumes cozidos e molho leve.",
    price: 36.9,
  },
  {
    id: "item-003",
    restaurantId: "burger-ponto",
    name: "Burger clássico",
    description: "Pão, carne, queijo, alface, tomate e molho da casa.",
    price: 29.9,
  },
  {
    id: "item-004",
    restaurantId: "burger-ponto",
    name: "Burger duplo",
    description: "Dois hambúrgueres, queijo e molho especial.",
    price: 39.9,
  },
  {
    id: "item-005",
    restaurantId: "verde-prato",
    name: "Bowl de frango com quinoa",
    description: "Frango, quinoa, legumes, folhas e molho cítrico.",
    price: 34.9,
  },
  {
    id: "item-006",
    restaurantId: "verde-prato",
    name: "Salada mediterrânea",
    description: "Folhas, grão-de-bico, tomate, pepino e azeite.",
    price: 27.9,
  },
];

export const deliverySteps: DeliveryStep[] = [
  {
    id: "pedido-recebido",
    label: "Pedido recebido",
    description: "O restaurante recebeu sua solicitação.",
    completed: true,
  },
  {
    id: "em-preparo",
    label: "Em preparo",
    description: "Seu pedido está sendo preparado.",
    completed: true,
  },
  {
    id: "saiu-entrega",
    label: "Saiu para entrega",
    description: "O entregador está a caminho.",
    completed: false,
  },
  {
    id: "entregue",
    label: "Entregue",
    description: "Pedido finalizado.",
    completed: false,
  },
];