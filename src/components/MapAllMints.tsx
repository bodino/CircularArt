import React from 'react'
import { useState, useEffect } from 'react'
import RenderNFT from './RenderNFT'
import BasicRenderNFT from './BasicRenderNFT'
import { marketState } from '../state'
import {useRecoilState} from 'recoil'



export function MapAllMints({isLoading, wallet, info}:any) {
    const [marketArray, setMarketArray] = useRecoilState<any>(marketState)
    let x = new Array ();
    var [v, setV] = useState(5);
    var [z, setZ] = useState(0);
    var [array, setarray] = useState(x);
    
    useEffect(() => {
        for (var f = z; v > f; f++) {
            console.log(f);
            x[f] = f
        }
        setZ(v)
        setarray(x);
    }, []);


    function addtwenty(){
        setV(v+=5);
        for (z; v > z; z++) {
            x[z] = z
        }
        setarray(x);
       
        setZ(v)   
    }

    function minustwenty(){
        if (v > 5){
        setV((v+=-5));
        setZ((z+=-10));
        console.log(v)
        console.log(z)

        for (z; v > z; z++) {
            x[z] = z
            console.log("hi")
        }
        setarray(x);

        setZ(v) 
        }
    }
   
  
    return isLoading ? (<h1></h1>) :  
    <>   
        <div style={{ overflowY: "visible", maxWidth: "1380px", width:"initial"}} className="AllProfileCollectionFlexBox">
        {array.map((item:any) =>(
           

            
            <BasicRenderNFT key={item} item={item} info={info}></BasicRenderNFT>
        

        ))}
       
        </div>
         <div style={{justifyContent:"space-around",textAlign:"center", marginTop:'0px', borderBottom:'0px', paddingBottom:'20px'}} className="FlexBox">
             <div style={{width:'100px'}}className="buttonColor" onClick={minustwenty}>
                Previous 
             </div>
             <br/>
             <div style={{width:'100px'}}className="buttonColor" onClick={addtwenty}>
                Next 
             </div>
        </div>
        </>
};

export default MapAllMints