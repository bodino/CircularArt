import React from 'react'
import logo from './logo.svg'
import { useState, useEffect } from 'react'
import TransferModal from './TransferModal'
 


export function BasicRenderNFT({item, info}:any) {
 

  return (

    <div style={{height:"350px"}}className="FlexIndividualCollection">
        <img className="UserMarketImg" src={ info.ipfslink+item.toString()+ ".png"}></img>
        <div >
        <b>{info.name} {item} </b>
        </div>
        
        <a style={{fontSize:"15px", marginRight:"0px"}}className="ShowOptions" href={"https://quixotic.io/asset/opt/0xB8Df6Cc3050cC02F967Db1eE48330bA23276A492/"+item.toString()}>
        View On Quixotic
        </a>
        
      </div>

  )
}

export default BasicRenderNFT