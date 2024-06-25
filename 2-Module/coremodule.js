let coremodule = {

  //  Q1. Find factorial of a number use argument and parameter
      factorial : function(num){
        let fact = 1
        for(let i=1 ; i<=num; i++){
          fact = i * fact
        }
        return "Factorial Number:" + fact
      },

      // Q2.Print current date
        currentDate : new Date().getDate,


      // Q3.Print greeting message("Hello World)
      greeting : function(){
         return "HELLO CORE MODULE"
      },


      // Q4. Print sum of 3 numbers.
      sum : function(){
        let a=10
        let b=10
        return "Sum:" + a*b
      },

      // Q5. Print area of a rectangle.
      rectangle : function(l,w){
        return "Area of a rectangle:" + l * w
      },

      // Q6. Print total of quantity * price
      total : function(){
        let quantity = 5
        let price = 50
        return "Total of quantity & price:" + quantity * price
      },

      // Q7. Print eligibility of person to vote.
      vote : function(){
       let age = 22
       if(age >= 18){
        return "Eligibility to vote"
       }
       else{
        return "Not Eligibility to vote"
       }
      }
}

module.exports = coremodule