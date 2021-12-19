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

var Eth = require('web3-eth')
let web3
const usdcAddress = '0x2791bca1f2de4661ed88a30c99a7a9449aa84174'
var autoSelectWallet = 'metamask'

export function LandingPage() {

  return (
      <div className="Menu2">
          <div>
            <UpperBody />

            <MiddleBody />

            <div className="AllCollectionFlexBox">
              <Collection
                NameOfCollection="OptiPunks"
                CollectionImage={OptiPunksLogo}
                CollectionCreationDate="11/18/2021"
                MaxMint="10,000"
                TotalMinted="10,000"
                AmountGeneratedForPublicGoods="50 ETH"
              />
              <Collection
                NameOfCollection="Findeza"
                CollectionImage={testFindeza}
                CollectionCreationDate="11/18/2021"
                MaxMint="10,000"
                TotalMinted="10,000"
                AmountGeneratedForPublicGoods="50 ETH"
              />
              <Collection
                NameOfCollection="OptiPunks"
                CollectionImage={OptiPunksLogo}
                CollectionCreationDate="11/18/2021"
                MaxMint="10,000"
                TotalMinted="10,000"
                AmountGeneratedForPublicGoods="50 ETH"
              />

              </div>
            </div>
            <Footer />
      </div>

  )
}

export default LandingPage
