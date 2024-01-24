const specialChars = [...'!@#$%^&*()_+{}:"<>?qwertyuiopasdfghjklzxcvbnm']
function inOutQuad(n){
    n *= 2;
    if (n < 1) return 0.5 * n * n;
    return - 0.5 * (--n * (n - 2) - 1);
}

function max(n, length) {
    return n >= length - 1 ? length - 1 : n
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

            // this.spans[this.idx].style.transform = `translateX(0)`

            this.spans[max(this.idx, this.originalString.length)].style.opacity = 1
            this.spans[max(this.idx + 1, this.originalString.length)].style.opacity = 1
            this.spans[max(this.idx + 2, this.originalString.length)].style.opacity = 1
            this.spans[max(this.idx + 3, this.originalString.length)].style.opacity = 1
            this.spans[max(this.idx + 4, this.originalString.length)].style.opacity = 1

            this.spans[max(this.idx, this.originalString.length)].innerText = specialChars[Math.floor(Math.random() * specialChars.length)]
            this.spans[max(this.idx + 1, this.originalString.length)].innerText = specialChars[Math.floor(Math.random() * specialChars.length)]
            this.spans[max(this.idx + 2, this.originalString.length)].innerText = specialChars[Math.floor(Math.random() * specialChars.length)]
            this.spans[max(this.idx + 3, this.originalString.length)].innerText = specialChars[Math.floor(Math.random() * specialChars.length)]
            this.spans[max(this.idx + 4, this.originalString.length)].innerText = specialChars[Math.floor(Math.random() * specialChars.length)]
            
            if(this.frame > (this.idx * 20 + 30) && this.frame !== 0) {
                this.spans[this.idx].innerText = this.originalString[this.idx]
                this.idx++
            }
            
            this.frame += this.idx / 2 + 1
            
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