const membershipForm = document.querySelector('.membershipForm')
const membershipInput = document.querySelector('.membershipInput')
const membershipInputContainer = document.querySelector('.membershipInputContainer')
const membershipInputLabel= document.querySelector('.membershipPlaceholder')
const membershipInputMessage = document.querySelector('.membershipInputMessage')

const ON_FOCUS = 'onFocus'
const FOCUS_IN = 'focusin'

const validateEmail = (email) =>
/^[A-Z0-9.]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)

const handleFocus = (e) => {
    const{
        target:{ value},
        type,
    } = e
    if (value) return true
    if (type == FOCUS_IN){
        membershipInputContainer.classList.add(ON_FOCUS)
        return true
    }
    membershipInputContainer.classList.remove(ON_FOCUS)
}

const handleSubmit = (e) => {
    e.preventDefault()
    const { value } = membershipInput
    const validEmail = validateEmail(value)
    if (validEmail) {
        membershipInputMessage.innerText = 'Thank you for understanding'
        membershipInput.value = ''
        membershipInputContainer.classList.remove(ON_FOCUS)

    } else{
        membershipInputMessage.innerText = 'Enter a valid Email'
    }
    setTimeout(() => {
     membershipInputMessage.innerText = ''
    }, 3000);
}

membershipInput.addEventListener(FOCUS_IN, handleFocus)
membershipInput.addEventListener('focusout', handleFocus)
membershipInput.addEventListener(submit, handleSubmit)