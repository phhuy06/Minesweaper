import { configureStore } from '@reduxjs/toolkit';
import controlSlice from './controlSlice';
export default configureStore({
    reducer: {
        control: controlSlice,
    },
});
