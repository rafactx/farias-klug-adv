// Centralized locales configuration for the entire app.
// Keep this file free of server-only logic so it can be safely imported
// by edge runtime (e.g., middleware) and server/client components alike.

export const locales = ['pt-BR', 'en', 'es', 'de', 'fr'] as const;
export type Locale = (typeof locales)[number];
