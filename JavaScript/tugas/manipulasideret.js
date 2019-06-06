function deret(x) {
    var rev = "";
    for (let i = 1; i <= x; i++) {
        if ((i%3 === 0) & (i%5 === 0)){
            rev = rev + "NIOMIC" + " "; 
        } 
        else if (i%3 === 0) {
            rev = rev + "NIO" + " "; 
        }
        else if (i%5 === 0) {
            rev = rev + "MIC" + " "; 
        } 
        else {
            rev = rev + i + " "; 
        }
        
    }
    console.log(rev);
    
    
}

deret(31);