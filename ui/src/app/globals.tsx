import { create } from "zustand";

export const useFood = create((set) => ({
    foods: [],
    setFoods: (newList: any) => set(() => ({foods: newList}))
}))

export const useCategory = create((set) => ({
    category: "",
    setCategory: (selectedCategory: string) => set(() => ({category: selectedCategory}))
}))