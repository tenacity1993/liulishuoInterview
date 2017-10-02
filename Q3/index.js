function Toast() {
    this.init();
    return this
}
Toast.prototype = {
    duration: 3000,
    init: function() {
        let parentElem = document.getElementById('toast');
        let mask = document.getElementById('mask');
        if (!parentElem) {
            parentElem = document.createElement('div');
            parentElem.id = "toast";
            document.body.appendChild(parentElem);
        }
    },
    show(options) {
        let obj = options || {}
        let mask = document.createElement('div')
        mask.setAttribute('class', 'mask')
        let elem = document.createElement('div')
        elem.setAttribute('class', 'content')
        document.getElementById('toast').appendChild(mask)
        document.getElementById('toast').appendChild(elem)
        let pNode = document.getElementById('toast')
        // setTimeout(() => {
        //     pNode.parentNode.removeChild(pNode);
        // }, obj.duration || this.duration)
    },
    close() {
        let pNode = document.getElementById('toast')
        pNode.parentNode.removeChild(pNode);
    }
}

let toast = new Toast()
toast.show()
setTimeout(() => {
    toast.close()
}, 3000)
// toast.close()