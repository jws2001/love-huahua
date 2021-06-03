const main = document.getElementsByClassName('main')[0];

function radom(min, max) {
    return Math.floor((max - min) * Math.random() + min);
}

function color() {
    const colorString = `rgb(${radom(0, 255)},${radom(0, 255)},${radom(0, 255)})`
    main.style.color = colorString;
}



//创建爱心
const aixinIcon = [{
    icon: 'icon-aixin',
    color: 'rgb(224, 45, 45)'
}, {
    icon: 'icon-aixin1',
    color: 'rgb(229, 64, 79)'
}, {
    icon: 'icon-aixin2',
    color: 'rgb(236, 135, 192)'
}, {
    icon: 'icon-love-01',
    color: 'rgb(140, 158, 255)'
}]

let clientW = window.innerWidth;
let clientH = window.innerHeight;

window.onresize = function () {
    clientW = window.innerWidth;
    clientH = window.innerHeight;
}
function CreateAixin(left, speedX, speedY, top) {
    this.dom = document.createElement('div');
    this.left = left;
    this.speedX = speedX;
    this.speedY = speedY;
    this.top = top;
}
//移动函数
CreateAixin.prototype.move = function () {
    if (parseInt(this.dom.style.top) > clientH) {
        this.dom.style.top = '0px'
    }

    if (parseInt(this.dom.style.left) > clientW) {
        this.dom.style.left = '0px'
    }
    this.dom.style.top = parseInt(this.dom.style.top) + this.speedY + 'px';
    this.dom.style.left = parseInt(this.dom.style.left) + this.speedX + 'px';
}


function createIcon() {
    const dom = new CreateAixin(`${radom(0, clientW)}px`, radom(2, 10), radom(2, 10), '-20px');
    const info = aixinIcon[radom(0, 4)];
    dom.dom.classList.add(info.icon);
    dom.dom.style.color = info.color;
    dom.dom.classList.add('iconfont');
    dom.dom.classList.add('aixin');
    dom.dom.style.left = dom.left;
    dom.dom.style.top = dom.top;
    return dom;
}
const aixinDom = new Array(52);
for (let i = 0; i < 52; i++) {
    aixinDom[i] = createIcon();
    document.body.appendChild(aixinDom[i].dom)
}
//移动函数



setInterval(() => {
    aixinDom.forEach(item => {
        item.move()
    })

}, 30)

// function move() {
//     aixinDom.forEach(item => {
//         item.move()
//     })
//     requestAnimationFrame(move)
// }

// move()