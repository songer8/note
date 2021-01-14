### fetch
- fetch本质上是个promise，因此只能return一个promise；（不能return一个具体的值）
- 因此只能把想做的事情，放在fetch里面执行；
- 不想要fetch里面的逻辑太多，可以把外部的方法用函数包裹，再放到fetch里面执行；