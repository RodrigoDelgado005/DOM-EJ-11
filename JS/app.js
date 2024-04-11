function agregarNodo() {
    let nt
    let obj
    
    nt = document.createTextNode('Texto 1')
    obj = document.getElementById('lista1')
    obj.appendChild(nt)
    nt = document.createTextNode('Texto 2')
    obj = document.getElementById('lista2')
    obj.appendChild(nt)
    nt = document.createTextNode('Texto 3')
    obj = document.getElementById('lista3')
    obj.appendChild(nt)
}