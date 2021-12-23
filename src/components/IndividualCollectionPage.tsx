import React from 'react'


import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import octavian from '../art/octavian.png'





export function IndividualCollectionPage() {
    const { id } = useParams()

  return (
  
    <div className="FlexBox">
        <div className="MarginRight">
        {id}
        </div>
        <img style={{maxWidth:"500px"}} src={octavian}></img>
    </div>
   
  )
}

export default IndividualCollectionPage
