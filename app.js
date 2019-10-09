//Init Github
const github = new Github;

//Init UI
const ui = new UI;

//Search input
const searchUser = document.getElementById('searchUser');

//Search input event listner
searchUser.addEventListener('keyup',(e) => {
    //get input text
    const usereText = e.target.value;

    if(usereText !== ''){
        //Make http call
        github.getUser(usereText)
        .then(data => {

            if(data.profile.message === 'Not Found') {
                //Show alert
                ui.showAlert('User not found','alert alert-danger');
            }else {
                //Show profile
                ui.showProfile(data.profile);
            }
            
        }) 
    }else {
        //clear profile
        ui.clearProfile();
    }
});