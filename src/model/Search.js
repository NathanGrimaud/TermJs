export class Search{
    constructor(url){
        this._searchUrl = url;
    }
    search(keyWords){
        let results = this._searchUrl;
        return results + " : " + keyWords;
    }
}