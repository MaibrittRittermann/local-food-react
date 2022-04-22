import axios from 'axios';
import React, {useState, useEffect} from 'react';
import CardBoard from '../CardBoard';

const Home = () => {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios.get("https://localfood-aspit.azurewebsites.net/api/products")
        .then((res) => {
          setCards(res.data);
        }).catch((e) => {
          console.log(e);
        });
    }

    
    fetchData();
  }, []);
  
    return (<CardBoard cards={cards}/>);
}
 
export default Home;