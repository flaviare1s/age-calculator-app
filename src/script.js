const form = document.querySelector('#form')
const dayInput = document.getElementById('day')
const monthInput = document.getElementById('month')
const yearInput = document.getElementById('year')
const labels = document.querySelectorAll('label')
const inputs = document.querySelectorAll('input')
const button = document.querySelector('#btn')
const errorDay = document.querySelector('#error-day')
const errorMonth = document.querySelector('#error-month')
const errorYear = document.querySelector('#error-year')
const currentYear = new Date().getFullYear()

function isValidDate(year, month, day) {
    const date = new Date(year, month - 1, day)
    return date.getFullYear() == year && date.getMonth() + 1 == month && date.getDate() == day
}

    
function ageCalculate(event) {
    event.preventDefault()
    if(!form.checkValidity()) {
        labels.forEach((label) => {
            label.classList.add('invalid')
        })
        inputs.forEach((input) => {
            input.classList.add('invalid')
        })
    }

    if(dayInput.value === '') {
        errorDay.innerText = 'This field is required'
    }
    else if(!dayInput.checkValidity()) {
        errorDay.innerText = 'Must be a valid day'
    }

    if(monthInput.value === '') {
        errorMonth.innerText = 'This field is required'
    }
    else if(!monthInput.checkValidity()) {
        errorMonth.innerText = 'Must be a valid month'
    }

    if(yearInput.value === '') {
        errorYear.innerText = 'This field is required'
    }
    else if(yearInput.value > currentYear) {
        errorYear.innerText = 'Must be in the past'
        labels.forEach((label) => {
            label.classList.add('invalid')
        })
        inputs.forEach((input) => {
            input.classList.add('invalid')
        })
    }

    if (!isValidDate(yearInput.value, monthInput.value, dayInput.value)) {
        if (errorDay.innerText === '' && errorMonth.innerText === '' && errorYear.innerText === '') {
            errorDay.innerText = 'Must be a valid date'
        }
    }
}

button.addEventListener('click', ageCalculate)



