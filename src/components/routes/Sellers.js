import {getSellers} from '../../services/sellerService';
import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const Sellers = () => {
    
    let [Sellers, setSellers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await getSellers()
                .then((res) => {
                    setSellers(res.data);
                }).catch((e)=>console.log(e));
        }

        fetchData();
    },[]);
        
    return (<div>
            <h1>Leverandører</h1>
            <LinkContainer to="/seller/null">
                <Button type="primary" >Opret ny</Button>
            </LinkContainer>
            <Table>
                <thead>
                    <tr>
                        <th>Navn</th>
                        <th>Adresse</th>
                        <th>Postnr.</th>
                        <th>By</th>
                        <th>Produkter</th>
                        <th>Rediger</th>
                    </tr>
                </thead>
                <tbody>

                {Sellers.map((seller, i) =>
                    <tr key={i}>
                        <td>{seller.name}</td>
                        <td>{seller.address}</td>
                        <td>{seller.zip}</td>
                        <td>{seller.city}</td>
                        <td>{seller.products.map((p, j) =>
                            <span key={j}>{j>1?', ' + p.title: p.title}</span>
                        )}
                        </td>
                        <td> <LinkContainer to={"/seller/" + seller._id }><Button type="success">Rediger</Button></LinkContainer></td>
                    </tr> 
                    
                )}
                </tbody>
            </Table>
        </div>
        );
}
 
export default Sellers;