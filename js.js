const scriptURL = 'https://script.google.com/macros/s/AKfycbx2vj2WWDPT1z-RsWHxbKljeTMuETUQjU3tEU1DBS9-aFhgtf598exNDJ4Tj4PaVJWO/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST' , body: new FormData(form)})
    .then(response => alert("Thank you! your form is submitted successfully." ))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error' , error.message))
})