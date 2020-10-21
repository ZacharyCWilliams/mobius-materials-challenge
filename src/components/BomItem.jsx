import React, { useState } from "react";
import "./BotItem.scss";

export default function BomItem({ item, onUpdateQuantity }) {

  const [itemQuantity, setItemQuantity] = useState(item.fields.quantity)
  
  const handleChange = (e) => {
    setItemQuantity(e.target.value)
  }

  return (
    <section className="item-section">
      <div className="item-header"><h2>Part: {item.pk}</h2></div>
      <section className="item-container">
        <div className="item information">
          <ul>
            <li className="item-field"><b>BOM ID:</b> {item.fields.bom}</li>
            <li className="item-field"><b>Price:</b> ${item.fields.item_unit_cost}</li>
            <li className="item-field"><b>Quantity:</b> {item.fields.quantity}</li>
            <li className="item-field"><b>Part Number:</b> {item.fields.specific_part}</li>
            <li className="item-field"><b>Part ID:</b> {item.fields.uuid}</li>
            <li className="item-field"><b>Model:</b> {item.model}</li>
          </ul>
        </div>
        <section className="update-quantity-section">
          <label className="quantity-header">
            Quantity
          </label>
          <input className="change-quantity-input" value={itemQuantity} type="number" onChange={(e) => handleChange(e)} />
          <button className="quantity-btn" onClick={(e) => onUpdateQuantity(itemQuantity, item)}>Update Quantity</button>
        </section>
      </section>
    </section>
  )
} 