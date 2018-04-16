// compose function implementation (first way)
const compose2 = (...fns) =>
    x => fns.reduceRight((v, f) => f(v), x);

// compose function implementation (second way) (reduceRight == reverse + reduce)
const compose3 = (...fns) =>
    fns.reverse().reduce((prevFn, nextFn) =>
        v => nextFn(prevFn(v)),
        v => v
    );


// compose function (without arrow function - first way)
let compose = function () {

    var fns = Array.from(arguments);

    return function (x) {

        // x is a initial VALUE
        console.log(x);

        return fns.reduceRight(function (v, f) {

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

const newFunc = compose(bold, swap, lower);
const result = newFunc('Srdjan Arsic'); // emit!

console.log(result);

const newFuncArrow = compose2(bold, swap, lower);
const newFuncArrow2 = compose3(bold, swap, lower);

res2 = newFuncArrow("1111 2222")
res3 = newFuncArrow2("3333 4444");
console.log(res2) 
console.log(res3) 







let compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x)


const lower = s => s.toLowerCase();
const swap = s => s.split(' ').reverse().join(' ');
const bold = s => '**' + s + '**'

const newFunc = compose(bold, swap, lower);
const result = newFunc('Srdjan Arsic'); // emit!