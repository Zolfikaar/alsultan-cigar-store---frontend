const themeToggler = document.querySelector('.theme-toggler'),
      body = document.querySelector('body');

// toggle theme
themeToggler.addEventListener('click', () => {
  
  body.classList.toggle('dark-theme');
  
  // if the body has the dark-theme class, save it to local storage
    if(body.classList.contains('dark-theme')){
      localStorage.setItem('theme', 'dark-theme');
    } else { 
      // if the body doesn't have the dark-theme class, remove the value if it exist in local storage
      localStorage.removeItem('theme', 'light-theme');
    }
  
  // change active theme icon
  themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
  themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');

});

// check if there is a theme saved in local storage, then apply it
document.addEventListener('DOMContentLoaded', (e) => {
  if(localStorage.getItem('theme', 'dark-theme')){
        body.classList.add('dark-theme');
        themeToggler.querySelector('span:nth-child(1)').classList.add('active');
        themeToggler.querySelector('span:nth-child(2)').classList.remove('active');
      }
});
