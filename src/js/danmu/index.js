class VideoDanmu {
    constructor (canvas, video, options){
        if( !canvas || !video || !options || !isObject(options) ) {
            return;
        }
        if( !options.danmuData || !isArray(options.danmuData)){
            return;
        }
        this.canvas = canvas;
        this.video = video;
        this.canvasCtx = canvas.getContext('2d');
        this.canvas.width = video.offSetWidth;
        this.canvas.height = video.offSetHeight;
        this.danmuPaused = true;

        Object.assign(this, options, {
            speed: 2,
            goTime: 0,
            color: "#fff"
        })

        this.danmuPool = this.createDanmuPool();

    }

    createDanmuPool(){
        return this.danmuData.map(dm => new Danmu(dm, this));
    }

    render (){
        // this.clearRect();
        this.drawDanmu();
        !this.danmuPaused && requestAnimationFrame(this.render.bind(this));
    }

    drawDanmu (){
        let curTime = this.video.currentTime;
        this.danmuPool.map((danmu) => {
            if(!danmu.stopDrawing && curTime >= danmu.goTime){
                console.log(danmu);
                if(!danmu.isInitialized){
                    danmu.initialize();
                    danmu.isInitialized = true;
                }
                console.log(danmu.X);
                danmu.X = danmu.X - danmu.speed;
                danmu.draw();

                if(danmu.X <= danmu.width * -1){
                    danmu.stopDrawing = true;
                }
            }

        })
    }

    clearRect (){
        this.canvasCtx.clearRect(0, 0, this.canvas.offSetWidth, this.canvas.offSetHeight);
    }
}
