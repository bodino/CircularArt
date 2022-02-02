import React from 'react'
import { useState, useEffect } from 'react'
import RenderNFT from './RenderNFT'
import { octavasState } from '../state'
import {useRecoilState} from 'recoil'
import RenderProfileOctavas from './RenderProfileOctavas'



export function MapOctavas({isLoading, wallet}:any) {
    const [occtavasArray, setOctavasArray] = useRecoilState<any>(octavasState)

  
    return isLoading ? (<h1></h1>) :     
        <> 
        {occtavasArray.map((item:any) =>(

            
            // <RenderNFT key={item} item={item} wallet={wallet}></RenderNFT>
            <RenderProfileOctavas key={item} item={item} wallet={wallet}/>

        ))}
       </>
};

export default MapOctavas