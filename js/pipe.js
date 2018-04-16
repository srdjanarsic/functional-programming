// pipe function implementation (arrow function)
// let pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

// pipe function (without arrow function - for evaluation)
let pipe = function (...fns) {

    return function (x) {

        // x is a initial VALUE
        console.log(x);

        return fns.reduce(function (v, f) {

            // v is a accumulated value
            // f is a current element form fns array
            console.log(`v: ${v}; f: ${f}`);

            // return function result to be next accumulated value 
            return f(v);
        }, x);
    };

}


const lower = s => s.toLowerCase();
const swap = s => s.split(' ').reverse().join(' ');
const bold = s => '**' + s + '**'

const newFunc = pipe(lower, swap, bold);
const result = newFunc('Srdjan Arsic'); // emit!

console.log(result);
