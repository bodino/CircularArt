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
import MapOctavas from './MapOctavas'

import { useState, useEffect } from 'react'
import makeBlockie from 'ethereum-blockies-base64';
import Footer from './Footer'





export function ProfilePage({wallet}:any) {
  const [address, setAddress] = useRecoilState<any>(userAddress)
  const [connected, setConnected] = useRecoilState<any>(connectedState)
    var [allIsClicked, setAllIsClicked] = useState(true);

    const [loadOptiPunks, setloadOptiPunks] = useState(true);
    const [loadOctavas, setloadOctavas] = useState(true);

    function loadAll(){
      setloadOctavas(true)
      setloadOptiPunks(true)
    }

    function loadOptiPunksOnly(){
      setloadOctavas(false)
      setloadOptiPunks(true)
    }

    function loadOctavasOnly(){
      setloadOctavas(true)
      setloadOptiPunks(false)
    }



  
    
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
      <div className="ShowOptions" onClick={loadAll}>
      All
        </div>
        <br/>
        <div className="ShowOptions" onClick={loadOptiPunksOnly}>
      OptiPunks
        </div>
        <br/>
        <div className="ShowOptions" onClick={loadOctavasOnly}>
      Octavas
        </div>
    </div>
    </div>
    <div style={{ height: "calc(100vh - 121px)", borderTop:'0px'}} className="AllProfileCollectionFlexBox">
      {loadOptiPunks ? <MapMarkets wallet={wallet}/>: ""}
       {loadOctavas ? <MapOctavas wallet={wallet}/> : ""}
    </div>
   
 
  </div>
    
  )
}

export default ProfilePage
