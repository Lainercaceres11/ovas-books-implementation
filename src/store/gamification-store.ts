import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

export interface ActivityRecord {
  stars: number /** Estrellas restantes (0 al máximo configurado). */;
  completed: boolean /** Si la actividad fue completada exitosamente. */;
  medalIndex: number /** Índice de la medalla ganada (0 = no ganada, 1+ = Nth medalla). */;
}

interface GamificationStore {
  activities: Record<string, ActivityRecord>;
  totalMedals: number /** Total de medallas ganadas a lo largo de todas las actividades. */;
  registerActivity: ( id: string, maxStars?: number ) => void /** Registra una actividad por ID. No sobreescribe si ya existe. */;
  decrementStar: (id: string) => void /** Decrementa una estrella de la actividad (mínimo 0). */;
  completeActivity: (id: string ) => void /** Marca la actividad como completada y asigna el índice de medalla. Incrementa totalMedals. */;
  resetGamification: () => void /** Reinicia el store de gamificación por completo. */;
}

export const useGamificationStore = create<GamificationStore>()(
  devtools(
    persist(
      (set) => ({
        activities: {},
        totalMedals: 0,

        registerActivity: (id, maxStars = 3) =>
          set((state) => {
            if (state.activities[id]) return state;
            return {
              activities: {
                ...state.activities,
                [id]: { stars: maxStars, completed: false, medalIndex: 0 }
              }
            };
          }),

        decrementStar: (id) =>
          set((state) => {
            const activity = state.activities[id];
            if (!activity || activity.stars <= 0) return state;
            return {
              activities: {
                ...state.activities,
                [id]: { ...activity, stars: Math.max(0, activity.stars - 1) }
              }
            };
          }),

        completeActivity: (id) =>
          set((state) => {
            const activity = state.activities[id];
            if (!activity || activity.completed) return state;
            const medalIndex = Object.values(state.activities).filter((a) => a.completed).length + 1;
            return {
              activities: {
                ...state.activities,
                [id]: { ...activity, completed: true, medalIndex }
              },
              totalMedals: state.totalMedals + 1
            };
          }),

        resetGamification: () => set({ activities: {}, totalMedals: 0 })
      }),
      {
        name: 'gamification-session',
        storage: createJSONStorage(() => sessionStorage)
      }
    ),
    { name: 'GamificationStore' }
  )
);
