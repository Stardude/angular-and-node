var controllers = require('./controllers');
var directives = require('./directives');
var services = require('./services');
var _ = require('lodash');

var components = angular.module('mean-retail.components', ['ng']);

_.forEach(controllers, function (controller, name) {
    components.controller(name, controller);
});

_.forEach(directives, function (directive, name) {
    components.directive(name, directive);
});

_.forEach(services, function (service, name) {
    components.factory(name, service);
});

var app = angular.module('mean-retail', ['mean-retail.components', 'ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/product/:id', {
            template: '<product-details></product-details>'
        })
        .when('/category/:category', {
            templateUrl: 'templates/category_view.html'
        })
        .when('checkout', {
            template: '<checkout></checkout>'
        });
});