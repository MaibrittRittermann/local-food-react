import React, {useState} from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

const CreateSeller = () => {

    let [Seller, setSeller] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        zip: '',
        city: '',
        products: []
    });

    const handleChange = e => {
        let value = e.target.value;
        let name = e.target.name;

        setSeller((prevalue)=> {
            return{
                ...prevalue,
                [name]: value
            }
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
     

        console.log("Opret sælger");
    }

    return ( 
        <div>
            <Form className="rounded p-4" onSubmit={handleSubmit}>
                    <Form.Group className='mb-3' controlId='formBasicName'>
                        <Form.Label>Navn: </Form.Label>
                        <Form.Control type="text" name='name' value={Seller.name} placeholder='Indtast navn' onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label>Email: </Form.Label>
                        <Form.Control type="email" name='email' value={Seller.email} placeholder='Indtast Emailadresse' onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicPassword'>
                        <Form.Label>Telefon: </Form.Label>
                        <Form.Control type="text" name="phone" value={Seller.phone} placeholder='Indtast evt. telefonnummer'  onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicAddress'>
                        <Form.Label>Adresse: </Form.Label>
                        <Form.Control type="text" name="address" value={Seller.address} placeholder='Indtast adresse'  onChange={handleChange}/>
                    </Form.Group>
                    <Row>
                        <Form.Group as={Col} md="4" className='mb-3' controlId='formBasicCity'>
                            <Form.Label>Postnr </Form.Label>
                            <Form.Control type="number" name='zip' value={Seller.zip} placeholder='Postnr.' onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group as={Col} md="8" className='mb-3' controlId='formBasicCity'>
                            <Form.Label>By: </Form.Label>
                            <Form.Control type="text" name='city' value={Seller.city} placeholder='Indtast by' onChange={handleChange}/>
                        </Form.Group>
                    </Row>
                    <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                        <Form.Check type="checkbox" label="Husk mig"/>
                    </Form.Group>
                    <Button variant='primary' type="submit" >Login</Button>
                </Form>
        </div>
     );
}
 
export default CreateSeller;