const addBTN = document.querySelector('.btn-add')
const removeBTN = document.querySelector('.btn-remove')
const input = document.querySelector('.input')
const ul = document.querySelector('.ul')


function Control() {
    const form = JSON.parse(localStorage.getItem('task')) || []
    let addList = ''
    form.map(el => {
        addList += `<li class="list-item d-flex justify-content-between">
${el.title}
<button class="delete btn-primary">delete</button>
</li>`
    })
    ul.innerHTML = addList
    input.value = ''
}
Control()


function addNode(){
    if (input.value !== ''){
        let from = JSON.parse(localStorage.getItem('task')) || []
        const getItem = {
            id: Date.now(),
            title: input.value
        }
        from = [...from, getItem]
        localStorage.setItem('task',JSON.stringify(from))
        Control()
    }
}


addBTN.addEventListener('click',() => {
    addNode()
})


removeBTN.addEventListener('click', () => {
    localStorage.removeItem('task')
    ul.innerHTML = ''
})


ul.addEventListener('click', (event) => {
    if (event.classList.target.contains('delete')){
        event.classList.target.remove()
    }
})


input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter'){
        addNode()
    }
})