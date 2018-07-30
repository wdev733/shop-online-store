import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import products from './products'
import sizes from './sizes'
import inventory from './inventory'
import {default as cart} from './cart'
import axios from 'axios'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage: storage
}

const reducer = combineReducers({user, products, cart, sizes, inventory})
const persistedReducer = persistReducer(persistConfig, reducer)

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(persistedReducer, middleware)

// const updateCart = async () => {
//   const {cart} = store.getState()
//   if (cart.length !== 0) {
//     await axios.put('/api/carts', cart)
//   }
// }

// store.subscribe(updateCart)

export default store
export const persistor = persistStore(store)
export * from './user'
