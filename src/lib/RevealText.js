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

    animate() {
        this.isIntersecting = true
        if(this.idx !== this.originalString.length && this.isIntersecting) {

            // this.spans[this.idx].style.transform = `translateX(0)`

            for (let index = 0; index <= 7; index++) {
                this.spans[max(this.idx + index, this.originalString.length)].style.opacity = 1
                this.spans[max(this.idx + index, this.originalString.length)].innerText = specialChars[Math.floor(Math.random() * specialChars.length)]
            }
            
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