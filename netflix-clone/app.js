const membershipForm = document.querySelector('.membershipForm')
const membershipInput = document.querySelector('.membershipInput')
const membershipInputContainer = document.querySelector('.membershipInputContainer')
const membershipInputLabel= document.querySelector('.membershipPlaceholder')
const membershipInputMessage = document.querySelector('.membershipInputMessage')

const ON_FOCUS = 'onFocus'
const FOCUS_IN = 'focusin'

const validateEmail = (email) =>
/^[A-Z0-9.]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)

const handleFocus = e

membershipInput.addEventListener(FOCUS_IN, handleFocus)
membershipInput.addEventListener(focusout, handleFocus)