import { create } from 'zustand'

type State = {
  isLoaded: boolean
  setIsLoaded: (isLoaded: boolean) => void
  currentProject: string
  setCurrentProject: (currentProject: string) => void
  currentScrollY: number
  setCurrentScrollY: (currentScrollY: number) => void
};

const useProjectStore = create<State>((set) => ({
  isLoaded: false,
  setIsLoaded: (isLoaded) => set({ isLoaded }),
  currentProject: '',
  setCurrentProject: (currentProject) => set({ currentProject }),
  currentScrollY: 0,
  setCurrentScrollY: (currentScrollY) => set({ currentScrollY }),
}))

export { useProjectStore }