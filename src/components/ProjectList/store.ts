import { create } from 'zustand'

type State = {
  currentProject: string;
  setCurrentProject: (currentProject: string) => void;
};

const useProjectStore = create<State>((set) => ({
  currentProject: '',
  setCurrentProject: (currentProject) => set({ currentProject }),
}))

export { useProjectStore }