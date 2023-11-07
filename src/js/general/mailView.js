import { cards } from "../../components/Inbox/InboxElements/card/card";
import { store } from "../../store";

export const mailView = function (obj){
    const card = cards.find((c) => c.id === obj.id)
    if(card){
        card.read = true
        store.commit('setOption', 'Email')
        store.commit('setMail', obj)
    }
}