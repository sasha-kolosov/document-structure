const tooltip = document.getElementsByClassName('tooltip')[0]
const hasTooltip = document.getElementsByClassName('has-tooltip')

for(let i = 0; i < hasTooltip.length; i++) {
    hasTooltip[i].addEventListener('click', () => {
        tooltip.classList.toggle('tooltip_active')
        tooltip.innerHTML = hasTooltip[i].getAttribute('title')

        const position = hasTooltip[i].getBoundingClientRect()

        tooltip.style.left = `${position.x}px`
        tooltip.style.top = `${position.y + position.height}px`
    })
}
