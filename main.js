 
const httpRequest = new XMLHttpRequest() // Instancia para recuperar dados de um servidor
  const url = 'https://api.github.com/users/pedrosvg';
  let user = null;



  function request(){
    httpRequest.open('GET', url)  // Estabelecer a
    httpRequest.send(null)
    
    httpRequest.onreadystatechange = _ => {
    if(httpRequest.readyState === 4 ){
       user = JSON.parse(httpRequest.responseText)
        console.log(user.name)
    }
  }
}


  const $button = document.getElementById('btn')

  $button.addEventListener('click', request, false)




