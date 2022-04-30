import React from 'react';
import useItemLoad from '../../../../Hooks/useItemLoad';
import AllInventoryItem from '../AllInventoryItem/AllInventoryItem';

const AllInventoryItems = () => {
    const [items] = useItemLoad();
    return (
        <div className="container my-5">
          <div className="inventory_container">
            <div className="title_container">
              <h1 className="title_container_text">See Our Top Car List</h1>
            </div>
          </div>
    
          <div className="invntory_product_container my-5">
            {items.map((item) => (
              <AllInventoryItem item={item} key={item._id} />
            ))}
          </div>
        </div>
      );
};

export default AllInventoryItems;