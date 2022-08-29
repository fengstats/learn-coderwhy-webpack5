const message = 'Hello World'

const foo = (info) => {
  console.log(info)
}

foo(message)

// 1. 原生代码
// 2. 词法分析 Lexical Analysis（关键字、标识符...）
// 3. 生成 tokens 数组，针对代码每一个值进行分类 如 { type: 'Keyword', value: 'const' }
// 4. 语法分析（syntactic analysis）
// 5. AST（abstract syntax tree）抽象语法树
// 6. 遍历（Traversal）
// 7. 访问（Visitor）
// 8. 应用插件（Plugin）
// 9. 新的 AST
// 10. 生成目标代码
