import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {GetTodo, Register} from '../ActionCreator';

interface TodoState {
  RegisterIsLoading: boolean;
  RegisterData: any;
  todoIsLoading: boolean;
  todoData: any;
  isError: boolean;
  Token: any;
}
const initialState: TodoState = {
  RegisterIsLoading: false,
  RegisterData: null,
  todoIsLoading: false,
  todoData: null,
  isError: false,
  Token: '',
};
const HomeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(Register.pending, state => {
      state.RegisterIsLoading = false;
    });
    builder.addCase(Register.rejected, (state, action: PayloadAction<any>) => {
      state.RegisterIsLoading = false;
      state.isError = false;
      console.log('rejected', action.payload);
    });
    builder.addCase(GetTodo.fulfilled, (state, action: PayloadAction<any>) => {
      state.todoIsLoading = false;
      state.RegisterData = action.payload;
    });
    builder.addCase(GetTodo.pending, state => {
      state.todoIsLoading = false;
    });
    builder.addCase(GetTodo.rejected, (state, action: PayloadAction<any>) => {
      state.todoIsLoading = false;
      state.isError = false;
      console.log('rejected', action.payload);
    });
    builder.addCase(Register.fulfilled, (state, action: PayloadAction<any>) => {
      state.RegisterIsLoading = false;
      state.todoData = action.payload;
    });
  },
});

export default HomeSlice.reducer;
