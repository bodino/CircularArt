import { throws } from "assert";
import React from "react";
import Sketch from "react-p5";

export function Particle(p5:any,x:any, y:any, thisPal:any, rColour:any, s:any){
        // @ts-ignore
           this.x = x;
           // @ts-ignore
           this.y = y;
            // @ts-ignore
           this.diameter = p5.random(s / 800, s / 200);
           if (rColour < 0.25) {
               // @ts-ignore
               this.c = p5.floor((this.y / s) * thisPal.length);
               // @ts-ignore
               this.col = p5.color(thisPal[this.c]);
               
           } else if (rColour < 0.5) {
                // @ts-ignore
                this.c = p5.floor((this.x / s) * thisPal.length);
                // @ts-ignore
                this.col = p5.color(thisPal[this.c]);

           } else {
               // @ts-ignore
               // @ts-ignore
               this.col = p5.color(p5.random(thisPal));
           }
           // @ts-ignore
           this.alpha = 100;
           // @ts-ignore
           this.col.setAlpha(this.alpha);
       
            // @ts-ignore
       this.show = function() {
          
           p5.noStroke();
            // @ts-ignore
           p5.fill(this.col);
            // @ts-ignore
           p5.circle(this.x, this.y, this.diameter);
       }
               // @ts-ignore
       this.createNetwork = function(node) {
           
           let nodeObject = {
               // @ts-ignore
               x: this.x,
               // @ts-ignore
               y: this.y,
               // @ts-ignore
               col: this.col
           }
           console.log(nodeObject);
           return nodeObject;
       }
   }
