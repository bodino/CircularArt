import { throws } from "assert";
import React from "react";
import Sketch from "react-p5";

export function Particle(p5:any):any{
    

    // @ts-ignore
    this.pos = p5.createVector(p5.random(p5.width),p5.random(p5.height));
    // @ts-ignore
    this.vel = p5.constructor.Vector.random2D();
    // @ts-ignore
    this.acc = p5.createVector(0,0);
    // @ts-ignore
    this.maxspeed=3;
    // @ts-ignore
    
    // @ts-ignore
    
    // @ts-ignore

    // @ts-ignore
    this.update = function() {
        this.vel.add(this.acc);
        this.vel.limit(this.maxspeed);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

        // @ts-ignore
    this.applyForce = function(force) {
        this.acc.add(force);
    }
    // @ts-ignore
    this.follow = function(vectors, scl, cols) {
        
        var x = p5.floor(this.pos.x /scl);
        
        var y = p5.floor(this.pos.y /scl);
        
        var index = x + y *cols;
        var force = vectors[index];
        this.applyForce(force);

    }

         // @ts-ignore
    this.show = function(color1,color2,color3) {
        // @ts-ignore
         p5.stroke((color1),(color2),color3,10);
        p5.strokeWeight(4);
        // @ts-ignore
        p5.point(this.pos.x, this.pos.y);
       
    }
// @ts-ignore
    this.edges = function() {
        if (this.pos.x > p5.width) this.pos.x=0;
        if (this.pos.x < 0) this.pos.x= p5.width;
        if (this.pos.y > p5.height) this.pos.y=0;
        if (this.pos.y < 0) this.pos.y= p5.height;
        
    }
}