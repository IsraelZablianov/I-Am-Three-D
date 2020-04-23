import * as PIXI from 'pixi.js'

let app = new PIXI.Application({ width: window.innerWidth, height: window.innerHeight });
document.body.appendChild(app.view);

let img = PIXI.Sprite.from("src/assets/image.jpg");
img.width = window.innerWidth;
img.height = window.innerHeight;
app.stage.addChild(img);

let depthMap = PIXI.Sprite.from("src/assets/image-map.jpg");
depthMap.width = window.innerWidth;
depthMap.height = window.innerHeight;
app.stage.addChild(depthMap);

const overlay = document.getElementsByTagName("img").item(0);
overlay.width = window.innerWidth;
overlay.height = window.innerHeight;

let displacementFilter = new PIXI.filters.DisplacementFilter(depthMap);
app.stage.filters = [displacementFilter];

window.onmousemove = function (e) {
    displacementFilter.scale.x = (window.innerWidth / 2 - e.clientX) / 20;
    displacementFilter.scale.y = (window.innerHeight / 2 - e.clientY) / 20;
};

window.ontouchmove = function (e) {
    let lastTouch = e.touches[0];
    displacementFilter.scale.x = (window.innerWidth / 2 - lastTouch.clientX) / 20;
    displacementFilter.scale.y = (window.innerHeight / 2 - lastTouch.clientY) / 20;
};
