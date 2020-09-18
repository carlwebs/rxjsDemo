import { BehaviorSubject } from 'rxjs';
// Subject 的其中一个变体就是 BehaviorSubject，它有一个“当前值”的概念。它保存了发送给消费者的最新值。并且当有新的观察者订阅时，会立即从 BehaviorSubject 那接收到“当前值”。
var sub = new BehaviorSubject(0);
sub.subscribe((value) => {
    console.log(value);
})
sub.next(1);
sub.next(2);
sub.subscribe((value) => {
    console.log(value);
})
sub.next(3);

// 结果：
// 0
// 1
// 2
// 2
// 3
// 3