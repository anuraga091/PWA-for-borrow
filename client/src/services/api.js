import axios from 'axios';

const URL = 'http://localhost:8000';

export const sendMoney = async(data) => {
  try{
    return await axios.post(`${URL}/send`, data)
  } catch (error){
    console.log('Error while calling send api', error)
  }
}

export const borrowMoney = async(data) => {
  try{
    return await axios.post(`${URL}/borrow`, data)
  } catch (error){
    console.log('Error while calling borrow api', error)
    return error.response;
  }
}

export const signInUser = async(data) => {
  try{
    return await axios.post(`${URL}/login`, data)
  } catch (error){
    console.log('Error while calling login api', error)
    return error.response;
  }
}

export const signupUser = async(data) => {
  try{
    return await axios.post(`${URL}/signup`, data)
  } catch (error){
    console.log('Error while calling signup api', error)
    return error.response;
  }
}