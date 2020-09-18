import { interval, of, from } from "rxjs";
import { mapTo, mergeMap, map } from "rxjs/operators";

// mapTo将每个发出值映射成常量。
let mapToDemo = from([1,2,3]).pipe(
    mapTo("hello world")
)
mapToDemo.subscribe(value => {
    console.log(value);
})

// mergeMap合并多个observable为一个。
let mergeMapDemo = of("a","b").pipe(
    mergeMap(value => {
        return interval(1000).pipe(
            map(v => v + value)
        )
    })
)
mergeMapDemo.subscribe(value => {
    // console.log(value);
})