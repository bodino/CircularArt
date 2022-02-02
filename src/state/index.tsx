import react from 'react'
import {atom} from 'recoil'



export const connectedState = atom<any>({
    key: "connectedState",
    default: false
})

export const marketState = atom<any>({
    key: "marketState",
    default: []
})

export const octavasState = atom<any>({
    key: "OctavasState",
    default: []
})

export const isItLoading = atom<any>({
    key: "isLoading",
    default: true
})

export const userAddress = atom<any>({
    key: "userAddress",
    default: true
})