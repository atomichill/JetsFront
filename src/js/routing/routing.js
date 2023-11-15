import router from "../../router"

export const toLogin = () =>{
    router.push({name: 'login'})
}

export const toReg = () =>{
    router.push({name:'register'})
}

export const toDash = () =>{
    router.push({name: 'dashboard'})
}