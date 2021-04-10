class Request {
    apiUrl = 'http://47.102.209.46:8000/api/v1';
    // apiUrl = 'http://127.0.0.1:8000/api/v1';


    get(path: string, search: object) {
        let queryString = search ? '?' + this.serialize(search) : '';
        let url = this.apiUrl + path + queryString;
        return fetch(url).then(res => res.json()).then(
            result => { return result }
        );
    }
    serialize(obj: any) {
        var str = [];
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                str.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]))
            }
        }
        return str.join("&");
    }

}

export default new Request();