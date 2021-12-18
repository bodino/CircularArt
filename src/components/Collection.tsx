import React from 'react'

import { useState, useEffect } from 'react'

import { useRecoilState, useRecoilValue } from 'recoil'
import Onboard from 'bnc-onboard'
import Web3 from 'web3'
import { ethers } from 'ethers'
import { Link } from 'react-router-dom'
import design from '../MiddleImage.svg' 

import { connectedState } from '../state'



export function Collection({NameOfCollection,CollectionImage,CollectionCreationDate, MaxMint, TotalMinted, AmountGeneratedForPublicGoods}:any) {
    var [allIsClicked, setAllIsClicked] = useState(true);

  return (
    <div className = "FlexIndividualCollection">
        <img style={{width: "340px"}}src={CollectionImage}></img>   
        <div> <b> <i>{NameOfCollection}  </i></b>  </div>
        <div> {CollectionCreationDate} </div>
        <div>{TotalMinted} / {MaxMint} Minted</div>

        <div> {AmountGeneratedForPublicGoods} </div>


       
    </div>
  )
}

export default Collection
