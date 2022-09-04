// === Mangle options

// keep_fnames: true => function sayHello(){console.log("hello")}
// function sayHello() {
//   console.log('hello')
// }

// keep_classnames: true => class Person{}
// toplevel: true => class s{}
// tip：搭配 toplevel 使用才有效果，不然默认就是 true 的效果
// class Person {}

// === Compress options

// dead_code: true => 没有代码生成
// if (false) {
//   console.log('测试一下 Terser 是否会移除这段代码')
// }

// arguments: true => function sum(n1,n2){return n1+n2}
// function sum(n1, n2) {
//   return arguments[0] + arguments[1]
// }

// arrows: true => const obj={say:()=>"hello"};
// const obj = {
//   say() {
//     return 'hello'
//   },
// }

export {}
