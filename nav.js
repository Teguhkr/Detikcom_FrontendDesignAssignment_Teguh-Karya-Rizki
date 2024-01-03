function toggleHoverEffect(element) {
    const menuElements = document.querySelectorAll('.nav-menu-MeM div');
  
    menuElements.forEach(function (menuElement) {
      menuElement.classList.remove('hover', 'active');
    });
  
    element.classList.add('hover', 'active');
  }
  