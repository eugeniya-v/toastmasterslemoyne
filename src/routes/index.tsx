import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ to: "/portes-ouvertes" });
  },
  head: () => ({
    meta: [
      { title: "Club Toastmasters Lemoyne de Candiac | Soirée découverte" },
      {
        name: "description",
        content:
          "Soirée portes ouvertes du Club Toastmasters Lemoyne de Candiac, le 9 novembre 2026.",
      },
      { property: "og:title", content: "Club Toastmasters Lemoyne de Candiac | Soirée découverte" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:description",
        content: "Soirée portes ouvertes du Club Toastmasters Lemoyne de Candiac, le 9 novembre 2026.",
      },
    ],
  }),
});
