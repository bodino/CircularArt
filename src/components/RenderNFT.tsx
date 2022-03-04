import React from 'react'
import logo from './logo.svg'
import { useState, useEffect } from 'react'
import TransferModal from './TransferModal'
import { OptiPunks } from '../state/collections'



export function RenderNFT({item, wallet}:any) {
  var [info, setInfo] = useState<any>(OptiPunks);

  return (

    <div style={{height:"350px"}}className="FlexIndividualCollection">
        <img className="UserMarketImg" src={"https://optimarket-imgs.s3.us-east-2.amazonaws.com/QmbAhtqQqiSQqwCwQgrRB6urGc3umTskiuVpgX7FvHhutU/"+item.toString()+ ".png"}></img>
        <div >
        <b>OptiPunk {item} </b>
        </div>
        {/* <TransferModal
        item={item}
        wallet ={wallet}
        /> */}
        <a style={{fontSize:"15px", marginRight:"0px"}}className="ShowOptions" href={"https://quixotic.io/asset/opt/0xB8Df6Cc3050cC02F967Db1eE48330bA23276A492/"+item.toString()}>
        View On Quixotic
        </a>
        
      </div>

  )
}

export default RenderNFT