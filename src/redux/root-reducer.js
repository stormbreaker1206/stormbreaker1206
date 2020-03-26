import {combineReducers} from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducder from './user/user.reducer';
import CartReducder from './cart/cart.reducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};

const rootReducer = combineReducers({

    user:userReducder,
    cart:CartReducder

});

export default persistReducer(persistConfig, rootReducer);