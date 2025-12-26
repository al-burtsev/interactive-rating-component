const form = document?.querySelector('#rating-form')
const rating = document?.querySelector('#result-rating')
const dialog = document?.querySelector('#rating-dialog')
const inputs = document.querySelectorAll('.rating-form__radio')
const submitBtn = form.querySelector('button[type="submit"]');
const errorContainer = form.querySelector('.error') ?? document.createElement('div')

inputs.forEach(input => {
  input.addEventListener('change', () => {
    input.classList.remove('hasActive')
    errorContainer.setAttribute('hidden', true)
  })
})

form?.addEventListener('submit', (event) => {
  event.preventDefault()

  const formData = new FormData(form)
  const data = Object.fromEntries(formData)

  if (Object.keys(data).length === 0) {
    errorContainer.classList.add('error')
    errorContainer.textContent = 'Please select a rating'
    submitBtn.insertAdjacentElement('beforebegin', errorContainer)
    
    const lastInput = inputs.length
    const activeInput = form.elements[lastInput]
    activeInput.classList.add('hasActive')
    activeInput.focus()
    return
  }

  const { 'rating-value': ratingValue } = data
  rating.textContent = ratingValue;

  dialog.showModal()
})