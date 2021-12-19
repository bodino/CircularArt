import React from 'react'

import { useState, useEffect } from 'react'
import '../App.css'
import { useRecoilState, useRecoilValue } from 'recoil'
import Onboard from 'bnc-onboard'
import Web3 from 'web3'
import { ethers } from 'ethers'
import { Link } from 'react-router-dom'
import design from '../MiddleImage.svg' 

import { connectedState } from '../state'

var Eth = require('web3-eth')
let web3
const usdcAddress = '0x2791bca1f2de4661ed88a30c99a7a9449aa84174'
var autoSelectWallet = 'metamask'


export function MiddleBody() {
    var [allIsClicked, setAllIsClicked] = useState(true);

  return (
    <div className="FlexBox">
        <div className= "buttonColor" style={{backgroundColor: !allIsClicked ? '' : 'rgb(242, 217, 195)', color: '#A6A6A7'   }} onClick={() => {setAllIsClicked(false)}}>
            Past Collections
        </div>
        <div className="DisapearingText">
            $216,000,000 Raised For Public Goods
        </div>
        <div className="buttonColor" style={{backgroundColor: allIsClicked ? '' : 'rgb(242, 217, 195)', color: '#A6A6A7'   }} onClick={() => {setAllIsClicked(true)}}>
            All Collections
        </div>
       
    </div>
  )
}

export default MiddleBody
