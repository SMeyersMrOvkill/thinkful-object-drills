#!/usr/bin/node

let loaf = {
    flour: 300,
    water: 210,
    hydration: function() {
        return this.water / this.flour * 100;
    }
};

console.log("Flour:", loaf.flour, "Water:", loaf.water);
console.log("Hydration:", loaf.hydration());

let weird = {
    foo: 42,
    bar: "Hello, world!",
    fum: ['fe', 'fi', 'fo'],
    quux: { name: "Quark" },
    spam: function() {
        console.log("Email");
    }
};

for(let key in weird) {
    console.log("Key:", key, "Value:", weird[key]);
}