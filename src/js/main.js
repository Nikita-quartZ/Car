document.getElementById('menu-btn').addEventListener('click', () => {
  document.getElementById('menu-btn').classList.toggle('btn-active')
  document.getElementById('menu-content').classList.toggle('d-block')
  document.getElementById('menu-blur').classList.toggle('d-block')
})

document.getElementById('btn-dropdown-list').addEventListener('click', () => {
  document.getElementById('dropdown-list').classList.toggle('d-block')
})


document.getElementById('application-btn').addEventListener('click', () => {
  document.getElementById('modal').classList.add('d-block')
})

document.getElementById('help-btn').addEventListener('click', () => {
  document.getElementById('modal').classList.add('d-block')
})

document.getElementById('close-modal-btn').addEventListener('click', () => {
  document.getElementById('modal').classList.remove('d-block')
})

document.getElementById('modal').addEventListener('click', (e) => {
  e.stopPropagation();
  if (e.target.classList.contains('blur')) document.getElementById('modal').classList.remove('d-block')
})


