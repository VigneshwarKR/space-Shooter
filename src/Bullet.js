import Player from "./Player";

export class Bullet{
    dead = false;
    speed = 10;

    constructor(xPos,yPos){
        this.xPos = xPos
        this.yPos = yPos
    }

    update = () => {
        this.yPos -= this.speed;

        if(this.yPos < 0 || this.yPos > 680){
            this.dead = true
        }
        if (Player.score >=100){
            this.speed = 15;
        }
    }

    draw = (ctx) => {
        ctx.beginPath();
        ctx.arc(this.xPos,this.yPos,5,0,2*Math.PI);
        ctx.fillStyle = "#FF1E1E";
        ctx.fill();
        ctx.lineWİdth = 1;
        ctx.stroke()
    }
}

export default Bullet;