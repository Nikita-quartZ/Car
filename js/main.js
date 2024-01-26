document.getElementById('menu-btn').addEventListener('click', () => {
  document.getElementById('menu-btn').classList.toggle('btn-active')
  document.getElementById('menu-content').classList.toggle('d-block')
  document.getElementById('menu-blur').classList.toggle('d-block')
})