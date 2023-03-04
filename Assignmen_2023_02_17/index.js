
const monitor = {
    onOff: false,
};

const games = [
    {
        image: './assets/images/1.jpg',
        name: 'Terraria Version 1.4.3',
        price: 10.99,
    },
    {
        image: './assets/images/2.jpg',
        name: 'Valkyrie Elysium',
        price: 15.25,
    },
    {
        image: './assets/images/3.jpg',
        name: 'Tower of Fantasy',
        price: 13.75,
    },
    {
        image: './assets/images/4.jfif',
        name: 'Hero of the Rails',
        price: 4.99,
    },
    {
        image: './assets/images/5.jpg',
        name: 'Tomb Raider',
        price: 20.99,
    },
]

const tvOn = () => {
    box.style.background = '#b5b5eb';
    screen.innerHTML = '<h1>Welcome!</h1>';
    screen.innerHTML += '<div><ul><li>TV Program</li><li>Back to Welcome screen</li><li>Games to Buy</li><li>Google</li><li>On / Off</li></ul></div>';
    monitor.onOff = true;
}

document.querySelector('.box .content').innerHTML = '';
const box = document.querySelector('.box');
let screen = document.querySelector('.box .content');
box.style.background = 'black';
console.log(`0 console - ${box.style.background}`);

document.querySelector('.eventListenerOnOff').addEventListener('click', function () {

    console.log(`1 console ${box.style.background}`);
    if (!monitor.onOff) {
        tvOn();
    } else {
        box.style.background = 'black';
        screen.innerHTML = '<h1></h1>';
        console.log(`2nd console ${box.style.background}`);
        monitor.onOff = false;
    }
}
);

document.querySelector('.eventListenerTVProg').addEventListener('click', function () {
    if (monitor.onOff) {
        screen.innerHTML = '<iframe width="100%" height="315" src="https://www.youtube.com/embed/y-28CssnqEE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
        console.log(`Welcome ${screen}`);
    }
});

document.querySelector('.eventListenerBack').addEventListener('click', function () {
    if (monitor.onOff) {
        tvOn();
    }
});

document.querySelector('.eventListenerGames').addEventListener('click', function () {
    if (monitor.onOff) {
        screen.innerHTML = `<h3>GAME SHOP</h3>`;
        let a = '<table><tbody>';
        console.log(`1 - ${screen.innerHTML}`);
        games.forEach((game) => {
            a += `
                <tr>
                    <td class="image"><img src="${game.image}" alt="game image"/></td>
                    <td class="name">${game.name}</td>
                    <td class="price">${game.price}<span>$</span></td>
                </tr>
            `;
            console.log(`2 - ${screen.innerHTML}`);
        });
        a += '</tbody></table>';
        screen.innerHTML += a;
        console.log(`3 - ${screen.innerHTML}`);
    }
});

document.querySelector('.eventListenerGoogle').addEventListener('click', function () {
    if (monitor.onOff) {
        screen.innerHTML = '<iframe width="100%" height="315" src="https://google.com/" title="Google" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
    }
});