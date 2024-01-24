const specialChars = [...'!@#$%^&*()_+{}:"<>?qwertyuiopasdfghjklzxcvbnm']
function inOutQuad(n){
    n *= 2;
    if (n < 1) return 0.5 * n * n;
    return - 0.5 * (--n * (n - 2) - 1);
}

class RevealText {
    constructor(element) {
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
        this.spans = [...this.element.querySelectorAll('span')]
    }

    animate() {
        this.isIntersecting = true
        if(this.idx !== this.originalString.length && this.isIntersecting) {

            this.spans[this.idx].style.opacity = 1
            this.spans[this.idx].style.transform = `translateX(0)`

            this.spans[this.idx].innerText = specialChars[Math.floor(Math.random() * specialChars.length)]
            
            if(this.frame > (this.idx * 10 + 20) && this.frame !== 0) {
                this.spans[this.idx].innerText = this.originalString[this.idx]
                this.idx++
            }
            
            this.frame += this.idx / 4 + 1
            
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
            span.style.transform = `translateX(-10px)`
        })
    }
}

export { RevealText }