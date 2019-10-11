console.log("main.js")

/* Show/hide filters */

const showBtn = document.querySelector('.js-filter-menu-toggle')
const filtersUl = document.querySelector('.js-filter-menu')
const arrow = document.querySelector('.js-chevron-arrow')

function toggleFilters() {
    if(filtersUl.classList.contains('visible')) {
        filtersUl.classList.remove('visible')
        changeBtn()
    } else {
        filtersUl.classList.add('visible')
        revertBtn()
    }
}

function changeBtn() {
    arrow.style.transform = 'rotate(0deg)'
    showBtn.querySelector('p').innerHTML = 'Show filters'
}

function revertBtn() {
    arrow.style.transform = 'rotate(180deg)'
    showBtn.querySelector('p').innerHTML = 'Hide filters'
}

showBtn.addEventListener('click', toggleFilters)


/* add active state to filters on click */

const $$filterButtons = document.querySelectorAll('.js-filter-button')

$$filterButtons.forEach($btn => {
    $btn.addEventListener('click', e => {

        $$filterButtons.forEach($btn => {
            $btn.classList.remove('-active')
        })

        let currentBtn = e.currentTarget
        currentBtn.classList.add('-active')
    })
})


