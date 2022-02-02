import { listenerCount } from 'process'
import React, { useEffect, useState } from 'react'
import Sketch from 'react-p5'
import { RecoilState } from 'recoil'
import { Particle } from './particle'
import banner from '../art/anotherBanner.png'
import { url } from 'inspector'

export function OctavasRenderSmall({pushedseed}:any) {

    let renderAnimation = ( ) => {
        setloading(false);
      }
      useEffect(() => {
        setTimeout(renderAnimation, 10)
  
       }, []);
       var scl = 12;
       var rows:any, cols:any;
        var maxFrames:any;
       var fr:any;
       var yoff =0;
       var zoff =0;
       var particles:any = [];
       var colors2:any = [];
       var colors1:any = [];
       var colors3:any = [];
 
       var flowfield:any;
       var color1:any;
       var color2:any;
       var color3:any;
 
       var offset:any;
       var frames:any =0;
 
       var type:any = 0;
 
       const AmountTypes = {
           Low: 1000,
           Medium: 4000,
           High: 8000,
         };
 
         var AmountTypesArray = [AmountTypes.Low, AmountTypes.Medium, AmountTypes.Medium, AmountTypes.Medium, AmountTypes.High ];
   const BackgroundColor = {
     Black: 0,
     Gray: 5,
     White: 6,
     Red:1,
     Blue:2,
     Orange:3,
     Green:4,
   };
 
   var BackgroundTypesArray = [BackgroundColor.Green, BackgroundColor.Green, BackgroundColor.Orange, BackgroundColor.Orange,  BackgroundColor.Black,BackgroundColor.Black,BackgroundColor.Black, BackgroundColor.Gray, BackgroundColor.Gray, BackgroundColor.Gray, BackgroundColor.White, BackgroundColor.White, BackgroundColor.Red, BackgroundColor.Blue]
 
         var colorbackground:any;
       var [loading, setloading] = useState(false);
 
     let setup = (p5:any, canvasParentRef:any) => {
      pushedseed = (pushedseed.substring(2,66))
      var asciseed = '';
      for (var i=0; 8 > i; i++){
        asciseed += pushedseed.charCodeAt(i);
      }

       p5.randomSeed(asciseed);
       p5.noiseSeed(asciseed);
     
       colorbackground = p5.random(BackgroundTypesArray)
 
       p5.createCanvas(1000, 1000).parent(canvasParentRef);
       if (colorbackground == 1){
         p5.background(255,4,33)
     } else if (colorbackground == 2){
         p5.background(13,53,174)
     } else if (colorbackground ==3){
         p5.background(212,98,56)
     } else if (colorbackground ==4){
         p5.background(26,128,78)
     }
     else if (colorbackground ==0) {
         p5.background(0);
     } else if (colorbackground ==5) {
         p5.background(100);
     } else if (colorbackground ==6) {
         p5.background(200);
     }
 
       cols = p5.floor(p5.width/scl);
       rows = p5.floor(p5.height/scl);
       p5.frameRate(30);
 
       flowfield = new Array(cols*rows);
       maxFrames = Math.round((p5.noise(1)*200));
       color3 = Math.round(p5.random(256));
       color2 = Math.round(p5.random(256));
       color1 = Math.round(p5.random(256));
       offset = p5.random(3.14*2);
 
       type=p5.random(6)
       var stroke = p5.random(100)
       var nostroke;
       if (stroke >= 98){
         nostroke = true;
       }
       var amount = p5.random(AmountTypesArray);
 
       var sizedeterminer = p5.random(100);
       var max;
 
       if (sizedeterminer <= 90){
         max = 20;
     
     } else if (sizedeterminer <= 95){
         max = 10;
     } else if (sizedeterminer <= 100){
         max = 30;
     }
 
       console.log(amount);
       // @ts-ignore
       for (var i = 0; i < amount; i++){
           var heighty = p5.random(max);
           var widthy = p5.random(max);
           // @ts-ignore
           particles[i] = new Particle(p5, heighty, widthy, nostroke);
           colors1[i]= color1;
           colors2[i]= color2;
           colors3[i]= color3;
       }
 
     };
     let draw = (p5:any) => {
      
       frames++;
       console.log(frames);
       var yoff =0;
 
       var UpdateFlow = true
       for (var y=0; y < rows; y++) {
 
           var  xoff = 0;
           p5.noiseDetail(4);
           for (var x= 0; x < cols; x++){
               var index =(x+y * cols);
 
               var anlge = ((p5.noise(xoff, yoff, zoff) *(type* 3.1415))+offset);
               var v = p5.constructor.Vector.fromAngle(anlge)
               v.setMag(0.5);
             
                   flowfield[index] = v;
               
 
              
               
 
               xoff+=0.08;
 
             // p5.stroke(0, 50);
             //  p5.push();
             //  p5.translate(x*scl, y*scl);
             //  p5.rotate(v.heading());
             //  p5.line(0, 0, scl, 0);
 
             //  p5.pop();
 
           }
          yoff+=0.08;
           zoff+= 0.00001;
 
       }
       for (var i = 0; i < particles.length; i++){
       var colorchange = p5.random(100)-50;
       colors1[i] +=colorchange;
       colors2[i] += colorchange;
       colors3[i] +=colorchange;
 
       particles[i].follow(flowfield, scl, cols);
       particles[i].update();
       particles[i].edges()
       particles[i].show( colors1[i], colors2[i],color3);
      
      }
 
      if (frames > maxFrames){
          p5.noLoop()
      }
 
     };

 
  let setAllFalse = () => {
    setfirstOpen(false)
    setsecondOpen(false)
    setthirdOpen(false)
    setforthOpen(false)
    setfithOpen(false)
  }
  var [firstOpen, setfirstOpen] = useState(true)
  var [secondOpen, setsecondOpen] = useState(false)
  var [thirdOpen, setthirdOpen] = useState(false)
  var [forthOpen, setforthOpen] = useState(false)
  var [fithOpen, setfithOpen] = useState(false)

  return (
    <div>
      
        {!loading ? <Sketch setup={setup} draw={draw} className="ArtSmall" />  : ""}
      
    </div>
  )
}

export default OctavasRenderSmall
