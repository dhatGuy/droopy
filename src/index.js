import css from "./css/style.scss";
import 'normalize.css';

const burger = document.querySelector('.burger')
const navLinks = document.querySelector('.nav-links')
const links = document.querySelectorAll('.nav-links >li')

burger.addEventListener('click', ()=>{
  if (!burger.classList.contains('open')) {
    navLinks.classList.toggle('open')
    burger.classList.toggle('animate')
  }

  links.forEach((link,index)=>{
    if(!link.style.animation){
      link.style.animation = `fadeIn .3s ease-in-out forwards ${index / 6}s`
    }else{
      link.style.animation = ''
    }
  })
})

document.querySelectorAll('.nav-links > li').forEach(link=>{
  link.addEventListener('click', ()=>{
    Array.from(navLinks.children).forEach(child=>child.classList.remove('active'))
    if(!link.classList.contains("active")){
      link.classList.add('active')
    }
  })
})
