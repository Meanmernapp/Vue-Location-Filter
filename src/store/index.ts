import Vuex, { createStore, StoreOptions } from 'vuex'

import { RootState } from './type'

// Create a new store instance.

const store: StoreOptions<RootState> = {
    state: {
        helloMessage: 'arman'
    },
    modules: {

    }



}

export default new Vuex.Store<RootState>(store)



