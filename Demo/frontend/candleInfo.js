function openloginpop() {
  document.getElementById('login-account').style.display = 'flex';
}

function closeloginpop() {
  document.getElementById('login-account').style.display = 'none';
}
function createaccountpop() {
  document.getElementById('create-account').style.display = 'flex';
  document.getElementById('login-account').style.display = 'none';  
}

function closecreateaccountpop() {
  document.getElementById('create-account').style.display = 'none';
}
