import { listenerCount } from "process";
import React, { useEffect, useState } from "react";
import Sketch from "react-p5";
import { RecoilState } from "recoil";
import { Particle } from "./particle";


export function Learn(){

    var scl = 12;
    var rows:any, cols:any;

    var fr:any;
    var yoff =0;
    var zoff =0;
    var particles:any = [];
    var colors2:any = [];
    var colors1:any = [];
    
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
        Red:1
      };

      var BackgroundTypesArray:any = [BackgroundColor.Black, BackgroundColor.Gray, BackgroundColor.Gray, BackgroundColor.Gray, BackgroundColor.White, BackgroundColor.Red]

      

      var colorbackground:any;
    var [loading, setloading] = useState(true);



  let setup = (p5:any, canvasParentRef:any) => {
   
    p5.randomSeed(0xa123441a1);
    p5.noiseSeed(0x1234);
    colorbackground = p5.random(BackgroundTypesArray)

    p5.createCanvas(900, 900).parent(canvasParentRef);
    if (colorbackground == 1){
        p5.background(255,4,33)
    } else {
        p5.background(colorbackground);
    }
    
    cols = p5.floor(p5.width/scl);
    rows = p5.floor(p5.height/scl);
    p5.frameRate(60);

    flowfield = new Array(cols*rows);
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
    }
    

  };
  let draw = (p5:any) => {
   
  
    frames++;
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
            if (UpdateFlow){
                flowfield[index] = v;
            }
            
            
            if (p5.floor(p5.mouseX/scl) == x && p5.floor(p5.mouseY/scl) == y && p5.mouseX != 0) {
                console.log(p5.mouseX)
                var newindex;
                var v2;
                for (var i =0; i < 10; i++) {
                    newindex =((x-i)+y * cols);
                v2 = p5.constructor.Vector.fromAngle(0);
                v2.setMag(100);
                flowfield[newindex] = v2; 
                
                newindex =((x-i)+(y-i) * cols);
                v2 = p5.constructor.Vector.fromAngle(3.1415/4);
                v2.setMag(100);
                flowfield[newindex] = v2; 

                newindex =((x+i)+y * cols);
                v2 = p5.constructor.Vector.fromAngle(3.1415);
                v2.setMag(100);
                flowfield[newindex] = v2; 

                newindex =((x+i)+(y+i) * cols);
                v2 = p5.constructor.Vector.fromAngle((5*3.1415)/4);
                v2.setMag(100);
                flowfield[newindex] = v2; 

                newindex =(x+(y-i) * cols);
                v2 = p5.constructor.Vector.fromAngle(3.1415/2);
                v2.setMag(100);
                flowfield[newindex] = v2; 

                newindex =((x+i)+(y-i) * cols);
                v2 = p5.constructor.Vector.fromAngle((3*3.1415)/4);
                v2.setMag(100);
                flowfield[newindex] = v2; 

                newindex =(x+(y+i) * cols);
                v2 = p5.constructor.Vector.fromAngle(3*(3.1415/2));
                v2.setMag(100);
                flowfield[newindex] = v2; 

                newindex =((x-i)+(y+i) * cols);
                v2 = p5.constructor.Vector.fromAngle((7*3.1415)/4);
                v2.setMag(100);
                flowfield[newindex] = v2; 

                }
                

                UpdateFlow = false;
            }
         
            xoff+=0.08;
           
        //   p5.stroke(0, 50);
        //    p5.push();
        //    p5.translate(x*scl, y*scl);
        //    p5.rotate(v.heading());
        //    p5.line(0, 0, scl, 0);

        //    p5.pop();

        }
       yoff+=0.08;
        zoff+= 0.00001;
     

     
    }
    for (var i = 0; i < particles.length; i++){
    var colorchange = p5.random(200)-100;
    colors1[i] +=colorchange;
    colors2[i] += colorchange;

    particles[i].follow(flowfield, scl, cols);
    particles[i].update();
    particles[i].show( colors1[i], colors2[i],color3);
    particles[i].edges()
   }

   if (frames > 1000){
       p5.noLoop()
   }
 
  };

  let renderAnimation = ( ) => {
    setloading(false);
  }
  useEffect(() => {
    setTimeout(renderAnimation, 30)
    

   }, []);
    return (  

        <div className="FlexBox">

            Why Circular Art?
            {!loading ? <Sketch setup={setup} draw={draw} className="Art" />  : ""}
            
        </div>
    );
}
 
export default Learn;