class Chain{

    Constrctor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stifness:0.04,
            length:10,
        }
       this.chain=constraint.create(options) ;
       World.add(world,this.chain);
    }


display(){
    var pointA=this.chain.bodyA.position;
    var pointB=this.chain.bodyB.position;
    stroke(4)
    line(pointA.x,pointA.y,pointB.x,pointB.y)
}
}