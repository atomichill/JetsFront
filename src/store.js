import {createStore} from 'vuex'

export const store = createStore({
    state(){
        return {
            option: '',
            filter: '',
            mail: null,
            sort: '',
            search: '',
            settings: '',
            showBlockWindow: false,
            blackTheme: false
        }
    },
    mutations: {
        setOption(state, option) {
            state.option = option
            console.log(state.option)
        },
        setFilter(state, filter){
            state.filter = filter
        },
        setMail(state, obj){
            state.mail = obj
        },
        setSort(state,sort){
            state.sort = sort
        },
        setSearch(state,query){
            state.search = query
        },
        clearSearch(state){
            state.search = ''
        },
        setSetting(state,set){
            state.settings = set
        },
        clearSetting(state){
            state.settings = ''
        },
        setShowBlockWindow(state){
            state.showBlockWindow = !state.showBlockWindow
        },
        setBlackTheme(state){
            state.blackTheme = !state.blackTheme
        }
    }
})