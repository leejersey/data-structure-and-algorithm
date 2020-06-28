var Stack = function(){
    var items = [];
    this.push = function(element){
        items.push(element)
    }
}

var s = new Stack();