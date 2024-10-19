'use strict'

const fileSizes = {
  dark: 2.57,
  light: 2.55,
  auto: 3.27
}

const table = {
  fileName: document.getElementById('table-file-name'),
  fileSize: document.getElementById('table-file-size'),
  theme: document.getElementById('table-theme')
}

document.getElementById('dialog-trigger').addEventListener('click', () => {
  document.getElementById('dialog-result').innerText = ''
  document.getElementById('dialog').showModal()
})

document.getElementById('dialog').addEventListener('close', (event) => {
  document.getElementById('dialog-result').innerText = `Your answer: ${event.target.returnValue}`
})
