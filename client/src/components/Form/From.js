import react, { useState } from 'react';
import "./From.css";
import axios from "axios";

function From() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileno, setMobileno] = useState('');


  const submit = async () => {
    const response = await axios.post('/submit', {
      name: name,
      email: email,
      mobileno: mobileno,

    });


    if (response.data.data) {
      alert(response.data.message)
    }
  }

  return (
    <div>
      <div class="col-md-5  ms-4">
        <div className='open-account-container'>
          <h1 className='account-title'>Open a Demet Account</h1>
          <div className='input-container'>
            <label className='input-label'>Name:</label>
            <input type='text'
              placeholder='Enter Your Name'
              className='input-field'
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }} />

          </div>
          <div className='input-container'>
            <label className='input-label'>Mobile No:</label>
            <input type='text'
              placeholder='Enter Your Mobile No.'
              className='input-field'
              value={mobileno}
              onChange={(e) => {
                setMobileno(e.target.value)
              }} />

          </div>
          <div className='input-container'>
            <label className='input-label'>Email</label>
            <input type='email'
              placeholder='Enter Your Email'
              className='input-field'
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }} />

          </div>
          <button type='button' className='btn-submit' onClick={submit}>Submit</button>

        </div>
      </div>

    </div>
  )
}

export default From;