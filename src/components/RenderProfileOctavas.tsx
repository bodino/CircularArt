import React from 'react'
import logo from './logo.svg'
import { useState, useEffect } from 'react'
import TransferModal from './TransferModal'
import OctavasRenderSmall from '../renderArt/OctavasRenderSamll' 
import ClickedOctavasRender from './ClickedOctavasRender'
import { Octavas } from '../state/collections'


export function RenderProfileOctavas({item, wallet}:any) {
  var [info, setInfo] = useState<any>(Octavas);
  console.log("hello world")
  console.log(item);
  return (

    <div style={{height:"350px"}}className="FlexIndividualCollection">
   
       
      <img className="UserMarketImg" src={info.ipfslink+item[0].ID.toString()+ ".png"}></img>
    
        <div >
        <b>Octavas {item[0].ID} </b>
        </div>
        <ClickedOctavasRender
        item={item[0].ID}
        seed={item[0].SEED.toString()}
        />
        <a style={{fontSize:"15px", marginRight:"0px"}}className="ShowOptions" href={"https://quixotic.io/asset/opt/0xc58c9a631ce193fC3F2Bb190Ab5Ba1BE181c09D1/"+item[0].ID.toString()}>
        View On Quixotic
        </a>
        
      </div>

  )
}

export default RenderProfileOctavas