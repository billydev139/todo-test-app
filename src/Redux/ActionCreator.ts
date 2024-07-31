import {createAsyncThunk} from '@reduxjs/toolkit';
import {axios_with_token, axios_without_token} from './Axios';

export const Register = createAsyncThunk('registers', async (payload: any) => {
  console.log(payload);
  try {
    const response = await axios_without_token.post('auth/register', payload);
    console.log('all data', response.data);
    if (response.data.status === 201) {
      console.log('SignUp', response.data);
      return response.data;
    } else {
      console.log('Error in response');
    }
  } catch (error: any) {
    console.error('Error', error);
  }
});

export const GetTodo = createAsyncThunk('getTodo', async (payload: any) => {
  console.log(payload);
  try {
    const response = await axios_with_token().get(
      'todo/geTodo/60c72b2f5f1b2c001f8e4c5d',
    );
    console.log('all data', response.data);
    if (response.data.status === 201) {
      console.log('SignUp', response.data);
      return response.data;
    } else {
      console.log('Error in response');
    }
  } catch (error: any) {
    console.error('Error', error);
  }
});
export const DeleteTodo = createAsyncThunk('getTodo', async (payload: any) => {
  console.log(payload);
  try {
    const response = await axios_with_token().get(
      'todo/geTodo/60c72b2f5f1b2c001f8e4c5d',
    );
    console.log('all data', response.data);
    if (response.data.status === 201) {
      console.log('createTodo', response.data);
      return response.data;
    } else {
      console.log('Error in response');
    }
  } catch (error: any) {
    console.error('Error', error);
  }
});
export const CreateTodo = createAsyncThunk('getTodo', async (payload: any) => {
  console.log(payload);
  try {
    const response = await axios_with_token().get(
      'todo/geTodo/60c72b2f5f1b2c001f8e4c5d',
    );
    console.log('all data', response.data);
    if (response.data.status === 201) {
      console.log('createTodo', response.data);
      return response.data;
    } else {
      console.log('Error in response');
    }
  } catch (error: any) {
    console.error('Error', error);
  }
});
