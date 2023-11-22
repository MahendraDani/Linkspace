export const apiUrl =
  import.meta.env.VITE_VERCEL_ENV === "production"
    ? "https://linkspace-api.vercel.app"
    : "http://localhost:3000";
