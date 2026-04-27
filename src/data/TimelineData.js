import { create } from 'zustand';

const useTimelineStore = create(set => ({
  entries: [],

  addEntry: data =>
    set(state => ({
      entries: [
        {
          ...data,
          id: Date.now(),
          date: new Date().toLocaleDateString(),
        },
        ...state.entries,
      ],
    })),
}));

export default useTimelineStore;
