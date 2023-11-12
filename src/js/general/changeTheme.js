import { store } from "../../store";

export const changeTheme = () =>{
    store.commit("setBlackTheme")
}