const arr = [
    [{
        name:'jugal',
        age:22
    },
    {
        name:'Vijya',
        age:22
    }],
    [{
        name:'Bhavana',
        age: 44
    }]
]


const questions = [
    {
        name:'Bhavana',
        age: 44
    },
    {
        name:'Vijya',
        age:22
    }
]

const updatedQuestions = [...arr]
updatedQuestions[0].splice(1,1)
console.log(updatedQuestions)