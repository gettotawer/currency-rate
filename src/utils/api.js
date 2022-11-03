export class Api{
    constructor({baseUrl, headers}){
        this._headers = headers;
        this._baseUrl = baseUrl;
    }

    _checkResponse(res){
        if(res.ok){
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getConvertation(base, symbols){
       return fetch(`${this._baseUrl}?base=${base}&symbols=${symbols.join(',')}`,{
        credentials: 'include',
        headers: this._headers})
        .then(this._checkResponse)
    }
}

const api = new Api({
    baseUrl: 'https://api.apilayer.com/fixer/latest',
    headers: {
        'Content-Type': 'application/json',
        'apikey': 'i6XKDbywpIBEAOJjH1W4SrtTv6rGUw1t'
    }
});

export default api;