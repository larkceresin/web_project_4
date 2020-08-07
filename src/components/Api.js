class Api{
    constructor({baseUrl, headers}){
        this._baseUrl = baseUrl;
        this._headers = headers;
    }
    getCardList(){
        return fetch(this._baseUrl + "/cards", {
            headers: this._headers})
            .then((res) => res.ok? res.json() : Promise.reject(`Error!`+ res.status + res.statusText))
            .catch((err) => console.log(err))
    }
    getUserInfo(){
        return fetch(this._baseUrl + `/users/me`,{
            headers: this._headers})
            .then((res) => res.ok? res.json() : Promise.reject(`Error!`+ res.status + res.statusText))
            .catch((err) => console.log(err))
    }
    
    addCard({name, link}){
        return fetch(this._baseUrl + `/cards`,{
            headers: this._headers,
            method: "POST",
            body: JSON.stringify({
                name,
                link
            })})
            .then((res) => res.ok? res.json() : Promise.reject(`Error!`+ res.status + res.statusText))
            .catch((err) => console.log(err))
    }
    removeCard(cardId){
        return fetch(this._baseUrl + `/cards/` + cardId ,{
            headers: this._headers,
            method: "DELETE"})
            .then((res) => res.ok? res.json() : Promise.reject(`Error!`+ res.status + res.statusText))
            .catch((err) => console.log(err))
    }
    changeLikeCardStatus(cardId, like){
        if (like){return fetch(this._baseUrl + `/cards/likes/` + cardId,{
            headers: this._headers,
            method: "PUT",
            body: JSON.stringify({
                like})})
            .then((res) => res.ok? res.json() : Promise.reject(`Error!`+ res.status + res.statusText))
            .catch((err) => console.log(err))
        } else {return fetch(this._baseUrl + `/cards/likes/` + cardId,{
            headers: this._headers,
            method: "DELETE"})
            .then((res) => res.ok? res.json() : Promise.reject(`Error!`+ res.status + res.statusText))
            .catch((err) => console.log(err))
        }
    }
    setUserInfo({name, about}){
        return fetch(this._baseUrl + `/users/me`,{
            headers: this._headers, 
            method: "PATCH",
            body: JSON.stringify({
                name,
                about
              })})
            .then((res) => res.ok? res.json() : Promise.reject(`Error!`+ res.status + res.statusText))
            .catch((err) => console.log(err))

    }
    setUserAvatar({avatar}){
        return fetch(this._baseUrl + `/users/me/avatar`,{
            headers: this._headers,
            method: "PATCH",
            body: JSON.stringify({avatar})})
            .then((res) => res.ok? res.json() : Promise.reject(`Error!`+ res.status + res.statusText))
            .catch((err) => console.log(err))
    }
}
export default Api