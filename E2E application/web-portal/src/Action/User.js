import axios from "axios";

export const FetchAllUsers = () => {
  return axios({
    method: 'GET',
    baseURL: process.env.REACT_APP_API_URL,
    url: 'v1/users',
    responseType: 'json',
    withCredentials: true,

  });
};

export const createUser = (data) => {
  return axios({
    method: 'POST',
    baseURL: process.env.REACT_APP_API_URL,
    data: data,
    url: 'v1/users',
    responseType: 'json',
    withCredentials: true,
  })
};

export const updateUser = (data) => {
  return axios({
    method: 'PUT',
    baseURL: process.env.REACT_APP_API_URL,
    data: data,
    url: 'v1/users',
    responseType: 'json',
    withCredentials: true,
  })
};

export const deleteUser = (id) => {
  return axios({
    method: 'DELETE',
    baseURL: process.env.REACT_APP_API_URL,
    url: `v1/users/${id}`,
    responseType: 'json',
    withCredentials: true,
  })
};