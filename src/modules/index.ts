import { create } from "zustand";

export type TypingInfoType = {
    title:string
    WPM:number
    setWpm:(value: number) => void
}

export const useTypingInfo = create<TypingInfoType>((set)=>({
    title:'',
    WPM:0,
    setWpm: (value:number) => set((prev:TypingInfoType) => ({...prev, WPM:value}))
}))