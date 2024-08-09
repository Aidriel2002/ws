const form = document.querySelector('form');


form.addEventListener('submit', (e) => {
  e.preventDefault();


  const fname = document.getElementById('fname');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const gender = document.getElementsByName('gender');
  const bdate = document.getElementById('bdate');
  const telnum = document.getElementById('telnum');
  const address = document.getElementById('address');
  const chckbx = document.getElementById('chckbx');


  if (fname.value.trim() === '') {
    alert('Enter your Name!');
    return;
  }

  if (email.value.trim() === '') {
    alert('Enter your Email!');
    return;
  }

  if (password.value.trim() === '') {
    alert('Please enter your Password!');
    return;
  }
  if (password.value.trim() < 8 ) {
    alert('Password must be at least 8 characters!');
    return;
  }

  if (gender.checked === '') {
    alert('Please select your gender');
    return;
  }

  if (bdate.value.trim() === '') {
    alert('Please enter your birth date');
    return;
  }

  if (telnum.value.trim() === '') {
    alert('Enter your phone number!');
    return;
  }
  
  if (telnum.value.trim() < 11){
    alert('Invalid Phone number');
    return;
  } 

  if (address.value.trim() === '') {
    alert('Please enter your address');
    return;
  }

  if (!chckbx.checked) {
    alert('Please subscribe to the newsletter');
    return;
  }
  alert('Registered!');
  return true;
});


function getSelectedGender(gender) {
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      return gender[i].value;
    }
  }
  return '';
}