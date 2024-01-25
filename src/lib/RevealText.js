const specialChars = [...'!@#$%^&*()_+{}:"<>?qwertyuiopasdfghjklzxcvbnm']
function inOutQuad(n){
    n *= 2;
    if (n < 1) return 0.5 * n * n;
    return - 0.5 * (--n * (n - 2) - 1);
}

function max(n, length) {
    return n >= length - 1 ? length - 1 : n
}

// let stop = false;
// let frameCount = 0;
// let fps, fpsInterval, startTime, now, then, elapsed;

class RevealText {
    constructor(element) {
        this.fpsInterval
        this.startTime
        this.now
        this.then
        this.elapsed

        this.idx = 0
        this.frame = 0
        this.element = element
        this.originalString = element.innerText
        this.innerHTML = ''
        this.isIntersecting = false
        this.createSpans()
    }

    createSpans() {
        for (let index = 0; index < this.originalString.length; index++) {
            this.innerHTML += `<span>${ this.originalString[index] }</span>`
        }

        console.log(this.originalString[2])

        this.element.innerHTML = this.innerHTML
        
        
        const contents = document.createElement('span')
        const pillar = document.createElement('span')
        pillar.innerHTML = this.innerHTML
        contents.innerHTML = this.innerHTML
        pillar.style.opacity = 0
        contents.style.position = 'absolute'
        contents.style.left = 0
        contents.style.top = 0
        contents.style.width = '100%'
        this.spans = [...contents.querySelectorAll('span')]

        this.element.style.position = 'relative'
        this.element.innerHTML = ''

        this.element.appendChild(pillar)
        this.element.appendChild(contents)
    }

    startAnimating(fps = 60) {
        this.fpsInterval = 1000 / fps
        this.then = Date.now()
        this.startTime = this.then
        this.animate()
    }

    animate() {

        this.isIntersecting = true
        if(this.idx !== this.originalString.length && this.isIntersecting) {

            this.now = Date.now();
            this.elapsed = this.now - this.then;

            if(this.elapsed > this.fpsInterval) {
                this.then = this.now - (this.elapsed % this.fpsInterval);
                // this.spans[this.idx].style.transform = `translateX(0)`

                for (let index = 0; index <= 7; index++) {
                    this.spans[max(this.idx + index, this.originalString.length)].style.opacity = 1
                    this.spans[max(this.idx + index, this.originalString.length)].innerText = specialChars[Math.floor(Math.random() * specialChars.length)]
                }
                
                if(this.frame > (this.idx * 10 + 20) && this.frame !== 0) {
                    this.spans[this.idx].innerText = this.originalString[this.idx]
                    this.idx++
                }
                
                this.frame += this.idx + 1
            }

            requestAnimationFrame(this.animate.bind(this))

        } else {
            console.log('done')
        }
    }

    reset() {
        this.isIntersecting = false
        this.idx = 0
        this.frame = 0
        this.spans.forEach(span => {
            span.style.position = 'relative'
            span.style.opacity = 0
            span.innerText = specialChars[Math.floor(Math.random() * specialChars.length)]
            span.style.transform = `translateX(-10px)`
        })
    }
}

export { RevealText }