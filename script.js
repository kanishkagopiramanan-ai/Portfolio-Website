// Animate skill bars when visible
const skillFills = document.querySelectorAll('.skill-fill');

window.addEventListener('scroll', () => {
  const skillsSection = document.querySelector('#skills');
  if(window.scrollY + window.innerHeight > skillsSection.offsetTop + 100){
    skillFills.forEach(skill => {
      skill.style.width = skill.getAttribute('data-fill');
    });
  }
});