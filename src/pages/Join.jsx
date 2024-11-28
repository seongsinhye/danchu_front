import React from 'react';
import { useState } from 'react';
import { BsPersonPlusFill } from 'react-icons/bs';
import UserInput from '../components/common/UserInput';
import UserButton from '../components/common/UserButton';
import * as api from '../util/fetchFunc';
import { useNavigate } from 'react-router-dom';

export default function Join() {
  const [userInfo, setUserInfo] = useState({
    id: '',
    pw: '',
    nm: '',
    emailAddr: '',
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInfo((userInfo) => ({
      ...userInfo,
      [name]: value,
    }));
  };
  const navigate = useNavigate();
  const joinProgcess = () => {
    fetch(api.BASE_URL + '/user/joinUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        id: userInfo.id,
        pw: userInfo.pw,
        nm: userInfo.nm,
        emailAddr: userInfo.emailAddr,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          alert('회원가입 되었습니다.');
          navigate('/login');
        } else {
          alert('회원가입 안되었습니다. 확인 바랍니다.');
        }
      });
  };

  return (
    <>
      <div className='joinForm'>
        <div className='userFrame' onChange={handleInputChange}>
          <BsPersonPlusFill className='joinPersonIcon' />
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
          <UserInput
            type='text'
            placeholder='이름'
            value={userInfo.nm}
            name='nm'
          />
          <UserInput
            type='text'
            placeholder='emailAddr'
            value={userInfo.emailAddr}
            name='emailAddr'
          />
          <UserButton
            text='회원가입'
            // disabled={!isInvaild}
            onClick={joinProgcess}
          />
        </div>
      </div>
    </>
  );
}
