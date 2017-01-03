document.addEventListener('click', function(e) {
  if (e.target.id.indexOf('about') !== -1) {
    var about = document.querySelector('.about')
    about.scrollIntoView({
      behavior: 'smooth',
      duration: 'slow',
    })
  }
  if (e.target.id.indexOf('projects') !== -1) {
    var projects = document.querySelector('.projects')
    projects.scrollIntoView({
      behavior: 'smooth'
    })
  }
  if (e.target.id.indexOf('contact') !== -1) {
    var contact = document.querySelector('.contact')
    contact.scrollIntoView({
      behavior: 'smooth'
    })
  }
})
