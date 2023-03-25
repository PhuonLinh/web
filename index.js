alert("Trinh Phuong Linh");
alert("20");

/*
var language='Javascrip';
console.log(language);

//ObjectNumber
Number.isFinite(2 / 0); // false
Number.isFinite(20 / 5); // true
Number.isFinite(0 / 0); // false

Number.isInteger(999999999); // true
Number.isInteger(0.2);       // false
Number.isInteger(Math.PI);   // false

Number.parseFloat('10') // 10
Number.parseFloat('10.00') // 10
Number.parseFloat('238,21') // 238
Number.parseFloat('237.22') // 237.22
Number.parseFloat('34 56 78') // 34
Number.parseFloat(' 37 ') // 37
Number.parseFloat('18 is my age') // 18

Number.parseInt('10') // 10
Number.parseInt('10.00') // 10
Number.parseInt('238,21') // 238
Number.parseInt('237.22') // 237
Number.parseInt('34 56 78') // 34
Number.parseInt(' 37 ') // 37
Number.parseInt('18 is my age') // 18

var numberObject = 1234.56789;

numberObject.toFixed(); // '1235'
numberObject.toFixed(1); // '1234.6'
numberObject.toFixed(6); // '1234.567890'

(11).toString();    // '11'
(18).toString();     // '18'
(17.3).toString();   // '17.3'
*/

$(document).ready(function(){
    var array = [];
    var heightWindow=$(window).height();
    var wwidthWindow=$(window).width();

    for(var i=0;i<40;i++)
    {
        array.push({
            top: Math.floor(Math.random()*heightWindow),
            left: Math.floor(Math.random()*wwidthWindow),
            id: i
        })
    }
    array.forEach(function(value){
        var newEllipse = document.createElementNS('http://www.w3.org/2000/svg','ellipse');
        newEllipse.setAttribute('class','ellipse');
        newEllipse.setAttribute('id','ellipse_'+value.id);
        newEllipse.setAttribute('cx',value.left);
        newEllipse.setAttribute('cy',value.top);
        newEllipse.setAttribute('rx',5);
        newEllipse.setAttribute('ry',5);

        $('#svg').append(newEllipse);
    })
    $(window).mousemove(function(event){
        console.log(event.pageX,event.pageY);
    })
    console.log(array);
})