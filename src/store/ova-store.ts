import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

import { paths } from '../router/paths';

import type { Language, OvaPageType } from '../types/types';

export const BASE_PAGES = paths.map((item, index) => ({
  path: `/page-${index + 1}`,
  title: item.title,
  kind: item.kind
}));

interface OvaStore {
  baseTitle: string;
  lang: Language;
  pages: OvaPageType[];
  visitedPages: string[];
  selectedAvatarId: string | null;

  /** Marca un path como visitado. Idempotente: no duplica entradas. Si no se pasa path usa el actual. */
  markPageVisited: (path?: string) => void;

  /** Limpia todas las páginas visitadas. */
  resetVisitedPages: () => void;

  /** Persiste el avatar seleccionado por el usuario. */
  selectAvatar: (id: string) => void;
}

export const useOvaStore = create<OvaStore>()(
  devtools(
    persist(
      (set) => ({
        baseTitle: document.title,
        lang: (document.documentElement?.lang ?? 'es') as Language,
        pages: BASE_PAGES.map((p) => ({ ...p, visited: false })),
        visitedPages: [],
        selectedAvatarId: null,

        markPageVisited: (path) =>
          set((state) => {
            const currentPath = path ?? (window.location.hash.replace(/^#/, '') || '/');
            if (state.visitedPages.includes(currentPath)) return state;
            return {
              visitedPages: [...state.visitedPages, currentPath],
              pages: state.pages.map((p) => (p.path === currentPath ? { ...p, visited: true } : p))
            };
          }),

        resetVisitedPages: () =>
          set({
            visitedPages: [],
            pages: BASE_PAGES.map((p) => ({ ...p, visited: false }))
          }),

        selectAvatar: (id) => set({ selectedAvatarId: id })
      }),
      {
        name: 'ova-session',
        storage: createJSONStorage(() => sessionStorage),
        /** Solo persiste los campos que deben sobrevivir a recargas de página. */
        partialize: (state) => ({
          visitedPages: state.visitedPages,
          selectedAvatarId: state.selectedAvatarId
        }),
        /** Reconstruye `pages` con la info de visitas tras rehidratar desde sessionStorage. */
        onRehydrateStorage: () => (state) => {
          if (state) {
            state.pages = BASE_PAGES.map((p) => ({
              ...p,
              visited: state.visitedPages.includes(p.path)
            }));
          }
        }
      }
    ),
    { name: 'OvaStore' }
  )
);
