class UserInfo{
    constructor(name, job){
        this._name = name;
        this._job = job;
    }
    getUserInfo(){
        document.querySelector(".popout__form-input_type_name").value = this._name;
        document.querySelector(".popout__form-input_type_job").value = this._job;
    }
    setUserInfo(){
        console.log("setting");
        document.querySelector(".profile__name").textContent = this._name;
        document.querySelector(".profile__profession").textContent = this._job;
    }
}
export default UserInfo