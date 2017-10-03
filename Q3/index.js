function Toast() {
    this.init()
    return this
}
Toast.prototype = {
    duration: 3000,
    init: function() {
        let parentElem = document.getElementById('toast')
        let mask = document.getElementById('mask')
        if (!parentElem) {
            parentElem = document.createElement('div')
            parentElem.id = "toast"
            document.body.appendChild(parentElem)
        }
    },
    show(options) {
        let obj = options || {}
        let msg = obj.msg || '默认显示内容'
        let icon = obj.icon || 'triangle'
        let elemClass = obj.class || 'dialog'
        let pNode = document.getElementById('toast')
        let mask = document.createElement('div')
        mask.id = 'mask'
        mask.setAttribute('class', 'mask')
        let elem = document.createElement('div')
        elem.setAttribute('class', 'content')
        let html = `<div class="${elemClass}"><i class="${icon}"></i><p>${msg}</p></div>`
        elem.innerHTML = html
        document.getElementById('toast').appendChild(mask)
        document.getElementById('toast').appendChild(elem)

        let maskElem = document.getElementById('mask')
        maskElem.addEventListener('click', () => {
            if(pNode.hasChildNodes()) {
                pNode.parentNode.removeChild(pNode);
            }
        }, false)

        /*setTimeout(() => {
            if(pNode) {
                pNode.parentNode.removeChild(pNode)
            }
        }, obj.duration || this.duration)*/
    },
    close() {
        let pNode = document.getElementById('toast')
        pNode.parentNode.removeChild(pNode);
    }
}

let toast = new Toast()
toast.show()
/*setTimeout(() => {
    toast.close()
}, 3000)*/
// toast.close()