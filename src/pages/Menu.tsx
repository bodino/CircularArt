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
import { connectedState, marketState } from '../state'
import MiddleBody from '../components/MiddleBody'
import Collection from '../components/Collection'

import OptiPunksLogo from '../OptiPunks.png'
import testFindeza from '../testFindeza.png'
import Footer from '../components/Footer'
import LandingPage from './LandingPage'
import LearnPage from './LearnPage'
import IndividualCollectionPage from '../components/IndividualCollectionPage'


var Eth = require('web3-eth')
let web3
const usdcAddress = '0x2791bca1f2de4661ed88a30c99a7a9449aa84174'
var autoSelectWallet = 'metamask'

export function Menu({ wallet, walletConnected, setWalletConnected }: any) {
  const [connected, setConnected] = useRecoilState<any>(connectedState)
  const [marketArray, setMarketArray] = useRecoilState<any>(marketState)

  async function logintoWallet() {
    await wallet.walletSelect()
    await wallet.walletCheck()
    setConnected(true)
  }

  return (
    <Router>
      <div className="Menu1">
        <Header
          login={logintoWallet}
          wallet={wallet}
          walletConnected={walletConnected}
          setWalletConnected={setWalletConnected}
        />
        <Routes>
          <Route path="/"  element={<LandingPage/>}/>

          <Route path="/:id" element={<IndividualCollectionPage/>}/>
            
         

          <Route path="/learn" element={<LearnPage/>}/>

          <Route path="/collections"/>

        </Routes>
      </div>
    </Router>
  )
}

export default Menu
