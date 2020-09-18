import { from, fromEvent, fromEventPattern, interval, never, of, range, throwError, timer } from 'rxjs';
import { repeat, repeatWhen } from 'rxjs/operators';

// from 将数组、promise 或迭代器转换成 observable 。
let fromDemo1 = from([1, 2, 3]);
fromDemo1.subscribe((value) => {
    console.log(value);
})

let fromDemo2 = from(new Promise((resolve) => resolve("promise转化")));
fromDemo2.subscribe((value) => {
    console.log(value);
})

let fromEventDemo = fromEvent(document.getElementById("btn"), "click");
fromEventDemo.subscribe((value) => {
    console.log(value);
})

let fromEventPatternDemo = fromEventPattern(
    (handle) => { document.getElementById("btn2").addEventListener("click", handle) },
    (handle2) => { document.getElementById("btn2").removeEventListener("click", handle2) }
)
fromEventPatternDemo.subscribe(value => { console.log(value) });

// 每隔一段时间输出自增的数字，从0开始
let intervalDemo = interval(1000);
intervalDemo.subscribe((value) => {
    // console.log(value);
})

// never从不发出任何值
let neverDemo = never();
neverDemo.subscribe(value => {
    console.log((value));
})

// 按顺序发出任意数量的值
let ofDemo = of("of1","of2","of3");
ofDemo.subscribe(value => {
    console.log(value);
})

// repeat重复发送几次数据
let repeatDemo = of("repeat1","repeat2").pipe(repeat(2));
repeatDemo.subscribe(value => {console.log(value)});

// repeatWhen规定的时间内反复订阅。
let repeatWhenDemo = of(1,2,3).pipe(
    repeatWhen(()=>{return interval(2000)})
)
repeatWhenDemo.subscribe(value => {
    // console.log(value);
})

// 发出指定范围内的整数
let rangeDemo = range(1,5);
rangeDemo.subscribe(value => {
    console.log(value);
})

let throwErrorDemo = throwError("直接发出错误信息");
throwErrorDemo.subscribe({
    next: val => console.log(val),
    complete: () => console.log('Complete!'),
    error: val => console.log(`Error: ${val}`)
})

// 第一个值是一秒后发出，然后是每间隔2000秒递增发送值。
let timerDemo = timer(1000,2000);
timerDemo.subscribe(value => {
    console.log(value);
})