

var current = $(window).scrollTop();
var total = $(window).height() - current;
var ele = $(".picture");
var currPosition = ele.position().left+200;
var trackLength = 300;
console.log("CUR POSITION", ele.position())

current = $(window).scrollTop();
var newPosition = trackLength * (current/total)
ele.css({left:(currPosition+newPosition * -1)+'px'});


$(window).scroll(function (event) {
    current = $(window).scrollTop();
    var newPosition = trackLength * (current/total)
    console.log(current)
    if(current > 445 && current < 8278)
    ele.css({left:(currPosition+newPosition * -1)+'px'});
});