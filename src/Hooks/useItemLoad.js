import  { useEffect, useState } from 'react';

const useItemLoad = () => {
    const [items , setItems] = useState([])
    
    useEffect( () =>{
        fetch('https://habib-car-house.herokuapp.com/item')
        .then(res => res.json())
        .then( data => setItems(data))
    },[items])


    return [items , setItems]
};

export default useItemLoad;