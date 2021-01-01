const height = window.innerHeight
AOS.init();
let choreographer = new Choreographer({
    animations: [
        // second message
        {range: [height*3.3, height*3.3], selector: '#kor', type: 'scale', style: 'width', from: 250, to: 0, unit: 'px'},
        {range: [height*2.7, height*3.3], selector: '#kor', type: 'scale', style: 'opacity', from: 1, to: 0},
        {range: [height*1.5, height*2.5], selector: '#kor', type: 'scale', style: 'opacity', from: 0, to: 1},
        {range: [height*1.5, height*2.5], selector: '#kor', type: 'scale', style: 'padding-top', from: 200, to: 0, unit: "px"},

        // first message
        {range: [-1, height], selector: '#box', type: 'scale', style: 'opacity', from: 0.5, to: 0},
        {range: [height, height*1.5], selector: '#eng', type: 'scale', style: 'opacity', from: 1, to: 0},
        {range: [height/2, height*2.5], selector: '#eng', type: 'scale', style: 'width', from: 500, to: 0, unit: "px" }
    ]
})
window.addEventListener('scroll', function() {
    choreographer.runAnimationsAt(window.pageYOffset)
})