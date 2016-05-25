/// <reference path="references.ts"/>

interface BallDef {
    size: number;
    color: ex.Color;
    x: number;
    y: number;
}

class Ball extends ex.Actor {
        
    private _ballDef: BallDef;
    private _color: ex.Color;
    private _size: number;
    
    constructor(ballDef) {
        super(ballDef.x, ballDef.y, ballDef.size, ballDef.size, ex.Color[ballDef.color]);
        
        this._ballDef = ballDef;
        this._size = ballDef.size;
        this._color = ex.Color[ballDef.color];
        this.dx = 100;
        this.dy = 100;
        
        this.collisionType = ex.CollisionType.Elastic;
        this.on('collision', this._collision);
        this.on('postdraw', this._postdraw);
        this.on('update', this._update);
    }
    
    _collision(collision: ex.CollisionEvent){
        
        let thiscolor;
        let thatcolor;
        let thissize;
        let thatsize;
        let otherball = <Ball>collision.other;
        
        thiscolor = this._color;
        thatcolor = otherball._color;
        thissize = this._size;
        thatsize = otherball._size;
        if (thissize === thatsize && thiscolor === thatcolor){
            return;
        }
        if (thiscolor !== thatcolor){
            if (thissize > thatsize){
                this.changeSize(this._size + 1);
            } else {
                if (thissize === thatsize){
                    //do nothing
                    this.changeSize(this._size + 1)
                } else {
                    if (thissize > 5){
                        this.changeSize(this._size - 2);
                    } else {
                        this.kill();
                    }
                }
            }
            this._color = otherball._color;
        }/* else {
            if (thissize > thatsize){
                if (thissize > 5) {
                    this.changeSize(this._size - 2);
                } else {
                    this.kill();
                }
             
            } else {
                if (thissize === thatsize){
                    //do nothing
                } else {
                    this.changeSize(this._size + 1);
                }
            }
        }*/
    }
    
    _update(update: ex.UpdateEvent){        
        bounceWithinScreen(this, game);
    }
    
    changeSize(size: number){
        if (size > 35){
            let nb = new Ball(ballSpawns[0]);
            game.add(nb);
            size = 15;
        }
        
        if (size < 9){
            this.kill();
        }
        
        this.setWidth(size);
        this.setHeight(size);
        this._size = size;
    }
    
    updateColor(color: ex.Color){
        this.color = color;
    }
    
    draw(ctx, delta){
        ctx.fillStyle = this._color.toString();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this._size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();    
    }
    
    _postdraw(evt: ex.PostDrawEvent){
        
    }
}