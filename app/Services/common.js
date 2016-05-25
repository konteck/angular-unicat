import {default as data} from '../data';

class commonService {
    constructor() {
        this.data = data;
    }

    getData() {
        return this.data;
    }

    setData(data) {
        this.data = data;
    }

    static commonFactory() {
        return new commonService();
    }
}

export default commonService.commonFactory;
