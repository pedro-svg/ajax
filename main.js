 
const myPromise = _ => {
  return new Promise( (resolve, reject) => { 

    const httpRequest = new XMLHttpRequest() // Instancia para recuperar dados de um servidor
    const url = 'https://api.github.com/users/pedrosvg';
    let user = null;

    httpRequest.open('GET', url)  // Estabelecer a
    httpRequest.send(null)

    
    httpRequest.onreadystatechange = _ => {
      if(httpRequest.readyState === 4 ){
        if(httpRequest.status === 200){
          resolve(JSON.parse(httpRequest.responseText))
        }

        else{
          reject('Something bad happened :(')
        }       
      }
    }
  })
}

  myPromise()
    .then( response => console.log(response))
    .catch( error => console.warn(error))


  const $button = document.getElementById('btn')
  $button.addEventListener('click', request, false)





