// 弹幕数据
const danmuData = [
    {
        content: "终于等到你！！！！",
        speed: 2,
        goTime: 1,
        // color: "red"
    },
    {
        content: "小狼小狼小狼",
        speed: 3,
        goTime: 4,
        color: "orange"
    },
    {
        content: "小狼小狼小狼",
        speed: 3,
        goTime: 4,
        color: "orange"
    },
    {
        content: "等我毕业一定买小狼！！！！",
        speed: 4,
        goTime: 6,
        color: "white"
    }
]

;((doc) => {
    const _canvas = doc.getElementById("J_danmuCanvas");
    const _video = doc.getElementById("J_danmuVideo");
    const _fontSize = doc.querySelector(".fontsize-input");

    // 实例化插件
    const init = () => {
        window.videoDanmu = new VideoDanmu(
            _canvas, 
            _video, 
            // 解构为对象
            {
                danmuData,
            });
        bindEvent();

    };

    function bindEvent(){
        handleFontSizeInput();
        handleVideo();
    }
    function handleFontSizeInput(){
        _fontSize.addEventListener("keyup", function (){
            let reg = /\D/;
            this.value = this.value.replace(reg, "");
        }, false)
    }
    function handleVideo(){
        _video.addEventListener("play", function (){
            videoDanmu.danmuPaused = false;
            videoDanmu.render();
        }, false);
        _video.addEventListener("pause", function (){
            videoDanmu.danmuPaused = true;
        }, false);
    }

    init();
})(document);