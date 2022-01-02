import React from 'react'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil'

import { connectedState, userAddress } from '../state'
import MapMarkets from './MapMarkets'

import { useState, useEffect } from 'react'
import makeBlockie from 'ethereum-blockies-base64';
import Footer from './Footer'




export function ProfilePage({wallet}:any) {
  const [address, setAddress] = useRecoilState<any>(userAddress)
  const [connected, setConnected] = useRecoilState<any>(connectedState)
    var [allIsClicked, setAllIsClicked] = useState(true);

  
    
  return (
  <div style={{flexDirection:"row", justifySelf: "left", maxWidth:"1380px"}}className= "Menu2">
    <div className="FlexBoxColum">
    <div style={{flexDirection: "row", justifyContent: "left", flexWrap:"nowrap"}}className="FlexBoxUser">
      {connected ?  <img style={{paddingRight:"20px", width:"65px"}}className="ImageLogo" src={makeBlockie(address)} /> :  "Connect Your Wallet"}
      <div style={{textAlign: "center" }}>
        <div style={{fontSize: "24px" }}>
        Welcome
        </div>
        <div>
        {connected ? address.substring(0, 5) : ""}
        ...
        {connected ? address.substring(38, 42) : ""}
        </div>
      
      </div>
       
    </div>

    <div style={{flexDirection: "column", justifyContent: "left", flexWrap:"nowrap"}}className="FlexBoxUser">
      <div className="ShowOptions">
      All
        </div>
        <div className="ShowOptions">
      OptiPunks
        </div>
        <div className="ShowOptions">
      Agustus
        </div>
    </div>
    </div>
   
    <MapMarkets 
    wallet={wallet}/>
   
 
  </div>
    
  )
}

export default ProfilePage
