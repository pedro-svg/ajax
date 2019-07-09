(function(){
  'use strict'

console.log('CHALLENGE 1 let`s test if you`re underage \n ')


  function checkAge(value){
    return new Promise((response, request) => {
      if(value>=18){
        response();
      }

      else{
        reject();;
      }
    })
  }


  checkAge(18)
    .then( _ => {
      console.log('no, grown up person...')
    })
    .catch(_ => {
      console.log(`nah, it's just a kid`)
    })

})()