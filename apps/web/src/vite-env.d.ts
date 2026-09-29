/// <reference types="vite/client" />

/**
 * Type declarations for Vite's import.meta.env.
 * All VITE_* vars in .env are exposed here for type-safety.
 */
interface ImportMetaEnv {
  readonly VITE_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
