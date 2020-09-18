import { buffer, bufferCount, bufferTime, bufferWhen, concatMap, expand, concatMapTo, take, map, mapTo } from 'rxjs/operators';
import { interval, fromEvent, of } from 'rxjs';

// 收集输出值，直到提供的 observable 发出才将收集到的值作为数组发出。d
let bufferDemo = interval(1000).pipe(buffer(fromEvent(document.getElementById("btn"), "click")));
bufferDemo.subscribe(value => {
    console.log(value);  //例如：[0,1,2,3], [4,5,6,7,8]
})

// 收集发出的值，直到收集完提供的数量的值才将其作为数组发出。
let bufferCountDemo = interval(1000).pipe(bufferCount(3));
bufferCountDemo.subscribe(value => {
    // console.log(value)
}); //[0,1,2],[3,4,5]...

// 收集发出的值，直到经过了提供的时间才将其作为数组发出。
let bufferTimeDemo = interval(1000).pipe(bufferTime(2000));
bufferTimeDemo.subscribe(value => {
    // console.log(value); //[0],[1,2]
})

// 收集值，直到关闭选择器发出值才发出缓冲的值。
let bufferWhenDemo = interval(1000).pipe(
    bufferWhen(() => {
        return fromEvent(document.getElementById("btn2"),"click")
    })
)
bufferWhenDemo.subscribe(value => {
    // console.log(value); //例如：[0,1,2,3,4,5]
})

// 将值映射成内部 observable，并按顺序订阅和发出。
let concatMapDemo = of(1,2,3).pipe(
    concatMap((value) => {
        return of(value + 1)
    })
)
concatMapDemo.subscribe(value => {
    console.log(value); //2,3,4
})

// 当前一个 observable 完成时订阅提供的 observable 并发出值。
let concatMapToDemo = of("1").pipe(
    concatMapTo(of("concatMapToDemo"))
)
concatMapToDemo.subscribe(value => {
    console.log(value);
})

// expand递归调用函数
let expandDemo = of(2).pipe(
    // expand执行3次。
    expand(value => {
        return of(value + 1);
    }),
    take(3)
)
expandDemo.subscribe(value => {
    console.log(value); //2,3,4
})

// map对源 observable 的每个值应用投射函数。
let mapDemo = from([1,2,3]).pipe(
    map(value => value + 1)
)
mapDemo.subscribe(value => console.log(value));

