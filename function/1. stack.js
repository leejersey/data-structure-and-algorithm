function Stack() {
    var items = [];
    this.push = function (element) {
        items.push(element);
    };
    this.pop = function () {
        return items.pop();
    };
    this.getTopElement = function () {
        return items[items.length - 1];
    };
    this.isEmpty = function () {
        return items.length == 0;
    };
    this.size = function () {
        return items.length;
    };
    this.toString = function () {
        console.log(items.toString());
    };
}

var s = new Stack();