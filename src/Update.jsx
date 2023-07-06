import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { upadateUser } from './UserReducer';

const Update = () => {
  const {id} = useParams();
  const users = useSelector((state)=>state.users);
  const exitingUser = users.filter(f => f.id == id);
  const {name, email} = exitingUser[0];
  const [uname, setName] = useState(name)
  const [uemail, setEmail] = useState(email)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit =(e) =>{
    e.preventDefault();
    dispatch(upadateUser({
      id: id,
      name: uname,
      email: uemail
    }))
    navigate("/")
  }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className="w-50 border bg-secondary text-white p-5">
        <form onSubmit={handleSubmit}>
          <h3>Update User</h3>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" className='form-control' placeholder='Enter Your Name' 
             value={uname}
             onChange={e => setName(e.target.value)}
             />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" className='form-control' placeholder='Enter Your Email'
            value={uemail}
            onChange={e => setEmail(e.target.value)} 
            />
          </div><br />
          <button className='btn btn-info'>Update</button>
        </form>
      </div>
    </div>
  )
}

export default Update
