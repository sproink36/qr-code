import { createStore } from 'vuex'
import { main } from './main.module'

export const store = createStore({
  modules: {
    main
  }
})
