import { Observable, Subject } from 'rxjs';
let subject = new Subject();
subject.subscribe((value) => {
    console.log(value);
})
setTimeout(() => {
    subject.subscribe((value) => {
        console.log(value + "timeout");
    })
}, 2000);
let obser = new Observable((o) => {
    o.next("send");
    setTimeout(() => {
        o.next("send2");
    }, 3000);
});
obser.subscribe(subject);