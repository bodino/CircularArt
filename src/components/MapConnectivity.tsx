import React from 'react'
import { useState, useEffect } from 'react'
import RenderNFT from './RenderNFT'
import { connectivityState, octavasState } from '../state'
import {useRecoilState} from 'recoil'
import RenderProfileOctavas from './RenderProfileOctavas'
import RenderConnectivityProfile from './RenderConnectivityProfile'



export function MapOctavas({isLoading, wallet}:any) {
    const [connectivityArray, setconnectivityArray] = useRecoilState<any>(connectivityState)

  
    return isLoading ? (<h1></h1>) :     
        <> 
        {connectivityArray.map((item:any) =>(

            
            // <RenderNFT key={item} item={item} wallet={wallet}></RenderNFT>
            <RenderConnectivityProfile key={item} item={item} wallet={wallet}/>

        ))}
       </>
};

export default MapOctavas