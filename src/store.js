
import { configureStore } from '@reduxjs/toolkit';

import reducer from './auth/Forms/authSlice';



const store = configureStore ({
    reducer :reducer
});

export default store;
