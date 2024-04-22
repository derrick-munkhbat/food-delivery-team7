import { create } from "zustand";

export const useFood = create((set) => ({
    foods: [],
    setFoods: (newList: any) => set(() => ({foods: newList}))
}))

export const useCategory = create((set) => ({
    category: "",
    setCategory: (selectedCategory: string) => set(() => ({category: selectedCategory}))
}))

export const useCategoryInfo = create((set) => ({
    categoryInfo: [],
    setCategoryInfo: (newList: any) => set(() => ({categoryInfo: newList}))
}))

export const useOrderId = create((set) => ({
    orderId: "",
    setOrderId: (orderId: string) => set(() => ({orderId: orderId}))
}))