import { Observable, Subject, from, of } from 'rxjs';
import { multicast } from 'rxjs/operators';
// 多播 Observable 在底层是通过使用 Subject 使得多个观察者可以看见同一个 Observable 执行。
// multicast 操作符返回一个 Observable，它看起来和普通的 Observable 没什么区别，但当订阅时就像是 Subject 。
// multicast 返回的是 ConnectableObservable，它只是一个有 connect() 方法的 Observable 。

// connect() 方法十分重要，它决定了何时启动共享的 Observable 执行。因为 connect() 方法在底层执行了
//  source.subscribe(subject)，所以它返回的是 Subscription，你可以取消订阅以取消共享的 Observable 执行。
var obser = of(2);
var multi = obser.pipe(
    multicast(()=>new Subject())
)
multi.subscribe((value) => {
    console.log(value);
})
multi.connect();