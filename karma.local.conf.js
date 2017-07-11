module.exports = function(config) {
    config.set(
        {
            files: [
                'https://code.jquery.com/jquery-2.2.4.min.js',
                'https://ajax.googleapis.com/ajax/libs/angularjs/1.4.0/angular.js',
                './index.js',
                './test.js'
            ],
            frameworks: ['mocha', 'chai'],
            browsers: ['Chrome']
        }
    );
}