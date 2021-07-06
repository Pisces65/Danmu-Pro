function isObject(value){
    const type = Object.prototype.toString.call(value);
    return type === '[object Object]';
}

function isArray(value){
    return Array.isArray(value);
}

function getTextWidth(content, fontSize){
    const _span = document.createElement("span");
    _span.innerText = content;
    _span.style.fontSzie = fontSize + "px";
    _span.style.position = "absolute";
    document.body.appendChild(_span);
    let width = _span.offsetWidth;
    document.body.removeChild(_span);
    return width;
}

function getTextPosition(canvas, fontSize, danmu){
    let X = canvas.offsetWidth;
    let Y = canvas.offsetHeight * Math.random();

    Y < fontSize && (Y = fontSize);
    Y > canvas.offsetHeight - fontSize && (Y = canvas.offsetHeight - fontSize);

    danmu.X = X;
    danmu.Y = Y;
}