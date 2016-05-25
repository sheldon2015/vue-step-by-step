class A {
    constructor(x, y) {
        this.a = x;
        this.b = y;
    }
    toString() {

        console.log(this.a + '-----' + this.b)


    }
}

var m = new A(1, 2);
console.log(m.a);
console.log(m.b);
console.log(m.toString());
