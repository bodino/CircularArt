import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import logo from './logo.svg'
import { useState, useEffect } from 'react'
import '../App.css'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil'
import Web3 from 'web3'
import { ethers } from 'ethers'
import Header from '../components/Header'
import UpperBody from '../components/UpperBody'
import { connectedState, marketState, octavasState } from '../state'
import MiddleBody from '../components/MiddleBody'
import Collection from '../components/Collection'

import OptiPunksLogo from '../OptiPunks.png'
import testFindeza from '../testFindeza.png'
import Footer from '../components/Footer'
import LandingPage from './LandingPage'
import LearnPage from './LearnPage'
import IndividualCollectionPage from '../components/IndividualCollectionPage'
import ProfilePage from '../components/ProfilePage'
import NftContract from '../contracts/nft.json'
import OctavasContract from '../contracts/Octavas.json'

var Eth = require('web3-eth')
let web3
const usdcAddress = '0xB8Df6Cc3050cC02F967Db1eE48330bA23276A492'
var autoSelectWallet = 'metamask'
var provider:any;
var useraddress:any;

export function Menu({ wallet, walletConnected, setWalletConnected }: any) {
  const [connected, setConnected] = useRecoilState<any>(connectedState)
  const [marketArray, setMarketArray] = useRecoilState<any>(marketState)
  const [occtavasArray, setOctavasArray] = useRecoilState<any>(octavasState)

  async function logintoWallet() {
    await wallet.walletSelect()
    await wallet.walletCheck()
    useraddress = wallet.getState().address
    useraddress = useraddress.toString()

    setConnected(true)
    
  }


  async function findUsersnfts(setaddress:any) {
    let collectibleUpdate = [];
    let tokenIndex = 0;
    var tokenId;
    var complete = false; 
    try {
     while (complete == false) {
      console.log()

        provider = new ethers.providers.Web3Provider(wallet.getState().wallet.provider)
        console.log(provider);
        const contract = new ethers.Contract('0xB8Df6Cc3050cC02F967Db1eE48330bA23276A492', NftContract.abi, provider );
        tokenId =  await contract.tokenOfOwnerByIndex(setaddress, tokenIndex);
        tokenId = tokenId.toNumber();
        console.log("tokenId", tokenId);
        collectibleUpdate[tokenIndex] = [tokenId];
  
        tokenIndex++;
  
     }
    } catch (e) {
      complete = true;
    }
    
    setMarketArray(collectibleUpdate);
    
  }

  async function findUsersOctavas(setaddress:any) {
    let collectibleUpdate = [];
    let tokenIndex = 0;
    var tokenId;
    var seed;
    var complete = false; 
    try {
     while (complete == false) {
     
      var OctavasDetails = {
        ID: "",
        SEED: ""
      }
        provider = new ethers.providers.Web3Provider(wallet.getState().wallet.provider)
        console.log(provider);
        const contract = new ethers.Contract('0xc58c9a631ce193fC3F2Bb190Ab5Ba1BE181c09D1', OctavasContract.abi, provider ); //change contract address
        tokenId =  await contract.tokenOfOwnerByIndex(setaddress, tokenIndex);
        tokenId = tokenId.toNumber();
        seed = await contract.seeds(tokenId)
        
        OctavasDetails.SEED = seed;
        OctavasDetails.ID = tokenId; 
        
        collectibleUpdate[tokenIndex] = [OctavasDetails];
  
        tokenIndex++;
  
     }
    } catch (e) {
      complete = true;
    }
    
    setOctavasArray(collectibleUpdate);
    
  }

  return (
    <Router>
      <div className="Menu1">
        <Header
          login={logintoWallet}
          wallet={wallet}
          walletConnected={walletConnected}
          setWalletConnected={setWalletConnected}
          findUsersnfts={findUsersnfts}
          findUsersOctavas={findUsersOctavas}
        />
        <Routes>
          <Route path="/"  element={<LandingPage/>}/>

          <Route path="/:id" element={<IndividualCollectionPage wallet={wallet}/>}/>
            
         

          <Route path="/learn" element={<LearnPage/>}/>

          <Route path="/profile" element={<ProfilePage
          wallet={wallet}
          />}/>

        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default Menu
