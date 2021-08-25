import {createStore} from 'vuex'
import coachesModule from './modules/coaches/index'
import requestsModule from './modules/requests/index'

export default createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        coaches: coachesModule,
        requests: requestsModule
    },
})
