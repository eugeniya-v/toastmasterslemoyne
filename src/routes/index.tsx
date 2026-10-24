import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ to: "/portes-ouvertes" });
  },
  head: () => ({
    meta: [
      { title: "Portes ouvertes | Toastmasters Lemoyne de Candiac" },
      {
        name: "description",
        content:
          "Soirée portes ouvertes du Club Toastmasters Lemoyne de Candiac, le 9 novembre 2026.",
      },
      { property: "og:title", content: "Portes ouvertes | Toastmasters Lemoyne de Candiac" },
      {
        property: "og:description",
        content: "Soirée portes ouvertes du Club Toastmasters Lemoyne de Candiac, le 9 novembre 2026.",
      },
    ],
  }),
});
