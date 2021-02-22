import React from "react";
import menuItemComponent from "../menu.item/menu.item.component";
import CollectionItem from "../collection-item/collection-item.component";
import "./preview-collection.style.scss";
const PreviewCollection = ({ title, items }) => (
  <div>
    <div className="preview-collection">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otheritemProps }) => (
            <CollectionItem key={id} {...otheritemProps} />
          ))}
      </div>
    </div>
  </div>
);
export default PreviewCollection;
