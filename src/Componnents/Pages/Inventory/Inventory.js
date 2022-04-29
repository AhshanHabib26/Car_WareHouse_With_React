import React from 'react';
import { Link } from 'react-router-dom';
import './Inventory.css'

const Inventory = () => {
    return (
        <div className='container my-5'>
            <div className="inventory_container">
                <div className="title_container">
                    <h1 className='title_container_text'>Browse Top Car</h1>
                </div>
                <div className="list_container">
                    <Link className='list_container_text' to='/blog'>See All Car</Link>
                </div>
            </div>
        </div>
    );
};

export default Inventory;