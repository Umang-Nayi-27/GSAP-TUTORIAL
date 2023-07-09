function updatePercentage() {
    var circleElement = document.querySelector('.circle');
    var percentageElement = document.querySelector('.percentage');
    var currentWidth = parseFloat(circleElement.style.width) || 0;
    var percentage = (currentWidth / 500) * 100;
  
    percentageElement.innerHTML = Math.round(percentage) + '%';
  }
  
  gsap.to('.circle', {
    width: 500,
    duration: 3,
    onUpdate: updatePercentage
  });
  