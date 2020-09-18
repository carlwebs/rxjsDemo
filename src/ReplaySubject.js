// ReplaySubject 类似于 BehaviorSubject，它可以发送旧值给新的订阅者，但它还可以记录 Observable 执行的一部分。
// ReplaySubject 记录 Observable 执行中的多个值并将其回放给新的订阅者。
// 当创建 ReplaySubject 时，你可以指定回放多少个值：如果不指定就把所有的值都回放一遍。，回放是回放最新next的几个值。
import { ReplaySubject } from 'rxjs';
// ReplaySubject第二个参数还可以指定时间，表示规定时间内的回溯。
var obser = new ReplaySubject(3);
obser.subscribe((value) => {
    console.log(value);
})
obser.next(1);
obser.next(2);
obser.next(3);
obser.next(4);
obser.subscribe((value) => {
    console.log(value);
})
obser.next(5);
// 结果： 1,2,3,4,2,3,4,5,5