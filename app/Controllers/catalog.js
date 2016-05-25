class CatalogController {
    constructor($route, dataSvc) {
        let data = dataSvc.getData();

        this.name = data.name;
        this.text = data.text;
        this.cover = data.cover;
        this.content = data.content;
    }

    add(name) {
        for (var n in this.content) {
            if (this.content[n].name == name) {
                this.content[n].data.push({
                    "pictures": ["http://s44.radikal.ru/i104/0910/0e/202de509d08b.png"],
                    "name": "Название товара " + (this.content[n].data.length + 1),
                    "description": "Описание товара 1",
                    "additionalProperties": [{"name": "Характеристика 1 товара 1", "value": "значение"}, {
                        "name": "Характеристика 2 товара 2",
                        "value": "значение"
                    }]
                });
            }
        }
    }

    remove(name, idx) {
        for (var n in this.content) {
            this.content[n]['data'] = this.content[n]['data'].filter((el, i)=> {
                return !(this.content[n].name == name && i == idx);
            });
        }
    }
}

CatalogController.$inject = ['$route', 'commonService'];

export default CatalogController;