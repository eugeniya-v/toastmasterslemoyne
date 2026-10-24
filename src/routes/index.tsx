import { createFileRoute, redirect } from "@tanstack/react-router";
import socialPreview from "@/assets/club/portes-ouvertes-social.jpg.asset.json";

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
      { property: "og:image", content: `https://toastmasterslemoyne.lovable.app${socialPreview.url}` },
      { name: "twitter:image", content: `https://toastmasterslemoyne.lovable.app${socialPreview.url}` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:description",
        content: "Soirée portes ouvertes du Club Toastmasters Lemoyne de Candiac, le 9 novembre 2026.",
      },
    ],
  }),
});
