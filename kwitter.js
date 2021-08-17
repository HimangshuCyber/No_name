//Adding function to add user
function addUser(){
    input_value = document.getElementById('userName').value;
    input_value1 = document.getElementById('email').value;
    
    if(input_value == '' || input_value1 == ''){
        if (input_value == '') {
            document.getElementById('user_name_label_error').style.fontSize = "15px"
        }
        else{
            document.getElementById('email_name_label_error').style.fontSize = "15px"
        }
    }
    else{
        userName = document.getElementById('userName').value;
        localStorage.setItem('userName', userName);
        window.location = 'kwitter_room.html';
    }

}

function switch_window(){
    window.location = "kwitter_login.html"
}