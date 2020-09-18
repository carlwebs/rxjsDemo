import { AsyncSubject } from 'rxjs';
// AsyncSubject 是另一个 Subject 变体，只有当 Observable 执行完成时(执行 complete())，它才会将执行的最后一个值发送给观察者。
var sub = new AsyncSubject();
sub.subscribe((value) => {
    console.log(value);
})
sub.subscribe((value) => {
    console.log(value);
})
sub.next(1);
sub.next(2);
sub.next(3);
sub.complete();
// 结果：3，3