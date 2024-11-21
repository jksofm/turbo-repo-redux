
import { create } from "zustand";

export const useAppStore = create((set, get) => ({
    requestCourseId: 0,
    setRequestCourseId: (requestCourseId: number) => {
        set(() => ({ requestCourseId }));
    },
}));