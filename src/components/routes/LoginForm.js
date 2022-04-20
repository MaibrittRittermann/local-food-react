import { login } from '../../services/authService';
import React, {useState} from 'react';
import { Button, Form } from 'react-bootstrap';
//import Joi from 'react-joi';

const LoginForm = () => {

    let [Account, setAccount] = useState({
        email: '',
        password: ''
    });

   // let errors = {};

  /*  schema = Joi.object({
        username: Joi.string().email().required().label("Brugernavn"),
        password: Joi.string().required().label("Adgangskode")
    });

    validate = () => {
        const error = this.schema.validate(this.state.data);
        if(!error) return null;

        const errors = {};
        for (let item of error.details) 
            errors[item.path[0]] = item.message;

        return errors;
    }
*/
    const handleChange = e => {
        let value = e.target.value;
        let name = e.target.name;

        setAccount((prevalue)=> {
            return{
                ...prevalue,
                [name]: value
            }
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(Account.email, Account.password);
        window.location = "/";

        console.log("submitted");
    }

        return (
            <div className='d-flex justify-content-center align-items-center'>
                <Form className="rounded p-4" onSubmit={handleSubmit}>
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label>Brugernavn: </Form.Label>
                        <Form.Control type="email" name='email' value={Account.email} placeholder='Indtast Emailadresse' onChange={handleChange}/>
                        {/* {errors.username && <div className='alert alert-danger'>{errors.username}</div>} */}
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicPassword'>
                        <Form.Label>Adgangskode: </Form.Label>
                        <Form.Control type="password" name="password" value={Account.password} placeholder='Indtast Adgangskode'  onChange={handleChange}/>
                        {/* {errors.password && <div className='alert alert-danger'>{errors.password}</div>} */}
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                        <Form.Check type="checkbox" label="Husk mig"/>
                    </Form.Group>
                    <Button variant='primary' type="submit" >Login</Button>
                </Form>
            </div>
        );
    }

 
export default LoginForm;