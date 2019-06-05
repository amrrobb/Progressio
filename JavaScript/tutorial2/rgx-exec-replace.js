var str = "Belajar HTML CSS Javascript Satu Tahun Bersama Niomic";

// reg Exp exec
function regexexec(x) {
    let reg = new RegExp(x, 'i'); //case insensitive
    console.log(reg.exec(str));
    
}

// reg Exp replace
function regexrpl(x,y) {
    var reg = new RegExp(x,'g'); 
    console.log(str.replace(reg, y));
    
}

regexexec("html");
regexexec("hehe");

regexrpl(" ","-")