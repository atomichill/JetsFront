import { store } from "../../store"

export const searchMail = function(cards, query) {
    return cards.filter((mail) => {
        return mail.title.toLowerCase().includes(query.toLowerCase());
    });
};

export const setSearch = function (query){
    store.commit('setSearch',query)
}

export const clearSearch = function(){
    store.commit('clearSearch')
}