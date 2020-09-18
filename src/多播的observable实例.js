import { Observable, Subject, from, of } from 'rxjs';
import { multicast } from 'rxjs/operators';
var obser = new Observable((o) => {
    o.next(1);
    setTimeout(() => {
        o.next(2);
    }, 2000);
}).pipe(
    multicast(() => new Subject)
)
obser.subscribe((value) => {
    console.log(value);
})
setTimeout(() => {
    obser.subscribe((value) => {
        console.log(value);
    })
}, 1000);
obser.connect();

// 结果1，2，2