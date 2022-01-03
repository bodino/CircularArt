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

import OptiPunksLogo from '../art/OptiPunks.png'
import testFindeza from '../art/testFindeza.png'
import octavian from '../art/octavas.png'
import agustus from '../art/agustus.png'
import soon from '../art/Unannounced.png'
import Footer from '../components/Footer'

var Eth = require('web3-eth')
let web3
const usdcAddress = '0x2791bca1f2de4661ed88a30c99a7a9449aa84174'
var autoSelectWallet = 'metamask'

export function LandingPage() {
  const [allCollections, setallCollections] = useState(true)

  return (
    <div className="Menu2">
      <div>
        <UpperBody />

        <MiddleBody 
        setallCollections={setallCollections}
        />
        {allCollections ? (
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
              NameOfCollection="Octavas"
              CollectionImage={octavian}
              CollectionCreationDate="12/30/2021"
              MaxMint="981"
              TotalMinted="0"
              AmountGeneratedForPublicGoods=""
            />

            <Collection
              NameOfCollection="Unannounced"
              CollectionImage={soon}
              CollectionCreationDate="Soon"
              MaxMint="!@#$%"
              TotalMinted="0"
              AmountGeneratedForPublicGoods=""
            />
          </div>
        ) : (
          <div className="AllCollectionFlexBox">
            <Collection
              NameOfCollection="OptiPunks"
              CollectionImage={OptiPunksLogo}
              CollectionCreationDate="11/18/2021"
              MaxMint="10,000"
              TotalMinted="10,000"
              AmountGeneratedForPublicGoods="50 ETH"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default LandingPage
