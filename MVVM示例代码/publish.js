//发布订阅模式
function Dep(){
    this.subs = [];
}
Dep.prototype.addSub = function(sub){
    this.subs.push(sub);//订阅
}
Dep.prototype.notify = function(){
    this.subs.forEach(sub=>sub.update());
}
//这是我们订阅的事件，每一个事件就是一个new Watcher
function Watcher(fn){
    this.fn = fn;
}
Watcher.prototype.update = function(){
    this.fn();
}
let watcher = new Watcher(function(){
    alert(1);
});

let dep = new Dep();
dep.addSub(watcher);//添加订阅
dep.notify();//分发订阅
