import { bindCallback, bindNodeCallback, Observable, of, defer, empty } from 'rxjs';
// bindCallback
// bindCallback 并不是一个操作符，因为它的输入和输出并不是 Observable 。输入的是一个 带有多个参数的函数，
// 并且该函数的最后一个参数必须是个回调函数，当该函数执行完之后会调用回调函数。

// bindCallback 的输出是一个函数，该函数接受的参数和输入函数一样(除了没有最后一个回调函 数)。
// 当输出函数被调用，会返回一个 Observable 。如果输入函数给回调函数传递一个值，则该 Observable 
// 会发出这个值。如果输入函数给回调函数传递多个值，则该 Observable 会发出一个包含所有值的数组。

// 很重要的一点是，输出函数返回的 Observable 被订阅之前，输入函数是不会执行的。这意味着如果输入 函
// 数发起 AJAX 请求，那么该请求在每次订阅返回的 Observable 之后才会发出，而不是之前。
const fn = bindCallback(function(a,b,callback) {
    callback(a);
    // callback(a,b);
})
fn(1,2).subscribe((value) => {
    console.log(value);
})

// bindNodeCallback
const fn2 = bindNodeCallback(function(a,b) {
    console.log(a,b);
})
fn2(3,4).subscribe((value) => {
    console.log(value);
})

// create
const obser = Observable.create((o) => {
    o.next(1);
    o.next(2);
})
obser.subscribe((value) => {
    console.log(value);
})

// defer
// 创建一个 Observable，当被订阅的时候，调用 Observable 工厂为每个观察者创建新的 Observable。
// defer允许你创建一个 Observable 当且仅当它被订阅的时候，并且为每个订阅者创建新的 Observable。 
// 它一直在等待直到观察者订阅了它, 然后它创建一个新的 Observable,通常会以 Observable 工厂函数的方式。 
// 对每个订阅者它都是新的, 所以即使每个订阅者也许会认为它们订阅的是同一个 Observable, 事实上每个订阅 
// 者获得的是只属于它们的 Observable。
let deferDemo = defer(() => {
    if(Math.random() > 0.5){
        return of("大于");
    }else {
        return of("小于");
    }
})
deferDemo.subscribe((value => {
    console.log(value);
}))

// empty
// complete立即完成
let emptyDemo = empty();
emptyDemo.subscribe({
    complete:() => {
        console.log("complete");
    }
})