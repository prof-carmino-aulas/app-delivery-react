// src/app/router.tsx
// Objetivo: centralizar as rotas principais do fluxo guest-first do aplicativo.

import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "../layouts/AppLayout";
import { HomePage } from "../pages/HomePage";
import { SearchPage } from "../pages/SearchPage";
import { RestaurantPage } from "../pages/RestaurantPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/ChekoutPage";
import { TrackingPage } from "../pages/TrackingPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "busca",
                element: <SearchPage />,
            },
            {
                path: "restaurante/:restaurantId",
                element: <RestaurantPage />,
            },
            {
                path: "carrinho",
                element: <CartPage />,
            },
            {
                path: "checkout",
                element: <CheckoutPage />,
            },
            {
                path: "acompanhar",
                element: <TrackingPage />,
            },
        ],
    },
]);