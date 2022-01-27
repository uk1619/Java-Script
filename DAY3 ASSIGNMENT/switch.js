const email = prompt('Enter email id');
const password = prompt('Enter password');

switch ( email , password ) {
case 'xyz@gmail.com', '1234509876':
    alert('Hurray! You are logged in');
    break;

    default:
        alert('Try again');
}


