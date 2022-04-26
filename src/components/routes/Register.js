import React from 'react';
import { useState } from 'react';
import { registerUser, loginWithJWT } from '../../services/authService';
import { Form, Button, Dropdown} from 'react-bootstrap';
import { toast } from 'react-toastify';
import { getCurrentUser } from './../../services/authService';

const Register = () => {

    const [User, setUser] = useState({
        name: '',
        email: '',
        password: '',
        access: 'client'
    });
    const [errors, setErrors] = useState('');

    const handleChange = e => {
        let value = e.target.value;
        let name = e.target.name;

        setUser((prevalue)=> {
            return{
                ...prevalue,
                [name]: value
            }
        });
    }

    const handleSelect = (e) => {
        console.log(e);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await registerUser(User);
            console.log(response);
            console.log("headers = " + response.headers);
            loginWithJWT(response.headers['x-auth-token']); 
            toast(`Velkommen til ${response.data.name}`);
        } catch(ex) {
            setErrors(ex.response.data);
        }
    }


    return ( 
        <div>
            <h1>Opret bruger</h1>
            <div className='d-flex justify-content-center align-items-center'>
                <Form className="rounded p-4" onSubmit={handleSubmit}>
                    <Form.Group className='mb-3' controlId='formBasicName'>
                        <Form.Label>Navn: </Form.Label>
                        <Form.Control type="name" name='name' value={User.name} placeholder='Indtast navn' onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label>Email: </Form.Label>
                        <Form.Control type="email" name='email' value={User.email} placeholder='Indtast Emailadresse' onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicPassword'>
                        <Form.Label>Adgangskode: </Form.Label>
                        <Form.Control type="password" name="password" value={User.password} placeholder='Indtast Adgangskode'  onChange={handleChange}/>
                        {errors && <div className='alert alert-danger'>{errors}</div>}
                    </Form.Group>
                    {getCurrentUser() && getCurrentUser().access === 'admin' (
                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                            {/* TODO: opdater select i forhold til state */}
                            <Form.Label>Brugeradgang: </Form.Label>
                            <Dropdown.Menu name="access" onSelect={handleSelect}>
                                <Dropdown.Item >client</Dropdown.Item>
                                <Dropdown.Item >seller</Dropdown.Item>
                                <Dropdown.Item >admin</Dropdown.Item>
                            </Dropdown.Menu>
                        </Form.Group>
                    )}
                    {!getCurrentUser() && <input type="hidden" value={User.access} name="access"/>}
                    <Button variant='primary' type="submit" >Opret</Button>
                </Form>
            </div>
        </div>
     );
}
 
export default Register;