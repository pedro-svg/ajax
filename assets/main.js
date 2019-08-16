(function () {
  'use strict'

  function callable() {
    function getUser() {
      return new Promise((resolve, reject) => {

        const user = document.querySelector('[type="search"]').value
        const url = ` https://api.github.com/users/${user}/repos`
        const xhr = new XMLHttpRequest()

        xhr.open('GET', url)
        xhr.send(null)

        xhr.onreadystatechange = _ => {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              resolve(JSON.parse(xhr.responseText))
            } else {
              xhr.status === 404 ? reject('user not found') : null
            }
          }
        }

      })
    }
    getUser()
      .then(response => renderList(response))
      .catch(error => handleError(error))

    function handleError(error) {
      const $ul = document.querySelector('.repos-container')
      $ul.innerHTML = ''

      let $li = document.createElement('li')
      $li.appendChild(document.createTextNode(error))
      $ul.appendChild($li)
    }

    function renderList(repos) {
      const $ul = document.querySelector('.repos-container')
      $ul.innerHTML = '';

      repos.map(el => {
        let $li = document.createElement('li')
        let $a = document.createElement('a')
        $a.appendChild(document.createTextNode(el.name))
        $a.setAttribute('href', el.html_url)
        $li.appendChild($a)
        $li.appendChild(document.createTextNode( el.language))
        if (el.description) {
          $li.appendChild(document.createTextNode(el.description))
        }

        $ul.appendChild($li)
      })
    }
  }

  document.querySelector('button').onclick = callable
  document.querySelector('input').onkeypress = (e) => {
    if (e.keyCode == 13) callable()
  }

})()