import { store } from "../store"
import { clearSearch } from "./general/search"

export const cntrl = function(value){
    if(value === 'Inbox' || value === 'Messages' || value === 'Favourite'){
        clearSearch()
        store.commit('setFilter', value)
    } 
    if(value === 'Send' || value === 'Settings'){
        store.commit('setOption', value)
    }
}