var form = document.getElementById('validate');

function success() {
  if (form.checkValidity()) {
    alert("Form is Submitted!");
  }
}