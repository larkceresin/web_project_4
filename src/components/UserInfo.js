class UserInfo{
    constructor(name, job){
        this._name = name;
        this._job = job;
    }
    getUserInfo(){
        this._name = document.querySelector(".profile__name").textContent;
        this._job = document.querySelector(".profile__profession").textContent;
    }
    setUserInfo(){
        document.querySelector(".profile__name").textContent = this._name;
        document.querySelector(".profile__profession").textContent = this._job;
    }
}
export default UserInfo