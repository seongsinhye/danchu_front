import React from 'react';
import { useState } from 'react';
import UserInput from '../components/common/UserInput';
import UserButton from '../components/common/UserButton';
import { useNavigate } from 'react-router-dom';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import * as api from '../util/fetchFunc';

export default function Login() {
  const [userInfo, setUserInfo] = useState({
    id: '',
    pw: '',
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInfo((userInfo) => ({
      ...userInfo,
      [name]: value,
    }));
  };
  const navigate = useNavigate();

  const loginProgcess = () => {
    fetch(api.BASE_URL + '/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        id: userInfo.id,
        pw: userInfo.pw,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          alert('로그인 되었습니다.');
          localStorage.setItem('token', data.token);
          navigate('/');
        } else {
          alert('가입되지 않은 정보입니다.');
        }
      });
  };

  return (
    <>
      <div className='login'>
        <div className='userFrame' onChange={handleInputChange}>
          <IoPersonCircleOutline className='personIcon' />
          <UserInput
            type='text'
            placeholder='아이디'
            value={userInfo.id}
            name='id'
          />
          <UserInput
            type='password'
            placeholder='비밀번호'
            value={userInfo.pw}
            name='pw'
          />
          <UserButton
            text='로그인'
            // disabled={!isInvaild}
            onClick={loginProgcess}
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
