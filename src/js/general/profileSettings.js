import { store } from "../../store";

export const setSetting = function(set){
    store.commit('setSetting',set)
}

export const clearSetting = function(){
    store.commit('clearSetting')
}