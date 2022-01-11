import React from 'react'
import logo from './logo.svg'
import { useState, useEffect } from 'react'
import TransferModal from './TransferModal'
import OctavasRenderSmall from '../renderArt/OctavasRenderSamll' 


export function RenderProfileOctavas({item, wallet}:any) {
 

  return (

    <div style={{height:"350px"}}className="FlexIndividualCollection">
      <div className="UserMarketImg">
       <OctavasRenderSmall
       pushedseed ={item}/>
        </div>
        <div >
        <b>Octavas {item} </b>
        </div>
        <TransferModal
        item={item}
        wallet ={wallet}
        />
        <a style={{fontSize:"15px", marginRight:"0px"}}className="ShowOptions" href={"https://quixotic.io/asset/opt/0xB8Df6Cc3050cC02F967Db1eE48330bA23276A492/"+item.toString()}>
        View On Quixotic
        </a>
        
      </div>

  )
}

export default RenderProfileOctavas