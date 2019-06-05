function evaluate() {
    var num = [1,2,5,7,99,54,23,9,16,9,5,7,20];
    var total = 0;

    for (let i = 0; i < num.length; i++) {
        total += num[i];
        
    }

    // eval dapat menghasilkan operasi dari regular ekspresi
    console.log(eval("total"));
    
}
evaluate();