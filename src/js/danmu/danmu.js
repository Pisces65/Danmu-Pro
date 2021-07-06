class Danmu {
    constructor (danmu, fCtx){
        this.content = danmu.content;
        this.goTime = danmu.goTime;
        this.danmu = danmu;
        this.ctx = fCtx;
        this.stopDrawing =false;
    }

    initialize (){
        this.color = this.danmu.color || this.ctx.color;
        this.goTime = this.danmu.goTime || this.ctx.goTime;
        this.speed = this.danmu.speed || this.ctx.speed;
        this.fontSize = 5;
        this.width = getTextWidth(this.content, this.fontSize);
        getTextPosition(this.ctx.canvas, this.fontSize, this);
    }

    draw (){
        this.ctx.canvasCtx.font =  "5px";
        this.ctx.canvasCtx.fillStyle = "red";
        this.ctx.canvasCtx.fillText(this.content, this.X, this.Y);
    }
}