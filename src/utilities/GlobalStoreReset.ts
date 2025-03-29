import { create as _create } from 'zustand'
import type { StateCreator } from 'zustand'

interface ResetFunction {
  tag: string,
  func: () => void
}

const storeResetFns = new Set<ResetFunction>()

export const resetAllStores = () => {
  storeResetFns.forEach((resetFn) => {
    resetFn.func();
  })
}

export const resetStore = (tag: string) => {
  storeResetFns.forEach(x => {
    if (x.tag == tag) {
      console.log(`Store '${tag}' has been reset.`);
      x.func();
    }
  })
}

export const create = (tag: string) => (<T>() => {
  return (stateCreator: StateCreator<T>) => {
    const store = _create(stateCreator)
    const initialState = store.getState()
    const func = () => { store.setState(initialState, true) };
    storeResetFns.add({ tag, func });
    return store
  }
}) as typeof _create