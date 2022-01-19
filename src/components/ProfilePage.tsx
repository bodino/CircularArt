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
    const [loadAllArt, setloadAllArt] = useState(true);

    const [loadOctavasblack, setloadOctavasblack] = useState(false);
    const [loadOptiPunksblack, setloadOptiPunksblack] = useState(false);



    function loadAll(){
      setloadOctavas(true)
      setloadOptiPunks(true)
      setloadAllArt(true)
      setloadOptiPunksblack(false)
      setloadOctavasblack(false)
    }

    function loadOptiPunksOnly(){
      setloadOctavas(false)
      setloadOptiPunks(true)
      setloadAllArt(false)
      setloadOptiPunksblack(true)
      setloadOctavasblack(false)
    }

    function loadOctavasOnly(){
      setloadOctavas(true)
      setloadOptiPunks(false)
      setloadAllArt(false)
      setloadOptiPunksblack(false)
      setloadOctavasblack(true)
    }



   



  
    
  return (
  <div style={{flexDirection:"row", justifySelf: "left", maxWidth:"1380px"}}className= "Menu2">
    <div style={{minWidth: '302px'}}className="FlexBoxColum">
    <div style={{flexDirection: "row", justifyContent: "left", flexWrap:"nowrap", height:'100px'}}className="FlexBoxUser">
      {connected ?  <img style={{paddingRight:"20px", width:"65px"}}className="ImageLogo" src={makeBlockie(address)} /> :   <button className="buttonColor" >
          {' '}
        Connect To View Profile
        </button>}
      <div style={{textAlign: "center" }}>
      {connected ? <div style={{fontSize: "24px" }}>
        Welcome
        </div> :""}
        <div>
        {connected ? address.substring(0, 5) : ""}
        {connected ? '...' : ""}
        {connected ? address.substring(38, 42) : ""}
        </div>
      
      </div>
       
    </div>

    <div style={{flexDirection: "column", justifyContent: "left", flexWrap:"nowrap"}}className="FlexBoxUser">
      <div style={{backgroundColor: loadAllArt ? 'black' : '', color: loadAllArt ? 'white' : ''   }}  className="ShowOptions" onClick={loadAll}>
      All
        </div>
        <br/>
        <div style={{backgroundColor: loadOptiPunksblack ? 'black' : '', color: loadOptiPunksblack ? 'white' : ''    }} className="ShowOptions" onClick={loadOptiPunksOnly}>
      OptiPunks
        </div>
        <br/>
        <div style={{backgroundColor: loadOctavasblack ? 'black' : '', color: loadOctavasblack ? 'white' : ''      }} className="ShowOptions" onClick={loadOctavasOnly}>
      Octavas
        </div>
    </div>
    </div>
    <div style={{ height: "calc(100vh - 200px)", borderTop:'0px'}} className="AllProfileCollectionFlexBox">
      {loadOptiPunks ? <MapMarkets wallet={wallet}/>: ""}
       {/* {loadOctavas ? <MapOctavas wallet={wallet}/> : ""} */}
    </div>
   
 
  </div>
    
  )
}

export default ProfilePage
