
function bar(x,y) {
    // var y = "---";
    
    if (x % 2 == 1) {
        for (let i = 1; i <=x ; i++) {
            
            if (i < Math.ceil(x/2)) {
                console.log(y.repeat(i*2-1));
                            
            } else {
                console.log(y.repeat((x-i)*2+1));
                
            }
            
        }
    } else false;
    
    
}

bar(7,"haha...")