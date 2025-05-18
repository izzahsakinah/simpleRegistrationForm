document.getElementById('myForm').addEventListener('submit', function (event) {
    const requiredFields = document.querySelectorAll('#myForm [ast]');
    let allFilled = true;

    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        field.style.border = '2px solid red';
        allFilled = false;
      } else {
        field.style.border = '';
      }
    });

    if (!allFilled) {
      alert('Please fill in all required fields marked with *');
      event.preventDefault();
    }
  });