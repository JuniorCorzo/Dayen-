async function getData (url) {
  return fetch(`${window.HOST_API}${url}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('jwt')}`
    }
  }).then((response) => response.json())
    .catch((err) => {
      console.error(err)
    })
}

export function pushData (url, data, method = 'POST') {
  return fetch(`${window.HOST_API}${url}`, {
    method: method.toUpperCase(),
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('jwt')}`
    },
    body: JSON.stringify(data)
  })
    .then((response) => {
      return response.json()
    })
    .catch((err) => {
      throw Error(err)
    })
}

export function deleteData (url) {
  return fetch(`${window.HOST_API}${url}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('jwt')}`
    }
  })
    .then((response) => {
      if (!response.ok) throw Error(response.statusText)
    })
    .catch((err) => {
      throw Error(err)
    })
}
export default getData
