import { create } from 'zustand'

type State = {
  isView: boolean
  setIsView: (isView: boolean) => void
  isHelloWorld: boolean
  setIsHelloWorld: (isHelloWorld: boolean) => void
};

const useIntoStore = create<State>((set) => ({
  isView: false,
  setIsView: (isView) => set({ isView }),
  isHelloWorld: false,
  setIsHelloWorld: (isHelloWorld) => set({ isHelloWorld }),
}))

export { useIntoStore }