import React from 'react'
import logo from './logo.svg'
import { useState, useEffect } from 'react'
import TransferModal from './TransferModal'
import OctavasRenderSmall from '../renderArt/OctavasRenderSamll' 
import ClickedOctavasRender from './ClickedOctavasRender'


export function RenderProfileOctavas({item, wallet}:any) {
 
  return (

    <div style={{height:"350px"}}className="FlexIndividualCollection">
      <div className="UserMarketImg">
       <OctavasRenderSmall
       pushedseed ={item[0].SEED.toString()}/>
        </div>
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