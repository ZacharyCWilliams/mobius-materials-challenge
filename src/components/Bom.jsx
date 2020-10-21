import React, { useState, useEffect } from 'react'
import axios from "axios"
import { data } from "../data";
import BomItem from "./BomItem";

export default function Bom({ id }) {
  const [mockData, setMockData] = useState([])
  const [bomId, setBomId] = useState(id)

  useEffect(() => {
  //  const fetchData = () => {
  //   fetch(`https://www.mobiusmaterials.com/api/v1/bom/${bomId}`)
  //     .then(response => response.json()
  //     .then(data => setMockData(data));
  //  }
  //  fetchData()
    setMockData(data)
  }, [bomId]);

  const handleUpdateQuantity = async (quantity, item) => {
    item.fields.quantity = quantity
    const bomitem_id = item.fields.uuid
    // const asyncUpdateItem = await axios.put(`https://www.mobiusmaterials.com/api/v1/bom/{bom_id}/bomitem/${bomitem_id}`, item)
    const data = [...mockData]
    const idx = data.indexOf(item)
    data[idx] = {...item}
    setMockData(data)
  }

  const renderItems = mockData.map(bomItem => {
    return <BomItem item={bomItem} onUpdateQuantity={handleUpdateQuantity} />
  })

  return (
    <section className="content-container">{renderItems}</section>
  )
}
