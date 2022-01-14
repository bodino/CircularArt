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

        var AmountTypesArray:any = [AmountTypes.Low, AmountTypes.Medium, AmountTypes.Medium, AmountTypes.Medium, AmountTypes.High ];
        const BackgroundColor = {
          Black: 0,
          Gray: 100,
          White: 200,
          Red:1,
          Blue:2
        };

        var BackgroundTypesArray:any = [BackgroundColor.Black, BackgroundColor.Gray, BackgroundColor.Gray, BackgroundColor.Gray, BackgroundColor.White, BackgroundColor.Red, BackgroundColor.Blue]

        var colorbackground:any;
      var [loading, setloading] = useState(false);

    let setup = (p5:any, canvasParentRef:any) => {

      p5.randomSeed(pushedseed);
      p5.noiseSeed(pushedseed);
      colorbackground = p5.random(BackgroundTypesArray)

      p5.createCanvas(1000, 1000).parent(canvasParentRef);
      if (colorbackground == 1){
          p5.background(255,4,33)
      } else if (colorbackground == 2){
        p5.background(13,53,174)
      }
      else {
          p5.background(colorbackground);
      }

      cols = p5.floor(p5.width/scl);
      rows = p5.floor(p5.height/scl);
      p5.frameRate(30);

      flowfield = new Array(cols*rows);
      maxFrames = (p5.noise(1)*200);
      color3 = p5.random(256);
      color2 = p5.random(256);
      color1 = p5.random(256);
      offset = p5.random(3.14*2);

      type=p5.random(6)
      var amount = p5.random(AmountTypesArray);

      console.log(amount);
      // @ts-ignore
      for (var i = 0; i < amount; i++){
           // @ts-ignore
          particles[i] = new Particle(p5);
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
      var colorchange = p5.random(200)-100;
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
