const container = document.getElementById('tasks__list')
const input = document.getElementById('task__input')

if(window.localStorage.getItem('arr') == null) {
    window.localStorage.setItem('arr', JSON.stringify([]))
}

const render = () => {
    const arr = JSON.parse(window.localStorage.getItem('arr'))

    container.innerHTML = ''

    for(let i = 0; i < arr.length; i++) {
        container.innerHTML += createTast(arr[i].text)
    }
}

const createTast = text => { 
    return `<div class="task">
        <div class="task__title">
            ${text}
        </div>
        <a href="#" class="task__remove">&times;</a>
    </div>`
}

document.addEventListener('keydown', event => {
    if(event.keyCode == 13 && input.value.length > 0) {

        const array = JSON.parse(window.localStorage.getItem('arr'))
        
        array.push({
            text: input.value
        })

        window.localStorage.setItem('arr', JSON.stringify(array))

        input.value = ''

        render()
    }   

    const across = document.getElementsByClassName('task__remove')
    const taskTitle = document.getElementsByClassName('task__title')

    for(let i = 0; i < across.length; i++) {
        across[i].addEventListener('click', () => {
            const arr = JSON.parse(window.localStorage.getItem('arr'))

            for(let j = 0; j < arr.length; j++) {
                if(arr[j].text == `${taskTitle[i].innerHTML}`) {
                    arr.splice(i, 1)
                }
            }

            window.localStorage.setItem('arr', JSON.stringify(arr))

            render()
        })
    }

})

render()