class UserInfo{
    constructor(nameSelector, jobSelector){
        this._name = document.querySelector(nameSelector);
        this._job = document.querySelector(jobSelector);
    }
    getUserInfo(){
        document.querySelector(".popout__form-input_type_name").value = this._name.textContent;
        document.querySelector(".popout__form-input_type_job").value = this._job.textContent;
    }
    setUserInfo(){
       
        document.querySelector(".profile__name").textContent = this._name.value;
        document.querySelector(".profile__profession").textContent = this._job.value;
       
    }
}
export default UserInfo