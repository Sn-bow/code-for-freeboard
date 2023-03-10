import { atom } from "recoil"

export const isEditeState = atom({
    key: "isEditeState",
    default: false,
})

export const accessTokenState = atom({
    key: "accessTokenState",
    default: "",
})

export const visitedPageStaet = atom({
    key: "visitedPageStaet",
    default: "",
})
