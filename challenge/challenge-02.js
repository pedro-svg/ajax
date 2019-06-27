

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
          resolve(JSON.parse(xhr.responseText))
        }
        else{
          xhr.status === 404 ? reject('user not found') : null
        }
      }

      else if(xhr.readyState === 3){
        handleLoading()
      }
      }
      
    })
  }
  getUser()
  .then( response => renderList(response))
  .catch( error => handleError(error))

  function handleLoading(){
    const $ul = document.getElementById('list-container') 
    let $li = document.createElement('li')
    $li.appendChild(document.createTextNode('loading...'))
    $ul.appendChild($li)
  }

  function handleError(error){
    const $ul = document.getElementById('list-container') 
    let $li = document.createElement('li')
    $li.appendChild(document.createTextNode(error))
    $ul.appendChild($li)
  }

  function renderList(repos){
    
    const $ul = document.getElementById('list-container') 

    repos.map( (el, index) => {
        let $li = document.createElement('li')
        $li.appendChild(document.createTextNode(el.name))
        $ul.appendChild($li)
    } )
  }
}

document.getElementById('btn').onclick = callable

})()