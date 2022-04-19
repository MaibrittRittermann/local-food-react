import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const Sellers = () => {
    
    let [Sellers, setSellers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {

            await axios.get('https://localfood-aspit.azurewebsites.net/api/seller')
                .then((res)=>{
                    console.log("Sellers : " + res.data);
                    setSellers(res.data);
            
                }).catch((e)=>console.log(e));
        }

        fetchData();
    },[]);
        
    return (<div>
            <h1>Leverandører</h1>
            <LinkContainer to="/createseller">
                <Button type="primary" >Opret ny</Button>
            </LinkContainer>
            {Sellers.map((f, i) => 
                <p key={i}>{f.name}</p>
            )}
        </div>
        );
}
 
export default Sellers;