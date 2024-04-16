import { create } from "zustand";

export const useFood = create((set) => ({
    foods: [],
    setFoods: (newList: any) => set(() => ({foods: newList}))
}))

export const useCategory = create((set) => ({
    category: "6615dfdf7b3a26bc39bd9e01",
    setCategory: (selectedCategory: string) => set(() => ({category: selectedCategory}))
}))