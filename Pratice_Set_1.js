// 1
let firstName = 'Samarth';
let result = firstName + 21;

console.log(result);

// 2
// let firstName = 'Harry';
// console.log(typeof(firstName));

// 3
const obj = {
    Number : 345,
    String : "Samarth" ,
    isPrincipal : false
}
// obj is a refrence of objects Number ,String and isPrincipal
// obj = 45;
// obj = {}

// 4
obj['friend'] = "True";

// 5
const dict = {
    appreciate : "recognize the full worth" ,
    emotive : "arousing or able to arouse intense feeling." ,
    cohesion : "the action or fact of forming a united whole." ,
    weary : "feeling or showing extreme tiredness, especially as a result of excessive exertion." ,
    hell : "a place regarded in various religions as a spiritual realm of evil and suffering, often traditionally depicted as a place of perpetual fire beneath the earth where the wicked are punished after death."
}

// Both syntax works properly
console.log(dict.emotive);
console.log(dict['emotive']);
