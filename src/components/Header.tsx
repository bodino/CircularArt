import React from 'react'

import { useState, useEffect } from 'react'
import '../App.css'
import { useRecoilState, useRecoilValue } from 'recoil'
import Onboard from 'bnc-onboard'
import Web3 from 'web3'
import { ethers } from 'ethers'
import logo from '../CircularArtLogo.png'
import { Link } from 'react-router-dom'

import { connectedState, userAddress } from '../state'

var Eth = require('web3-eth')
let web3
const usdcAddress = '0x2791bca1f2de4661ed88a30c99a7a9449aa84174'
var autoSelectWallet = 'metamask'

export function Header({
  login,
  wallet,
  walletConnected,
  setWalletConnected,
  findUsersnfts
}: any) {
  const [connected, setConnected] = useRecoilState<any>(connectedState)
  const [address, setAddress] = useRecoilState<any>(userAddress)
  const [reRun, setreRun] = useState(true)
  var [profileClicked, setProfileClicked] = useState(true)
  var [learnclicked, setLearnClicked] = useState(false)


  function LearnButtonClick() {
    setLearnClicked(true)
    setProfileClicked(false)
  }

  function ProfileButtonClick() {
    setLearnClicked(false)
    setProfileClicked(true)
  }

  function MenuButtonClick() {
    setLearnClicked(false)
    setProfileClicked(false)
  }

  const clickStyle = {
    color:'rgb(247, 247, 247)',
    backgroundColor: 'rgb(18, 18, 26)',
    borderRadius: '5px',
    paddingTop: '8px',
    paddingBottom: '8px'

  }
  useEffect(() => {
  
    if (connected){
      updateOnNewConnect();
    }
    
    setTimeout(setsetreRun, 2000);
  },[reRun] );

    function setsetreRun(){
      setreRun(!reRun)
    }
  function updateOnNewConnect(){
    var newAddress = wallet.getState().address
    if (newAddress != address){
      setAddress(newAddress)
      findUsersnfts(newAddress);
    }
  }
  function test() {
    var address = wallet.getState().address
    setAddress(address);

    console.log(address)
    if (address > 2) {
      findUsersnfts(address);
      setConnected(true);
      console.log(wallet.getState())
    }
  }
  useEffect(() => {
    setTimeout(test, 500)
  },[wallet.getState().address])

  return (
    <div className="Header">
      <div className="AppName">
        <Link to="/">
          <div onClick={MenuButtonClick}>
            <img className="ImageLogo RealLogo" src={logo} />
          </div>
        </Link>
      </div>

      <div className="MenuOptionsFlexBox">
        <div className="MenuOptionsFlexBoxInside">
          <Link to="/profile">
            <div onClick={ProfileButtonClick} className="MenuOptions" style={profileClicked ? clickStyle :{}}>Profile</div>
          </Link>
          <Link to="/learn">
            <div onClick={LearnButtonClick} className="MenuOptions" style={learnclicked ? clickStyle :{}}>Learn</div>
          </Link>
        </div>

        <button className="buttonColor" onClick={login}>
          {' '}
          {!connected === false ? 'Connected' : 'Connect'}
        </button>
      </div>
    </div>
  )
}

export default Header
