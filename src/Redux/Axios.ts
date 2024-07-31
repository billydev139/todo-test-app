import axios, {AxiosInstance, AxiosError} from 'axios';

const API_URL = 'http://198.71.57.69:6565/'; // Set your API URL here

export const axios_with_token = (token: string): AxiosInstance => {
  try {
    console.log('token', token);
    const instance = axios.create({
      baseURL: API_URL,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmFhNTg5NjhiM2U4OGJlZDBlNWEzMWIiLCJpYXQiOjE3MjI0NDU0OTQsImV4cCI6MTcyMjQ0NTU1NH0.XLE3l4q6b_DcjuGKQLhb4gJIaLD10baKsSTjcy_Wzj0`,
      },
    });

    instance.interceptors.response.use(
      response => {
        return response;
      },
      (error: AxiosError) => {
        if (error.response && error.response.status === 401) {
          console.error('Unauthorized access - 401 detected');
          // Handle 401 Unauthorized error here
        }
        return Promise.reject(error);
      },
    );

    return instance;
  } catch (error) {
    console.error('Error creating axios instance with token:', error);
    throw error;
  }
};

// Create an Axios instance without token
export const axios_without_token = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
