
        let username = document.getElementById("username");
        let password = document.getElementById("password");
        let flag = 1;

        function validateFrom(){
            if(username.value == ""){
                document.getElementById("userError").innerHTML = "User Name is empty";
                flag = 0;

            }else if(username.value.length < 3){
                document.getElementById("userError").innerHTML = "user name required min 3 charecters";
                flag = 0;
            }
            else{
                document.getElementById("userError").innerHTML = "";
            }
            if(password.value == ""){
                document.getElementById("passError").innerHTML = "passsword is empty";
            }else{
                document.getElementById("passError").innerHTML = "";
                flag = 1;
            }
            
            if(flag){
                return true;
            }else{
                return false;
            }
        }