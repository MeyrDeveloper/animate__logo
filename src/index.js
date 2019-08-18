import anime from 'animejs';


const logoAnimation = function () {
    const elems = document.getElementsByClassName('logos-letter')
    let width = [];
    anime({
        targets: elems,
        scale: [0, 1],
        // translateX: function (e, i) {
        //     if (i == 0) {

        //         width.push(e.offsetWidth)
        //         return 0
        //     } else {
        //         let range = width.reduce((prev, current, i) => {
        //             return prev + current
        //         })
        //         width.push(e.offsetWidth)
        //         return range;
        //     }
        // },

        translateX: [-50, 0],
        delay: function (el, i, l) {
            return i * 100
        }
    })
}

const logoLetter = function() {
    const elems = document.getElementsByClassName('logos-letter');

    function animate(e) {
        console.log(e.currentTarget.nextElementSibling)
        anime({
            targets: e.currentTarget.nextElementSibling,
            scale: [0, 1],
            width: 20
        })
    }

    function hide(e) {
        anime({
            targets: e.target.nextElementSibling,
            scale: [1, 0],
            width: 0
        })
    }
    console.log(elems)
    for(let i = 0; i < elems.length; i++) {
        elems[i].addEventListener('mouseenter',animate)
        elems[i].addEventListener('mouseleave',hide)
    }
}

window.onload = function () {
    logoAnimation()
    logoLetter()
}