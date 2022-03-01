import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from "../models";
  
const initialState: User = {
    name: "",
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      storeUsername: (state: User, action: PayloadAction<string>) => {
        state.name = action.payload;
      },
    },
  });
  
export const { storeUsername } = userSlice.actions;

export default userSlice.reducer;