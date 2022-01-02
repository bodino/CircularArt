import React from 'react'
import { useState, useEffect } from 'react'
import RenderNFT from './RenderNFT'
import { marketState } from '../state'
import {useRecoilState} from 'recoil'



export function MapMarkets({isLoading, wallet}:any) {
    const [marketArray, setMarketArray] = useRecoilState<any>(marketState)

  
    return isLoading ? (<h1></h1>) :     
        <div style={{ height: "calc(100vh - 121px)"}} className="AllProfileCollectionFlexBox">
        {marketArray.map((item:any) =>(

            
            <RenderNFT key={item} item={item} wallet={wallet}></RenderNFT>
        

        ))}
        </div>
};

export default MapMarkets