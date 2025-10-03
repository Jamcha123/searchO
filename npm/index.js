import axios from "axios";

export default class SearcherO{
    constructor(options = {"api-key": ""}){
        this.key = options["api-key"]
    }
    async search(query){
        if(this.key == null || this.key == undefined){
            throw new Error(this.key + " is empty, please add your api key from the SearcherO dashboard")
        }
        const webby = (await axios.get("https://searching-pi3qnyzg4q-uc.a.run.app?query=" + query, {headers: {Authorization: this.key}}))["data"]
        return webby
    }
    async summary(query){
        if(this.key == null || this.key == undefined){
            throw new Error(this.key + " is empty, please add your api key from the SearcherO dashboard")
        }
        const webby = (await axios.get("https://ai-summary-pi3qnyzg4q-uc.a.run.app?query=" + query, {headers: {Authorization: this.key}}))["data"]
        return webby
    }
}