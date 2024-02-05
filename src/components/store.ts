import { create } from 'zustand'

type State = {
  currentProject: string
  setCurrentProject: (currentProject: string) => void
  currentScrollY: number
  setCurrentScrollY: (currentScrollY: number) => void
};

const useProjectStore = create<State>((set) => ({
  currentProject: '',
  setCurrentProject: (currentProject) => set({ currentProject }),
  currentScrollY: 0,
  setCurrentScrollY: (currentScrollY) => set({ currentScrollY }),
}))

export { useProjectStore }