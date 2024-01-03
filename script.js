document.addEventListener('DOMContentLoaded', function () {
    var scrollLinks = document.querySelectorAll('.nav-menu-Fi5 a[href^="#"]');

    scrollLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault(); 
        var targetId = this.getAttribute('href').substring(1);
        var targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  });

  
  let currentImageIndex = 0;

  function showImage(index) {
    
    const thumbnails = document.querySelectorAll('.auto-group-qfhx-fXj img');
    thumbnails.forEach((thumbnail) => {
      thumbnail.classList.remove('active');
    });
  

    thumbnails[index].classList.add('active');
  

    const mainPicture = document.querySelector('.main-picture-rRs');
    mainPicture.style.backgroundImage = `url('./Detikhealt/assets/slider-1-1-bg-${index}.png')`;
  
  
    currentImageIndex = index;
  }
  
  function changeImage(index) {

    showImage(index);
  }
  
  function prevImage() {

    currentImageIndex = (currentImageIndex - 1 + 3) % 3;
    showImage(currentImageIndex);
  }
  
  function nextImage() {

    currentImageIndex = (currentImageIndex + 1) % 3;
    showImage(currentImageIndex);
  }
  
  showImage(currentImageIndex);


  
  