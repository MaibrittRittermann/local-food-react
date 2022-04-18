import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Seller = () => {
    
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
            {Sellers.map((f, i) => 
                <p key={i}>{f.name}</p>
            )}
        </div>
        );
}
 
export default Seller;