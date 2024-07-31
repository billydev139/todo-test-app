import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AppState {
  routing: string;
}

const initialState: AppState = {
  routing: '',
};

const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    setRoute: (state, action: PayloadAction<string>) => {
      state.routing = action.payload;
    },
  },
});

export const {setRoute} = appSlice.actions;
export default appSlice.reducer;
