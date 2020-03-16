

var attrs = 'name age city gender';
var values = [
    ['Joe', 22, 'New York City', 'male'],
    ['Jane', 85, 'Las Vegas', 'female'],
    ['Jack', 55, 'London', 'male']
];

attrs = attrs.split(' ');

console.log("Homework 1:");

var result = [];

for(let i=0; i<values.length; i++){
    var row = {};
    for(let j=0; j<attrs.length; j++){
        row[attrs[j]] = values[i][j];
        
    }
    result.push(row);
    
}

console.log(result)



console.log("");

console.log("Homework 2");

function draw(n, position){
    if(position == "left"){
        for(let i=1; i<=n; i++){
            let star = "*";
            console.log(star.repeat(i));
        }
    }

    if(position == "center"){
        for(let i=0; i<n; i++){
            let star = "*".repeat(2*i+1);
            let spacek = " ".repeat(n-i-1);
            console.log(spacek+star);
        }
    }

    if(position == "right"){
        for(let i=1; i<=n; i++){
            let star = "*".repeat(i);
            let spacek = " ".repeat(n-i);
            console.log(spacek+star);
        }
    }
}
var level = 5;
console.log(level + " left:");
draw(level, "left");
console.log(level + " center:");
draw(level, "center");
console.log(level + " right:");
draw(level, "right");