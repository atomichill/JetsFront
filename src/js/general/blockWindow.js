import { store } from "../../store"

export const toggleBlockWindow = () =>{
    store.commit('setShowBlockWindow')
}