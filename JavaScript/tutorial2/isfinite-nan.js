var a = [1,2,5,7,99,54,23,9,16,9,5,7,20];
var b = "haloo";
var c = "-0.8";
var d = 234;

// returns false if the value is +infinity, -infinity, or NaN, otherwise it returns true
function finite() {
    var aa = isFinite(a);
    var bb = isFinite(b);
    var cc = isFinite(c);
    var dd = isFinite(d)

    console.log(aa);
    console.log(bb);
    console.log(cc);
    console.log(dd);    
    
}

finite();

console.log("============================");

function nan() {
    console.log(isNaN(a));
    console.log(isNaN(b));
    console.log(isNaN(c));
    console.log(isNaN(d));
    
}

nan();