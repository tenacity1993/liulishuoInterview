function Toast() {
    return this
}
Toast.prototype = {
    duration: 3000,
    show: function (options) {
        let obj = options || {}
        let mask = document.createElement('div')
        mask.setAttribute('class', 'mask')
        let elem = document.createElement('div')
        elem.setAttribute('class', 'content')
        document.body.appendChild(mask)
        document.body.appendChild(elem)
    }
}

let toast = new Toast()
toast.show()