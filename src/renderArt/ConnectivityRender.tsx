import { listenerCount } from 'process'
import React, { useEffect, useState } from 'react'
import Sketch from 'react-p5'
import { Particle } from './particleConnectivity'
import { RecoilState } from 'recoil'
import banner from '../art/anotherBanner.png'
import { url } from 'inspector'

import "p5/lib/addons/p5.scribble";










export function ConnectivityRender({pushedseed}:any) {
    var [loading, setloading] = useState(false);

    let renderAnimation = ( ) => {
        setloading(false);
      }
      useEffect(() => {
        setTimeout(renderAnimation, 50)
  
       }, []);
      
       let canvas, s:any, f:any, thisPal:any, particle:any = [],
     
    alphaIncrease, rColour:any, rDistance:any, node:any = [];
   var numberOfParticles:any;
   var rVisible:any;
   var rScribble:any;
  
    let setup = (p5:any, canvasParentRef:any) => {
        
    let palettes = [
        ["#03174a", "#21346e", "#143c77", "#335c9a", "#90b3d1", "#6488bc", "#8cbadb", "#5f80b6", "#63a4da", "#66a8da", "#5d9bd4", "#5190d3", "#3f7fc9", "#a0bbd8", "#a5c0db"],
        ["white", "#afb3bf", "#29211e", "#bba99b", "#cebdb5", "#ac9a90", "#ada2a0", "#bfc7da", "#bfc5d1", "#9b989f", "#a8a7ac", "#a7b0bf", "#a5aebf", "#979dad", "#b8bcc8", "#bfbcc3"],
        ["#b3b0a9", "#7fa0b1", "#7496a2", "#5a9694", "#6ba2a9", "#5fafc8", "#3185a7", "#277aa6", "#2b7bac", "#286da6", "#255698", "#85a8d0", "#8db3da", "#80b0e0", "#76a9de", "#6d9fda", "#f2f0e3", "#e2ded5"],
        ["#4a413a", "#755337", "#524032", "#919b78", "#d9c5aa", "#d5c2a4", "#d7c88f", "#f0e24d", "#9b9259", "#c7c078", "#a0947c", "#c1b26f", "#ceb596", "#686726", "#716b13", "#565127", "#89823e", "#aad2ec", "#a0cdea", "#93c5e6", "#84bee3", "#c0d5e6"],
        ["#23313e", "#492e10", "#aa9791", "#a08375", "#bb9582", "#916246", "#a36d47", "#bd8860", "#c58a62", "#c8916a", "#c89f83", "#a74e2e", "#ae5a2e", "#cf7946", "#89b7ce", "#7aadc8", "#6aa2bd", "#619ab7", "#5b94b2", "#4e86a7", "#467ea1", "#4981a4", "#76acc6"],
        ["#466a8c", "#7490a8", "#6d88a5", "#63829f", "#507496", "#496f93", "#4d7195", "#7c7a63", "#868573", "#d2b9a3", "#ab7b55", "#7d665e", "#ad9a8b", "#968774", "#756b5f", "#7e4e3a", "#6f685e", "#74615a", "#786c5e", "#61523d", "#9b897d", "#040404", "#41494b", "#847464", "#b6a394"],
        ["#191516", "#261d1e", "#814b33", "#af6d4b", "#2b2122", "#413131", "#60413e", "#352929", "#7b534b", "#df9475", "#c37960", "#b6503a", "#77473b", "#824b36", "#957578", "#c3806d", "#dcbbb4", "#cfbabf", "#cbbbc5", "#b9adb9", "#afa4b4", "#a39cac", "#8c7f90", "#d7bfbf"],
        ["#433937", "#665a5a", "#6b6c70", "#7d6a66", "#ffc141", "#d4843f", "#dfb47f", "#646464", "#f8eddb", "#f1ede1", "#deeced", "#d7eaf0", "#cbe5f2", "#c5e2f0"],
        ["#749ab1", "#141213", "#987d68", "#3d3b3e", "#1e1f23", "#333134", "#57524f", "#5a5859", "#4d6071", "#68828f", "#99b0b8", "#9ab1b9", "#b4c3c8", "#b5c7cb", "#aebdc2", "#a6b5ba", "#b4bec0", "#b4bec0", "#9db7c4", "#83a6ba", "#b8c6c9"],
        ["#a8afc1", "#b5bbc7", "#adb4c6", "#7a8599", "#afaeaa", "#b6b3a4", "#18d9fa", "#c1b9ae", "#d39974", "#955539", "#607e24", "#5f7e20", "#868487", "#e2d9d2"],
        ["#d0cfbb", "#606f44", "#cecfd1", "#5c453f", "#382818", "#ed5482", "#bb2f49", "#ced2db", "#80672f", "#656541", "#eab9aa", "#fffdf1"],
        ["#02466d", "#120e0f", "#08354c", "#0c273a", "#005679", "#00557d", "#e56001", "#961c07", "#353a64", "#bac4cd", "#b96a6d", "#cd6971", "#024a70", "#94c5e6", "#1a6c9b", "#809495", "#120e0f", "#c3d2d9"],
        ["#f8f9fa", "#e9ecef", "#dee2e6", "#ced4da", "#6c757d", "#495057", "#343a40", "#212529", "#adb5bd"],
        ["#590d22", "#800f2f", "#a4133c", "#c9184a", "#ff4d6d", "#ff758f", "#ff8fa3", "#ffb3c1", "#ffccd5", "#fff0f3"], ["#565264", "#706677", "#a6808c", "#ccb7ae", "#d6cfcb"],
        ["#c1d6f1", "#c69b70", "#cfcbcc", "#eaae0f", "#4c6432", "#d56e9d", "#a63f6c", "#c8404c", "#c4c0b5", "#a0052d", "#d77206", "#5a3d7f", "#70435a", "#4c6547", "#d7c2ad", "#d3c2b0"]
    ];
    // p5.randomSeed(115); // insert hash here
    // p5.noiseSeed(115); // insert hash here
    rColour = p5.random();
    rDistance = p5.random([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

    var rDistributionX = p5.random([0, 1]); // id if should be p5
    var rDistributionY = p5.random([0, 1]);
    rVisible = p5.random([0, 1]);
    rScribble = 1 //random([0, 1]);
    var s = 2000;
    var f = s / 30;
    numberOfParticles = p5.floor(p5.random(200, 800));
    thisPal = p5.random(palettes);
 
    canvas =  p5.createCanvas(2000, 2000).parent(canvasParentRef);
   
  

    p5.push();
    p5.strokeWeight(s / 5000);
    p5.stroke(50);
    p5.background(p5.color(thisPal[thisPal.length - 1]));
    var c1 = p5.color(thisPal[0]);
    var c2 = p5.color('black');
 
    setGradient(p5, f / 2, f / 2, s - f, s - f, c1, c2);
    p5.pop();

    for (let i = 0; i < numberOfParticles; i++) {
                  // @ts-ignore
                  var x = distributionX(p5,rDistributionX, i, s, f);
                  var y = distributionY(p5,rDistributionY, i, s, f);
                   // @ts-ignore
        particle[i] = new Particle(p5,x,y,thisPal,rColour, s);
    }
}

let draw = (p5:any) => {
    // @ts-ignore
  
    for (let i = particle.length - 1; i >= 0; i--) {
        
        if (rVisible > 0.5) particle[i].show(p5);
        var food = particle[i].createNetwork();
        node.push(food);
        particle.splice(i, i + 1);
    }
    drawConnections(p5, node, s, rDistance);
    p5.noLoop();
    node.splice(node.length, node.length - 1);

}


const setGradient = function (p5:any,x:any, y:any, w:any, h:any, c1:any, c2:any) {
    p5.noFill();

    for (let i = y; i <= y + h; i++) {
        p5.push();
        let inter = p5.map(i, y, y + h, 0, 1);
        let c = p5.lerpColor(c1, c2, inter);
        p5.stroke(c);
        p5.line(x, i, x + w, i);
        p5.pop();
    }
}

const drawConnections = function (p5:any, node:any, s:any, rDistance:any) {
    s =2000;
    let count = 0;
    var nodesSkipped = p5.floor(p5.random(40));
      let numberOfLines = numberOfParticles / nodesSkipped;

  
    console.log("numberOfLines")
    console.log(numberOfLines)
    for (let thisNode = node.length - 1; thisNode >= 0; thisNode--) {
        for (let otherNode = node.length - 1; otherNode >= 0; otherNode -= nodesSkipped) {
            let otherNodeCol = node[otherNode].col;
            
            let distToOtherNode = p5.dist(node[thisNode].x, node[thisNode].y, node[otherNode].x, node[otherNode].y);
            // console.log(distance(distToOtherNode, s, rDistance));
            // console.log(distance(distToOtherNode, s, rDistance));
            console.log("distance(count)")
            console.log(distToOtherNode)
            if (distance(distToOtherNode, s, rDistance)) {
                p5.push();
                p5.strokeWeight(4 * numberOfLines / distToOtherNode);
                otherNodeCol.setAlpha(2 * numberOfLines * s / distToOtherNode);
                p5.stroke(otherNodeCol);
                p5.translate(node[thisNode].x, node[thisNode].y);
               
                if (rScribble === 0) {
                    p5.line(0, 0, node[otherNode].x - node[thisNode].x, node[otherNode].y - node[thisNode].y)
                } else {
                    // scribble.bowing = floor(random(100));
                    scribbleLine(0, 0, node[otherNode].x - node[thisNode].x, node[otherNode].y - node[thisNode].y, p5)
                }
               
                p5.pop();   
            }
          
       
        }
  

        console.log(count);
        node.splice(thisNode, 1);
    }
}

const distance = function (x:any, s:any, rDistance:any) {
    s=2000;
    console.log(rDistance);
    
    switch (rDistance) {
        case 0:
            if (x > s / 2.5) return true;
            break;
        case 1:
            if (x > s / 3) return true;
            break;
        case 2:
            if (x > s / 4) return true;
            break;
        case 3:
            if (x < s / 5) return true;
            break;
        case 4:
            if (x < s / 8) return true;
            break;
        case 5:
            if (x < s / 15 || x > s / 5) return true;
            break;
        case 6:
            if (x < s / 10 || x > s / 2) return true;
            break;
        case 7:
            if (x < s / 30 || x > s / 10) return true;
            break;
        case 8:
            if (x < s / 5 || x > s / 4) return true;
            break;
        case 9:
            // @ts-ignore
            if (!x < s / 10 || !x > s / 3) return true;
            break;
        case 10:
            if (x < s / 10 || x > s / 3) return true;
            break;
        case 11:
            if (x < s / 30 || x > s / 2) return true;
            break;
        case 12:
            if (x < s / 25 || x > s / 4) return true;

    }
    
}

let distributionX = (p5:any,rDistributionX:any,i:any, s:any, f:any) => {
    if (rDistributionX === 0) {
        return  s * p5.noise(i);
    } else if (rDistributionX === 1) {
        return p5.random(2 * f, s - 2 * f);
    }
}
let distributionY = (p5:any,rDistributionY:any,i:any, s:any, f:any) => {
    if (rDistributionY === 0) {
        return s * p5.noise(i - 1);
    } else if (rDistributionY === 1) {
        return p5.random(2 * f, s - 2 * f);
    }
}


let scribbleLine = ( x1:any, y1:any, x2:any, y2:any, p5:any ) => {
    var lenSq = (x1-x2)*(x1-x2) + (y1-y2)*(y1-y2);
    var offset = 5;

    if ( 5*5 > lenSq ) {
      offset = Math.sqrt( lenSq )/10;
    }

    var halfOffset = offset/2;
    var divergePoint = 0.2 + p5.random()*0.2;
    var midDispX = 1*5*(y2-y1)/200;
    var midDispY = 1*5*(x1-x2)/200;
    midDispX = getOffset( -midDispX, midDispX, p5 );
    midDispY = getOffset( -midDispY, midDispY, p5 );

    p5.noFill();

    p5.beginShape();
    p5.vertex(     x1 + getOffset( -offset, offset, p5 ), y1 + getOffset( -offset, offset, p5 ) );
    p5.curveVertex(x1 + getOffset( -offset, offset, p5 ), y1 + getOffset( -offset, offset, p5 ) );
    p5.curveVertex(midDispX+x1+(x2 -x1)*divergePoint + getOffset( -offset, offset, p5 ), midDispY+y1 + (y2-y1)*divergePoint + getOffset( -offset, offset, p5 ) );
    p5.curveVertex(midDispX+x1+2*(x2-x1)*divergePoint + getOffset( -offset, offset, p5 ), midDispY+y1+ 2*(y2-y1)*divergePoint + getOffset( -offset,offset, p5 ) );
    p5.curveVertex(x2 + getOffset( -offset, offset, p5 ), y2 + getOffset( -offset, offset, p5 ) );
    p5.vertex(     x2 + getOffset( -offset, offset, p5 ), y2 + getOffset( -offset, offset, p5 ) );
    p5.endShape();

    p5.beginShape();
    p5.vertex(     x1 + getOffset( -halfOffset, halfOffset, p5 ), y1 + getOffset( -halfOffset, halfOffset, p5 ) );
    p5.curveVertex(x1 + getOffset( -halfOffset, halfOffset, p5 ), y1 + getOffset( -halfOffset, halfOffset, p5 ) );
    p5.curveVertex(midDispX+x1+(x2 -x1)*divergePoint + getOffset( -halfOffset, halfOffset, p5 ), midDispY+y1 + (y2-y1)*divergePoint + getOffset( -halfOffset, halfOffset,p5 ) );
    p5.curveVertex(midDispX+x1+2*(x2-x1)*divergePoint + getOffset( -halfOffset, halfOffset, p5 ), midDispY+y1+ 2*(y2-y1)*divergePoint + getOffset( -halfOffset, halfOffset,p5 ) );
    p5.curveVertex(x2 + getOffset( -halfOffset, halfOffset, p5 ), y2 + getOffset( -halfOffset, halfOffset, p5 ) );
    p5.vertex(     x2 + getOffset( -halfOffset, halfOffset, p5 ), y2 + getOffset( -halfOffset, halfOffset, p5 ) );
    p5.endShape();
  }

  let getOffset = ( minVal:any, maxVal:any,p5:any ) => {
    return 1*(p5.random()*(maxVal-minVal)+minVal);
  }
 
  return (
    <div>
      
        {!loading ? <Sketch setup={setup} draw={draw} className="ArtLarge" />  : ""}
    </div>
    
  )
}

export default ConnectivityRender
