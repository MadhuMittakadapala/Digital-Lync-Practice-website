
        function loginUser() {
            if (validateEmail()){
                if (validatePassword()){
                  window.alert('validate successfully!');
                }

            }



       }


        function validateEmail() {
            const email = document.getElementById('email').value;
            if ( email === ''){
                document.getElementById('emailMessage').innerHTML = "please enter your email id";
                return false;

            }else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
                document.getElementById('emailMessage').innerHTML = 'Incorrect email format';
                return false;

            } else {
                document.getElementById('emailMessage').innerHTML = '';
                return true;


            }

        }

        function validatePassword() {
            const password = document.getElementById('password').value;
            if ( password === ''){
                document.getElementById('passwordMessage').innerHTML = "please enter your password";
                return false;

            }else if(!( /^[A-Za-z]\w{7,14}$/.test(password))){
                document.getElementById('passwordMessage').innerHTML = 'password not matched';
                return false;

            } else {
                document.getElementById('passwordMessage').innerHTML = '';
                return true;


            }
        }    