import React, { useState } from "react";
import SHOP_DATA from "./shop.data.js";
import PreviewCollection from "../../components/preview-collection/preview-collection.component";
const ShopPage = () => {
  const [data, setdata] = useState(SHOP_DATA);

  return (
    <div className="Shop-Page">
      {data.map(({ id, ...otherPreviewProps }) => (
        <PreviewCollection key={id} {...otherPreviewProps} />
      ))}
    </div>
  );
};
export default ShopPage;
