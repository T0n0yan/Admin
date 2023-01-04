import React, {useEffect} from "react";
import {RegistrationUser} from "../platform/api/auth";

const useMainApiCalls = ()=>{

  useEffect(()=>{
    getTestUserAccount()
  },[])

  const getTestUserAccount = async () => {
    await RegistrationUser({
      firstName: 'Admin',
      lastName: 'Adminyan',
      age: '99',
      gender: 'male',
      position: 'Developer',
      email: 'asd@gmail.com',
      phoneNumber: '077001000',
      profileImage: '',
      dateOfBirth: null,
      password:'asdasdasd'
    })
  }
  return {getTestUserAccount}
}

export default useMainApiCalls