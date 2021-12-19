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

export function UpperBody() {
  return (
    <div className="FlexBox">
        <div className="MarginRight" >
        <span className ="UpperBodyText">
            <b> Generative Art </b>
        </span>
        <br></br>
        <br></br>
        <span className ="UpperBodyText">
           <b> Funding  </b> </span>
        <span  style={{color: "#e07583"}} className ="UpperBodyText"> <b> <i>Public Goods </i> </b> </span>
    </div>
    
    <img className="ImageLogo ImageCss" src={design} />
   
</div>
  )
}

export default UpperBody
