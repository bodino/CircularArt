import React from 'react'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Octavasimg from '../art/octavas.png'
import Unannouncedimg from '../art/Unannounced.png'
import OptiPunksimg from '../art/OptiPunks.png'
import MapMarkets from './MapMarkets'
import MapAllMints from './MapAllMints'

import { OptiPunks } from '../state/collections'
import { Unannounced } from '../state/collections'
import { Octavas } from '../state/collections'
import { ethers } from 'ethers'
import { ToastContainer, toast } from 'react-toastify';

import OctavasRender from '../renderArt/OctavasRender'
import NftContract from '../contracts/nft.json'


export function IndividualCollectionPage({wallet}:any) {
  const { id } = useParams()
  var [renderNow, setRenderNow] = useState<any>();
  var [info, setInfo] = useState<any>(OptiPunks);

  var img;


  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [mintAmount, setMintAmount] = useState(1)

  async function transferNFt() {
      
    if (mintAmount >= 1 && mintAmount <= 20){
        
        var provider = new ethers.providers.Web3Provider(wallet.getState().wallet.provider)
        const contract = new ethers.Contract(info.address, NftContract.abi, provider.getSigner() );
        console.log(wallet.getState().wallet);
        var tx =  await contract.mintOptiPunk(mintAmount);

    } else {
        toast("Max Mint Is 20")
    }

  }

  const handleAddressChange = (event:any) => {
    setMintAmount(event.target.value)
    console.log(event.target.value);
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    console.log("hi");
    transferNFt()
  };

  useEffect(() => {
    if (id == "OptiPunks"){
      setRenderNow(OptiPunksimg);
      setInfo(OptiPunks);
    } else if (id == "Unannounced"){
      setRenderNow(Unannouncedimg);
      setInfo(Unannounced);
    }  else if (id == "Octavas"){
      setRenderNow(Octavasimg);
      setInfo(Octavas);
    }

    
   
  }, );
  return (
    <div
      style={{
        flexDirection: 'column',
        justifySelf: 'left',
        maxWidth: '1380px',
        justifyContent: 'center',
      }}
      className="Menu2"
    >
     <ToastContainer />
     
      <div style={{ justifyContent: 'center', borderBottom: '0px' }}className="FlexBox">
        <div style={{ height: '500px' }}className="FlexBoxColum">
          {}
          {info.type == "live" ? <OctavasRender/>:<img style={{ height: '500px' }} src={renderNow}></img> }
          
        </div>

        <div
          style={{ width: '300px', height: '450px', paddingTop: '28px' }}
          className="FlexIndividualCollection"
        >
          <b> {id} </b>
          
            <form onSubmit={handleSubmit}>
            <div style={{borderRight:"0px"}}className="FlexBoxColum">
              <input style={{marginRight:"0px", width:"110px"}} onChange={handleAddressChange} className="ShowOptions" type="number"  max="20" min="1" placeholder="1"/>
              <br/>
              <input style={{marginRight:"0px"}}className="ShowOptions" type="submit" value="Mint"/> 
              </div>
            </form>
     
          <div className="Border">

            <div className="IndividualText">
              <div>
              <b>Artist:</b>
              </div>
              <div >
              {info.artist}
            </div>
            </div>
           
            <div className="IndividualText">
              <div> <b>Total:</b> </div>
              <div>{info.total}</div>
            </div>
            <div className="IndividualText">
             <div><b>Minted:</b></div>
             <div> {info.minted}</div>
            </div>
            <div>
          
            </div>
         
          </div>
          
        </div>
        {/* <div  style={{ maxWidth: '760px', height: '20px' }} className="FlexIndividualCollection">
        {info.description}
        </div> */}
      </div>
      
        {!info.ipfslink ? "": <> <MapAllMints info={info}/> </> }
   
  
    </div>
  )
}

export default IndividualCollectionPage
