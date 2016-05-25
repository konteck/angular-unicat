class ProductController {
    constructor($window, $route, dataSvc) {
        let data = dataSvc.getData();

        for (var n in data.content) {
            if (data.content[n]['name'] == $route.current.params.c) {
                this.data = data.content[n]['data'][parseInt($route.current.params.i)];
            }
        }

        this._window = $window;
    }

    goBack() {
        this._window.history.back();
    }
}

ProductController.$inject = ['$window', '$route', 'commonService'];

export default ProductController;