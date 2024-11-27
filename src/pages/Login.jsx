import React from 'react';
import { useState } from 'react';
import UserInput from '../components/common/UserInput';
import UserButton from '../components/common/UserButton';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export default function Login() {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInfo((userInfo) => ({
      ...userInfo,
      [name]: value,
    }));
  };

  return (
    <>
      <div className='login'>
        <div className='userFrame' onChange={handleInputChange}>
          <IoPersonCircleOutline className='personIcon' />
          <UserInput
            type='text'
            placeholder='이메일'
            value={userInfo.email}
            name='email'
          />
          <UserInput
            type='password'
            placeholder='비밀번호'
            value={userInfo.password}
            name='password'
          />
          <UserButton
            text='로그인'
            // disabled={!isInvaild}
            // onClick={loginProgcess}
          />
          <Link to='/join' className='no-underline text-neutral-700 block'>
            회원가입
          </Link>
          <Link to='/join' className='no-underline text-neutral-700'>
            비밀번호 찾기
          </Link>
        </div>
      </div>
    </>
  );
}
