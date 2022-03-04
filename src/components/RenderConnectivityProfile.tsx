import React from 'react'
import logo from './logo.svg'
import { useState, useEffect } from 'react'
import TransferModal from './TransferModal'
import OctavasRenderSmall from '../renderArt/OctavasRenderSamll' 
import ClickedOctavasRender from './ClickedConnectivityRender'
import ConnectivityRenderSmall from '../renderArt/ConnectivityRenderSmall'
import { Octavas } from '../state/collections'
import ClickedConnectivityRender from './ClickedConnectivityRender'


export function RenderConnectivityProfile({item, wallet}:any) {
  var [info, setInfo] = useState<any>(Octavas);
  console.log("hello world")
  console.log(item);
  return (

    <div style={{height:"350px"}}className="FlexIndividualCollection">
   
       
 
      <ConnectivityRenderSmall
      pushedseed={item[0].SEED.toString()}
      />
    
        <div >
        <b>Connectivity {item[0].ID} </b>
        </div>
        <ClickedConnectivityRender
        item={item[0].ID}
        seed={item[0].SEED.toString()}
        />
        <a style={{fontSize:"15px", marginRight:"0px"}}className="ShowOptions" href={"https://quixotic.io/asset/opt/0xc58c9a631ce193fC3F2Bb190Ab5Ba1BE181c09D1/"+item[0].ID.toString()}>
        View On Quixotic
        </a>
        
      </div>

  )
}

export default RenderConnectivityProfile