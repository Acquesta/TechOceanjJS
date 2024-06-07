const hamburguer = document.querySelector('#hamburger')
const infos = document.querySelector('.infos')
console.log(hamburguer);
hamburguer.addEventListener('click', () => {

    infos.classList.toggle('active')


})