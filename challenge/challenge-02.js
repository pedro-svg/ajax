(function(){
  'use strict'
 
function callable(){
  function getUser(){ 
    return new Promise( (resolve,reject) => {

      const user = document.querySelector('[type="text"]').value
      const url = ` https://api.github.com/users/${user}/repos`
      const xhr = new XMLHttpRequest()

      xhr.open('GET', url)
      xhr.send(null)

      xhr.onreadystatechange = _ => {
      if( xhr.readyState === 4){
        if(xhr.status === 200){
          resolve(JSON.parse(xhr.responseText)[0])
        }
        else{
          reject('somethin bad happened')
        }
      }
      }
      
    })
  }
  getUser()
  .then( response => render(response))
  .catch( error => console.log(error))

  // function render(json){
    
  //   console.log(json[0].name)
  // }

  // render()
}

document.getElementById('btn').onclick = callable

})()