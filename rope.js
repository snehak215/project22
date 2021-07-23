class rope{
	constructor(body1, body2, pointA, pointB, pointC, pointD)
	{
		this.pointA=pointA;
		this.pointB=pointB;
		this.pointC=pointC;
		this.pointD=pointD;
			var options={
			bodyA:body1,
			pointA:{x:this.pointC,y:this.pointD},
			bodyB:body2,
			pointB:{x:this.pointA,y:this.pointB},
			length: 200
		}

		this.rope=Constraint.create(options)

		World.add(world,this.rope);
	}
	display() {
	     push();
			var point1=this.rope.bodyA.position;
			var point2=this.rope.bodyB.position;

			strokeWeight(2);
			stroke(0);

			line(point1.x+this.pointC, point1.y+this.pointD, point2.x+this.pointA,point2.y+this.pointB)
		pop();
  }
}
