import React from 'react'
import { useState, useEffect } from 'react'
import RenderNFT from './RenderNFT'
import { marketState } from '../state'
import {useRecoilState} from 'recoil'
import RenderProfileOctavas from './RenderProfileOctavas'



export function MapOctavas({isLoading, wallet}:any) {
    const [marketArray, setMarketArray] = useRecoilState<any>(marketState)

  
    return isLoading ? (<h1></h1>) :     
        <> 
        {marketArray.map((item:any) =>(

            
            // <RenderNFT key={item} item={item} wallet={wallet}></RenderNFT>
            <RenderProfileOctavas key={item} item={item} wallet={wallet}/>

        ))}
       </>
};

export default MapOctavas