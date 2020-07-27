class UserInfo{
    constructor(nameSelector, jobSelector){
        this._name = document.querySelector(nameSelector);
        this._job = document.querySelector(jobSelector);
    }
    getUserInfo(){
        return { name: this._name.textContent, job: this._job.textContent};
    }
    setUserInfo({userName, userJob}){
       
        this._name.textContent = userName;
        this._job.textContent = userJob;
       
    }
}
export default UserInfo