export default function cursorEffect() {
  
  let svgCursor = document.getElementById('svg-cursor');
  let svgWrapper= document.querySelector('.cursor-wrapper');

  document.body.addEventListener("mousemove", function(event) {
    moveCursor(event);
  });

  function moveCursor(e) {
    let x = e.clientX - 15;
    let y = e.clientY - 15;
    svgCursor.setAttribute('style', 'transform: translate3d(' + (x) + 'px, ' + (y) + 'px, 0px)');

    if (e.target.className.indexOf('custom-cursor') > -10) {
      switch (e.target.className) {
        case 'btn':
        case 'btn btn-featured':
          svgWrapper.classList.add('svg-cursor__action')
        break;
        case 'link':
          svgWrapper.classList.add('link')
        break;
        case 'title-done':
          svgWrapper.classList.add('title-done')
        break;
        case 'slide':
          svgWrapper.classList.add('area-item')
        break;
        case 'area-item':
          svgWrapper.classList.add('area-item')
        break;
        default:
          svgWrapper.classList.remove('svg-cursor__action')
          svgWrapper.classList.remove('link')
          svgWrapper.classList.remove('title-done')
          svgWrapper.classList.remove('area-item')
        break;
      }
    } else {
      svgWrapper.classList.remove('svg-cursor__action')
      svgWrapper.classList.remove('link')
      svgWrapper.classList.remove('title-done')
    }
  }
}
