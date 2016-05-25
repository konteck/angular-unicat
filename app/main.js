import CatalogController from './Controllers/catalog';
import ProductController from './Controllers/product';
import CommonService from './Services/common';

angular.module('services', [])
        .factory('commonService', CommonService);

angular.module('controllers', [])
        .controller('catalogController', CatalogController)
        .controller('productController', ProductController);

function config($routeProvider) {
    $routeProvider
            .when('/', {
                templateUrl: 'app/Views/catalog.html',
                controller: 'catalogController',
                controllerAs: 'vm'
            })
            .when('/show/:c/:i', {
                templateUrl: 'app/Views/product.html',
                controller: 'productController',
                controllerAs: 'vm'
            })
            .otherwise({redirectTo: '/'});
}

config.$inject = ['$routeProvider'];

var moduleName = 'catalogModule';

angular.module(moduleName, ['ngRoute', 'ngMessages', 'controllers', 'services']).config(config);

export default moduleName;