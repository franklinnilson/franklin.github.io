export default function konamiEffect() {
    
  if (window.addEventListener) {
    let keys = [],
        konami = "38,38,40,40,37,39,37,39,66,65";

    const k1 = document.querySelector('.k1')
    const k2 = document.querySelector('.k2')
    const k3 = document.querySelector('.k3')
    const k4 = document.querySelector('.k4')
    const k5 = document.querySelector('.k5')
    const k6 = document.querySelector('.k6')
    const k7 = document.querySelector('.k7')
    const k8 = document.querySelector('.k8');
    const k9 = document.querySelector('.k9');
    const k10 = document.querySelector('.k10');
    const klist = document.querySelectorAll('.konami span');

    window.addEventListener("keydown", function(e){
      keys.push(e.keyCode);

      if(keys[0] == 38){ k1.classList.add('active') }
      if(keys[1] == 38){ k2.classList.add('active') }
      if(keys[2] == 40){ k3.classList.add('active') }
      if(keys[3] == 40){ k4.classList.add('active') }
      if(keys[4] == 37){ k5.classList.add('active') }
      if(keys[5] == 39){ k6.classList.add('active') }
      if(keys[6] == 37){ k7.classList.add('active') }
      if(keys[7] == 39){ k8.classList.add('active') }
      if(keys[8] == 66){ k9.classList.add('active') }
      if(keys[9] == 65){ k10.classList.add('active') }

      if (keys.toString().indexOf(konami) >= 0) {
        klist.forEach((item =>{
          item.setAttribute('style', 'display: none');
        }))
        k10.setAttribute('style', 'display : block');
        k10.innerHTML = '<a class="btn" href="./doc/cv-franklin.pdf" target="_blank">Download CV</a>';
        k10.classList.remove('k10');

        keys = [];
      };
    }, true);
  };
}
