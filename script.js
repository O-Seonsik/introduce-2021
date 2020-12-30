const height = window.innerHeight
AOS.init();
let choreographer = new Choreographer({
    animations: [
        {
            range: [window.innerHeight*2.5, height*3.2],
            selector: '#kor',
            type: 'scale',
            style: 'opacity',
            from: 1,
            to: 0
        },
        {
            range: [-1, height],
            selector: '#box',
            type: 'scale',
            style: 'opacity',
            from: 0.5,
            to: 0
        },{
            range: [height, height*1.5],
            selector: '#eng',
            type: 'scale',
            style: 'opacity',
            from: 1,
            to: 0
        },{
            range: [height/2, height*1.5],
            selector: '#eng',
            type: 'scale',
            style: 'width',
            from: 500,
            to: 250,
            unit: "px"
        },{
            range: [height*1.5, height*2.5],
            selector: '#kor',
            type: 'scale',
            style: 'opacity',
            from: 0,
            to: 1
        },{
            range: [height*1.5, height*2.5],
            selector: '#kor',
            type: 'scale',
            style: 'padding-top',
            from: 200,
            to: 0,
            unit: "px"
        },{
            range: [-1, height],
            selector: '#mail',
            type: 'scale',
            style: 'transform',
            from: 90,
            to: 30,
            unit: "deg"
        },{
            range: [height*3.2, height*3.2],
            selector: '#kor',
            type: 'scale',
            style: 'opacity',
            from: 0,
            to: 0
        }
    ]
})


window.addEventListener('scroll', function() {
    choreographer.runAnimationsAt(window.pageYOffset)
})