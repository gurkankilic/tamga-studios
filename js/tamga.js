const ticker = new PIXI.Ticker();
const canvas = document.getElementById("tamga");
const app = new PIXI.Application({
    resizeTo: window,
    view: canvas,
    width: window.innerWidth,
    height: window.innerHeight,
});

const container = new PIXI.Container();

app.stage.addChild(container);
const texture = PIXI.Texture.from('images/mountains.jpg');
const bg = new PIXI.Sprite(texture);
container.addChild(bg);
container.x = 0;
container.y = 0;

// backgroud color
app.renderer.backgroundColor = 0xE9ECF2;

// logos
const logoTexture = PIXI.Texture.from("images/logo.png");
const logoSprite = new PIXI.Sprite(logoTexture);

app.stage.addChild(logoSprite);

// resize
function resizeWindow() {
    logoSprite.x = app.renderer.width / 2;
    logoSprite.y = app.renderer.height / 2;
    logoSprite.anchor.x = 0.5;
    logoSprite.anchor.y = 0.5;
};
resizeWindow();

window.onresize = resizeWindow;