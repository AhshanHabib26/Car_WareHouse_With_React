import React from 'react';
import './InventoryProduct.css'

const InventoryProduct = ({item}) => {
    console.log(item)

    const {Name, Image, Price, Dealers, Description, Quantity} = item

    return (
        <div className='single_item_container'>
            <div className="single_title_container">
                <h3 className='single_Name'>{Name}</h3>
                <h5 className='single_price'>{Price}</h5>
            </div>
        </div>
    );
};

export default InventoryProduct;