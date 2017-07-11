module.exports.userMenu = function() {
    return {
        controller: 'UserMenuController',
        templateUrl: '/templates/user_menu.html'
    };
};

module.exports.productDetails = function () {
    return {
        controller: 'ProductDetailsController',
        templateUrl: '/templates/product_details.html'
    };
};

module.exports.categoryTree = function() {
    return {
        controller: 'CategoryTreeController',
        templateUrl: '/templates/category_tree.html'
    };
};

module.exports.categoryProducts = function () {
    return {
        controller: 'CategoryProductsController',
        templateUrl: '/templates/category_products.html'
    };
};

module.exports.navBar = function () {
    return {
        controller: 'NavBarController',
        templateUrl: '/templates/nav_bar.html'
    };
};

module.exports.addToCart = function () {
    return {
        controller: 'AddToCartController',
        templateUrl: '/templates/add_to_cart.html'
    };
};

module.exports.checkout = function () {
    return {
        controller: 'CheckoutController',
        templateUrl: '/templates/checkout.html'
    };
};
