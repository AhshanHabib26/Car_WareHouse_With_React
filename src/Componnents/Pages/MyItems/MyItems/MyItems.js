import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase_init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([])
    useEffect( () =>{
        const email = user?.email
        const url = `https://habib-car-house.herokuapp.com/additem?email=${email}`
        fetch(url)
        .then(res => res.json())
        .then( data => setItems(data))
    },[user])


    return (
        <div>
            <h1>My Items: {items.length}</h1>
        </div>
    );
};

export default MyItems;