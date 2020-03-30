const { performance } = require('perf_hooks');


//according to n = 0(n)
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }

    return total;
}

// Always 3 operations = 0(1) 
function addUpTwo(n) {
    return n * (n + 1) / 2;
}

// 0(n)
function countUpAndDown(n) {
    console.log('going up');
    for (let i = 0; i < n; i++) {
        console.log(i);
    }

    console.log('at the top!.. going down..');
    for (let j = n - 1; j >= 0; j--) {
        console.log(j);
    }

    console.log('back down');
}


// nested loop 0(n^2)
function printAllPairs(n) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}


// performance
let t1 = performance.now();
printAllPairs(120);
let t2 = performance.now();

console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`);



