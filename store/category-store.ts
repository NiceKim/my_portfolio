import { create } from 'zustand'

type CategoryStore = {
  activeCategory: string
  setActiveCategory: (category: string) => void
  highlightedSkill: string | null
  setHighlightedSkill: (skill: string | null) => void
}

export const useCategoryStore = create<CategoryStore>()((set) => ({
  activeCategory: 'all',
  setActiveCategory: (category: string) => set({ activeCategory: category }),
  highlightedSkill: null,
  setHighlightedSkill: (skill: string | null) => set({ highlightedSkill: skill }),
})) 