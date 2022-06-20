import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { saveProduct } from '../../services/productService';
import { Row, Col, Form, Button, Dropdown } from 'react-bootstrap';
import { getProduct } from './../../services/productService';

const Product = () => {

    const {productId} = useParams();

    const [Product, setProduct] = useState({
        title: '',
        cat: '',
        img: '',
        descr: '',
        amount: 0,
        unit: '',
        price: 0,
        seller: {
            _id: '',
            address: '',
            zip: 1000,
            city: ''
        }
    });

    useEffect (() => {
        async function fetchData() {
            if (productId !== null) {
                const p = await getProduct(productId);
                setProduct({...p.data});
            }
        }
        fetchData();
    }, [productId]);

    const handleChange = () => {
        console.log("Change");
    }

    const handleSubmit = () => {
        saveProduct(Product);
    }

    const handleSelect = (e) => {
        console.log(e);
    }

    const handleDelete = () => {
        console.log("delete");
    }
    
    return ( 
        <div> 
        <Form className="rounded p-4" onSubmit={handleSubmit}>
                <Form.Group className='mb-3' controlId='formBasicName'>
                    <Form.Label>Titel: </Form.Label>
                    <Form.Control type="text" name='title' value={Product.title} placeholder='Indtast produktnavn' onChange={handleChange}/>
                </Form.Group>
        
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>Kategori: </Form.Label>
                    <Dropdown.Menu onSelect={handleSelect}>
                        <Dropdown.Item >Grøntsag</Dropdown.Item>
                        <Dropdown.Item >Frugt</Dropdown.Item>
                        <Dropdown.Item >Andet</Dropdown.Item>
                    </Dropdown.Menu>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Label>Billede: </Form.Label>
                    <Form.Control type="text" name="phone" value={Product.img} placeholder='Indtast evt. telefonnummer'  onChange={handleChange}/>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicAddress'>
                    <Form.Label>Beskrivelse: </Form.Label>
                    <Form.Control as="textarea" rows={3} name="address" value={Product.descr} placeholder='Indtast adresse'  onChange={handleChange}/>
                </Form.Group>
                <Row>
                    <Form.Group as={Col} md="4" className='mb-3' controlId='formBasicCity'>
                        <Form.Label>Mængde </Form.Label>
                        <Form.Control type="number" name='zip' value={Product.amount} placeholder='Postnr.' onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group as={Col} md="4" className='mb-3' controlId='formBasicCity'>
                        <Form.Label>Enhed: </Form.Label>
                        <Form.Control type="text" name='city' value={Product.unit} placeholder='Indtast enhed' onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group as={Col} md="4" className='mb-3' controlId='formBasicCity'>
                        <Form.Label>Pris: </Form.Label>
                        <Form.Control type="text" name='city' value={Product.price} placeholder='Indtast pris' onChange={handleChange}/>
                    </Form.Group>
                </Row>
                <Button variant='success' type="submit">Gem</Button>
                {Product._id && <Button variant="danger" className='ms-2' onClick={() => handleDelete(Product._id)}>Slet</Button>}
                
                
            
            </Form>
    </div>
     );
}
 
export default Product;