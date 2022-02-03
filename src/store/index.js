import {createStore} from "vuex";
export default createStore({
    state: {
        services: {},
        price:0,
    },
    mutations: {


        getServices(state, services){
            let obj3 = {};
            let i=0;

            for (let key in state.services) { obj3[i] = state.services[key]; i++; }
            for (let key in services) { obj3[i] = services[key]; i++;}
            //console.log(obj3);
            state.services=obj3;
        },
        getRemoveServices(state, index){
            let obj3 = {};
            let i=0;
            let price = 0;
            for (let key in state.services) {
                if(key!=index){
                    obj3[i] = state.services[key];
                    price=price+state.services[key].price;
                    i++;
                }
            }

            //console.log(obj3);
            state.price=price;
            state.services=obj3;
        },
        getPrice(state, price){
            state.price=state.price + price;
        },

        clearServices(state){
            state.services={};
        },
        clearPrice(state){
            state.price=0;
        },


    },
    actions: {
        addServices({commit}, services) {
            commit('getServices', services)
        },
        removeServices({commit}, index) {
            commit('getRemoveServices', index)
        },
        clearServices({commit}) {
            commit('clearServices')
        },
        addPrice({commit}, price) {
            commit('getPrice', price)
        },
        clearPrice({commit}) {
            commit('clearPrice')
        },



    },
    modules: {
    }
})