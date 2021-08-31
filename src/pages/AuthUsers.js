import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillGithub, AiOutlineClose } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

const AuthUsers = () => {
  return (
    <section className='sign-in'>
      <div className='sign-in__container'>
        <a href='/'>
          <AiOutlineClose className='icons--cancel' />
        </a>
        <h3>Login</h3>
        <form className='sign-in__form'>
          <div className='form__container'>
            <input type='text' name='username' autoComplete='off' required />
            <label htmlFor='username' className='form__label'>
              <span className='form__span-name'>Username</span>
            </label>
          </div>
          <div className='form__container'>
            <input
              type='password'
              name='password'
              autoComplete='off'
              required
            />
            <label htmlFor='password' className='form__label'>
              <span className='form__span-name'>Password</span>
            </label>
          </div>
        </form>
        <button className='sign-up__btn--forgot-password'>
          Forgot password?
        </button>
        <div className='btn__container'>
          <button className='btn--login'>LOGIN</button>
        </div>
        <div className='sign-up__container'>
          <div>Or Sign Up Using</div>
          <div className='icons__container'>
            <div className='icons__border'>
              <FaFacebookF className='icons__circle' />
            </div>
            <div id='gh' className='icons__border'>
              <AiFillGithub className='icons__circle' />
            </div>
            <div id='gg' className='icons__border'>
              <FcGoogle className='icons__circle' />
            </div>
          </div>
          <div className='sign-up__center'>
            <div className='sign-up--account'>Create an account</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthUsers;
