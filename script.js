document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll('.tab-titles p');
    const contents = document.querySelectorAll('.tab-contents');
    
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        tabs.forEach(tab => tab.classList.remove('active-link'));
        contents.forEach(content => content.classList.remove('active-tab'));
        
        tab.classList.add('active-link');
        contents[index].classList.add('active-tab');
      });
    });
  
    const navLinks = document.querySelector('nav ul');
    const burger = document.querySelector('.burger');
  
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  
    // Intersection Observer for animations
    const revealElements = document.querySelectorAll('.reveal-left, .reveal-right, .fadeIn');
    
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
  
    revealElements.forEach(element => {
      observer.observe(element);
    });
  });
  