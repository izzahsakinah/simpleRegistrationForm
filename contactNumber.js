document.getElementById('saveButton').addEventListener('click', function () {
    const contactNumberField = document.getElementById('contactNumber');
    const contactNumber = contactNumberField.value.trim();

    const numberOnlyPattern = /^[0-9]+$/;

    if (!numberOnlyPattern.test(contactNumber)) {
      alert('Please enter numbers only for Contact Number');
      contactNumberField.focus();
    } 
    
    else {
      contactNumberField.style.border = ''; 
      alert('Contact Number successfully saved!');
    }
  });