#!/usr/bin/node

/**
 * Section 1
 */
console.log("--------------- Section 1 ---------------");

let loaf = {
    flour: 300,
    water: 210,
    hydration: function() {
        return this.water / this.flour * 100;
    }
};

console.log("Flour:", loaf.flour, "Water:", loaf.water);
console.log("Hydration:", loaf.hydration());

/**
 * Section 2
 */
console.log("--------------- Section 2 ---------------");

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

/**
 * Section 3
 */
console.log("--------------- Section 3 ---------------");

let hobbit = {
    meals: [
        'breakfast', 'second breakfast', 'elevenses',
        'lunch', 'afternoon tea', 'dinner', 
        'supper'
    ]
};

console.log("Hobbit meal 4: ",hobbit.meals[3]);

/**
 * Section 4
 */
console.log("--------------- Section 4 ---------------");

let people = [
    {
        name: 'Jack Daniels',
        jobTitle: 'Distiller'
    },
    {
        name: 'Joe Blo',
        jobTitle: 'Unemployed'
    },
    {
        name: 'Samuel Meyers',
        jobTitle: 'Programmer'
    },
    {
        name: 'Lanie Willis',
        jobTitle: 'Human Resources'
    },
    {
        name: 'Dirk Weibel',
        jobTitle: 'Mentor'
    }
];

for(let person of people) {
    console.log("Name:", person.name, "Job Title:", person.jobTitle);
}

/**
 * Section 5
 */
console.log("--------------- Section 5 ---------------");

for(let i = 1; i < people.length; i++) {
    people[i].boss = people[0].name;
}

for(let person of people) {
    if(!person.boss) {
        console.log(`${person.jobTitle} ${person.name} doesn't report to anybody.`);
    } else {
        console.log(`${person.jobTitle} ${person.name} reports to ${person.boss}`);
    }
}

/**
 * Section 6
 */
console.log("--------------- Section 6 ---------------");

let cipher = {
    a: 2,
    b: 3,
    c: 4,
    d: 5
};

function decode(word) {
    if(ciher[word[0]]) {
        return word[cipher[word[0]]];
    } else {
        return ' ';
    }
}

function decodeWords(words) {
    let list = words.split(' ');
    let decoded = "";
    for(let word of list) {
        decoded += decode(word);
    }
}

