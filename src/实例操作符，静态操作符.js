// 1.什么是实例操作符？ - 通常提到操作符时，我们指的是实例操作符，它是 Observable 实例上的方法。
// 2.什么是静态操作符？ - 除了实例操作符，还有静态操作符，它们是直接附加到 Observable 类上的。静态操作符在内部不使用 this 关键字，而是完全依赖于它的参数。

// 静态操作符是附加到 Observalbe 类上的纯函数，通常用来从头开始创建 Observalbe 。

// 最常用的静态操作符类型是所谓的创建操作符。它们只接收非 Observable 参数，比如数字，然后创建一个新的 Observable ，而不是将一个输入 Observable 转换为输出 Observable 。

// 一个典型的静态操作符例子就是 interval 函数。它接收一个数字(非 Observable)作为参数，并生产一个 Observable 作为输出：
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
var num = interval(1000);  //每秒发出自增的值
num.subscribe((value) => {
    console.log(value);
})
num.pipe(
    map(() => 10)
).subscribe((value) => {
    console.log(value);
})
