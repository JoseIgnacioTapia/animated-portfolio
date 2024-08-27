import { createStore } from 'zustand';

export const sizesStore = createStore((set) => ({
  width: window.innerWidth,
  height: window.innerHeight,
  pixelRatio: Math.min(window.devicePixelRatio, 2),
}));
