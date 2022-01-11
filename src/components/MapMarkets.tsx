import React from 'react'
import { useState, useEffect } from 'react'
import RenderNFT from './RenderNFT'
import { marketState } from '../state'
import {useRecoilState} from 'recoil'
import OctavasRender from '../renderArt/OctavasRender'




export function MapMarkets({isLoading, wallet}:any) {
    const [marketArray, setMarketArray] = useRecoilState<any>(marketState)

  
    return isLoading ? (<h1></h1>) :     
        <> 
        {marketArray.map((item:any) =>(

            
            <RenderNFT key={item} item={item} wallet={wallet}></RenderNFT>
          

        ))}
       </>
};

export default MapMarkets