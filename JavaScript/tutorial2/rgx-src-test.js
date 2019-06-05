var str = "Belajar HTML CSS Javascript Satu Tahun Bersama Niomic";

// reg Exp test
function regextest(x) {
    let reg = new RegExp(x, 'i'); // flag i menandakan case insensitive
    console.log(reg.test(str));
    
}

// reg Exp search
function regexsrc(x) {
    let reg = new RegExp(x); 
    console.log(str.search(reg));
    
}

regexsrc("HTML");
regexsrc("css");

regextest("Belajar");
regextest("html");
regextest("HTML")