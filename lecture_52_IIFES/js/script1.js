(function (window) {
    var jackGreeter = {};
    var gretting = "Hello ";
    jackGreeter.name = "Jack";

    jackGreeter.sayHello = function () {
        console.log(gretting+ jackGreeter.name);
    }

    window.jackGreeter = jackGreeter;
})(window);