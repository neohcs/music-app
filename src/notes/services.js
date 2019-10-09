export function getNotes() {
  return fetchNotes()
}

export function postNote(data) {
  return fetchNotes({ method: 'POST', data })
}

export function patchNote(id, data) {
  return fetchNotes({ method: 'PATCH', id, data })
}

function fetchNotes({ method = 'GET', id = '', data } = {}) {
  return fetch('/notes/' + id, {
    method,
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => res.json())
}
