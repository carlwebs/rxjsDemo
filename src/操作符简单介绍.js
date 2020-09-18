// 操作符是 Observable 类型上的方法，比如 .map(...)、.filter(...)、.merge(...)，等等。当操作符被调用时，它们不会改变已经存在的 Observable 实例。相反，它们返回一
// 个新的 Observable ，它的 subscription 逻辑基于第一个 Observable 。

import { Observable } from 'rxjs';

// 操作符是函数，它基于当前的 Observable 创建一个新的 Observable。这是一个无副作用的操作：前面的 Observable 保持不变。

// 操作符本质上是一个纯函数 (pure function)，它接收一个 Observable 作为输入，并生成一个新的 Observable 作为输出。订阅输出 Observable 同样会订阅输入 Observable。

// 自定义操作符
function mul(inputObser) {
    return new Observable((o) => {
        inputObser.subscribe((value) => {
            o.next(value * 10);
        })
    })
}
var obser = new Observable((obs) => {
    obs.next(10);
    obs.next(20);
})
var obser2 = mul(obser);
obser2.subscribe((value) => {
    console.log(value);
})
// 订阅obser2会使obser也订阅，称为"操作符订阅链"。