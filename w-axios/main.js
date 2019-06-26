

 axios.get('https://api.github.com/users/pedrosvg')
    .then( response => console.table(response.data) )
    .catch( error => console.warn(error))

 
  // const $button = document.getElementById('btn')
  // $button.addEventListener('click', request, false)





