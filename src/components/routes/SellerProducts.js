import { getProductsBySeller } from '../../services/productService';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const SellerProducts = () => {

    let [Products, setProducts] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            await getProductsBySeller(id)
                .then((res) => {
                    setProducts(res.data);
                }).catch((e)=>console.log(e));
        }

        fetchData();
    },[id]);

    return (  
        <div>
        <h1>Produkter</h1>
        <LinkContainer to="/product/">
            <Button type="primary" >Opret nyt produkt</Button>
        </LinkContainer>
        <Table>
            <thead>
                <tr>
                    <th>Billede</th>
                    <th>Titel</th>
                    <th>Kategori</th>
                    <th>Beskrivelse</th>
                    <th>Mængde</th>
                    <th>Pris</th>
                    <th>Rediger</th>
                    <th>Slet</th>
                </tr>
            </thead>
            <tbody>

            {Products.map((product, i) =>
                <tr key={i}>
                    <td>{product.img}</td>
                    <td>{product.title}</td>
                    <td>{product.cat}</td>
                    <td>{product.descr}</td>
                    <td>{product.amount + ' ' + product.unit}</td>
                    <td>{product.price}</td>
                    <td> <LinkContainer to={"/products/" + id + "/" + product._id }><Button variant="primary">Rediger</Button></LinkContainer></td>
                    <td> <LinkContainer to={"/products/" + product._id }><Button variant="danger">Slet</Button></LinkContainer></td>
                </tr> 
                
            )}
            </tbody>
        </Table>
    </div>
     );
}
 
export default SellerProducts;