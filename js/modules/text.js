export default function textEffect(words, idClass, id = 'text') {
    let visible = true
    let con = document.getElementById(idClass)
    let letterCount = 1
    let x = 1
    let waiting = false
    let target = document.getElementById(id)
    
    window.setInterval(function() {

      if (letterCount === 0 && waiting === false) {
        waiting = true
        target.innerHTML = words[0].substring(0, letterCount)
        window.setTimeout(() => {     
          let usedWord = words.shift()
          words.push(usedWord)
          x = 1
          letterCount += x
          waiting = false
        }, 100)
      } else 
        if (letterCount === words[0].length + 1 && waiting === false) {
          waiting = true
          window.setTimeout(() => {
            x = -1
            letterCount = x +2
            waiting = false
          }, 1000)
      } else if (waiting === false) {
        target.innerHTML = words[0].substring(0, letterCount)
        letterCount += x
      }
    }, 100)
}
