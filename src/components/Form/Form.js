import React from 'react';
import Section, { SectionBody, SectionTitle } from '../Section/Section';
import Input from '../UI/Input/Input';
import './Form.css';
const getNumber = (begin, end) => {
  const res = [];
  for (let i = begin; i <= end; i++) res.push(i);
  return res;
};

const city = ['Hà Nội', 'Hồ Chí Minh', 'Đà Nẵng', 'Vinh', 'Hải Phòng', 'Huế'];

function Form(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Section>
      <SectionTitle>Đăng kí thông tin</SectionTitle>
      <SectionBody>
        <form action='' className='form' onSubmit={handleSubmit}>
          <Input label='Username' id='name'></Input>
          <Input label='Password' id='name'></Input>
          <Input label='Email' id='name'></Input>
          <div className='select-container'>
            <label>Ngày sinh</label>
            <select name='date' id='' defaultValue='0'>
              {getNumber(1, 31).map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
            <select name='date' id=''>
              {getNumber(1, 12).map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
            <select name='date' id=''>
              {getNumber(1990, 2021).map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </div>
          <div className='radio-container'>
            <label>Giới tính</label>
            <div className='radio-item'>
              <p>Nam: </p>
              <input type='radio' name='gender' id='' />
            </div>
            <div className='radio-item'>
              <p>Nữ:</p>
              <input type='radio' name='gender' id='' />
            </div>
          </div>
          <div className='select-container'>
            <label>Tỉnh/Thành Phố</label>
            <select name='city' id='' className='city'>
              {city.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </div>
          <div className='checkbox-container'>
            <label>Sở thích</label>
            <div className='checkbox-item'>
              <label htmlFor='sport'>Thể thao: </label>
              <input type='checkbox' name='' id='sport' />
            </div>
            <div className='checkbox-item'>
              <label htmlFor='music'>Nghe nhạc: </label>
              <input type='checkbox' name='' id='music' />
            </div>
            <div className='checkbox-item'>
              <label htmlFor='shopping'>Mua sắm: </label>
              <input type='checkbox' name='' id='shopping' />
            </div>
            <div className='checkbox-item'>
              <label htmlFor='travel'>Du lịch: </label>
              <input type='checkbox' name='' id='travel' />
            </div>
          </div>
          <div className='textarea-container'>
            <label>Mô tả bản thân</label>
            <textarea name='' id='' cols='30' rows='10'></textarea>
          </div>
          <button>Submit</button>
          <button type='reset'>Reset</button>
        </form>
      </SectionBody>
    </Section>
  );
}

export default Form;
