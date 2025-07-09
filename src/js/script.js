const openButtons = document.querySelectorAll('.open-modal') // tem que ter o ponto da classeconst

function clearForm() {
   document.getElementById('email').value = '';
   document.getElementById('password').value = '';
}


openButtons.forEach(button => {
   button.addEventListener('click', () => {
      const modalId = button.getAttribute('data-modal')
      const modal = document.getElementById(modalId);
      console.log(modal)
      modal.showModal()
   })
}) 

const closeButtons = document.querySelectorAll('.close-modal')

closeButtons.forEach(button => {
   button.addEventListener('click', () => {
      const modalId = button.getAttribute('data-modal')
      const modal = document.getElementById(modalId);
      

      modal.close();
      clearForm()
   })
})

