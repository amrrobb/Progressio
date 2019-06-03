function gradient(x,y) {
    a = Math.pow(x,2);
    b = Math.pow(y,2);

    c = Math.sqrt(a+b);
    return c;
}



console.log(gradient(8,6));
