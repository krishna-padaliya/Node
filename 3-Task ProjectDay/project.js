let Project = {
    // Q1. Find if number is prime or not.
    prime : function isPrime(num){
            if (num <= 1) return false;
            if (num === 2) return true;
            if (num % 2 === 0) return false;
            for (let i = 3; i <= Math.sqrt(num); i += 2) {
                if (num % i === 0) return false;
            }
            return true;
    },


    // Q2. Find sum of digits using function.
    sum : function(){
        let a = 10
        let b = 20
        let c = 30
        return a + b + c
    },


    // Q3 Find vowels in a string.
    vowels : function findVowels(str) {
        const vowels = 'aeiouAEIOU';
        let vowelCount = 0;
        for (let char of str) {
            if (vowels.includes(char)) {
                vowelCount++;
        }
    }
    return vowelCount;
    }
}

module.exports = Project