import React from 'react'


import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import octavian from '../art/octavian.png'





export function IndividualCollectionPage() {
    const { id } = useParams()

  return (
  
    <div style={{flexDirection:"row", justifySelf: "left", maxWidth:"1380px", justifyContent:"center"}}className="Menu2">
      <div className="FlexBoxColum">
        <img style={{maxWidth:"450px"}} src={octavian}></img>
      
      </div>

      <div style={{width:'300px', height:'400px'}}className="FlexIndividualCollection">
        {id}
        </div>
     

    </div>
   
  )
}

export default IndividualCollectionPage
