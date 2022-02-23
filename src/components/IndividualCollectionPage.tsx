import React from 'react'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Octavasimg from '../art/octavas.png'
import Connectivityimg from '../art/Connectivity.png'
import Unannouncedimg from '../art/Unannounced.png'
import OptiPunksimg from '../art/OptiPunks.png'
import MapMarkets from './MapMarkets'
import MapAllMints from './MapAllMints'

import { OptiPunks } from '../state/collections'
import { Connectivity } from '../state/collections'
import { Unannounced } from '../state/collections'
import { Octavas } from '../state/collections'
import { ethers } from 'ethers'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import OctavasRender from '../renderArt/OctavasRender'
import ConnectivityRender from '../renderArt/ConnectivityRender'
import NftContract from '../contracts/Octavas.json'


export function IndividualCollectionPage({wallet}:any) {
  const { id } = useParams()
  var [renderNow, setRenderNow] = useState<any>();
  var [info, setInfo] = useState<any>(OptiPunks);

  var img;
  
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [mintAmount, setMintAmount] = useState(1)

  async function mintNFT() {
      console.log(wallet.getState());
    if (wallet.getState().network == 10){
    if (mintAmount >= 1 && mintAmount <= 20){
      var number = Math.round(5*mintAmount);
      number = number /100
      
     console.log(number)
      var stringOfNumber = number.toString();
      console.log(stringOfNumber)
      let overrides = {
        value: ethers.utils.parseEther(stringOfNumber) ,    // ether in this case MUST be a string
        gasLimit: 3851430
    };

        var provider = new ethers.providers.Web3Provider(wallet.getState().wallet.provider)
        const contract = new ethers.Contract(info.address, NftContract.abi, provider.getSigner() ); //change address on deploy
        // console.log(wallet.getState().wallet);
        var tx =  await contract.mintOctavas(mintAmount,overrides);
        toast("Mint TX Has Been Sent")

    } else {
        toast("Max Mint Is 20")
    }
  } else {toast("Connected To Wrong Network")}

  }

  const handleAddressChange = (event:any) => {
    setMintAmount(event.target.value)
    console.log(event.target.value);
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    console.log("hi");
    mintNFT()
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
    } else if (id == "Connectivity"){
      setRenderNow(Connectivityimg);
      setInfo(Connectivity);
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
   
     
      <div style={{ justifyContent: 'center', borderBottom: '0px' }}className="FlexBoxMiddleImage">
        <div style={{ height: '500px',borderRight:"0px"}}className="FlexBoxColum">
          {}
          {info.name == "Octavas" ? <OctavasRender pushedseed={(Math.random()*1000000000).toString()}/>:'' }
          {info.name == "OptiPunks" ? <img className="ArtLarge" src={renderNow}></img> :""}
          {info.name == "Unannounced" ? <img className="ArtLarge" src={renderNow}></img> :""}
          {info.name == "Connectivity" ? <ConnectivityRender/> :"" }
          {/* change to be live generation */}
        </div>

        <div
          style={{ width: '300px', height: '450px', paddingTop: '28px' }}
          className="FlexIndividualCollectionMainPage"
        >
          <b> {id} </b>
          
            <form onSubmit={handleSubmit}>
            <div style={{borderRight:"0px"}}className="FlexBoxColum">
            {info.status == "Active" ? <input style={{marginRight:"0px", width:"110px"}} onChange={handleAddressChange} className="ShowOptions" type="number"  max="20" min="1" placeholder="1"/>:""}
              {info.status == "Soon" ? <div style={{marginRight:"0px"}}className="ShowOptions"> Mint Soon</div> :""}
              
              {info.status == "Active" ? <br/>: ""}
              {info.status == "Active" ? <input style={{marginRight:"0px"}}className="ShowOptions" type="submit" value="Mint"/>: "" }
              {info.status == "Finished" ? <div style={{marginRight:"0px"}}className="ShowOptions"> Mint Complete</div>: ""}

              </div>
            </form>
     
          <div >

            <div className="IndividualText">
              {/* <div>
              <b>Artist:</b>
              </div>
              <div >
              {info.artist}
            </div> */}
            </div>
            <div className="IndividualText">
             <div><b>Artist:</b></div>
             <div> {info.artist}</div>
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
   
        <ToastContainer />
    </div>
    
  )
}

export default IndividualCollectionPage
