import { store } from "../../store";

export const setSort = function(sort){
    store.commit('setSort', sort)
}