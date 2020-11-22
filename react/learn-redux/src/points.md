### react应用步骤
1. 定义action；
2. 定义reducer；通过type绑定action和reducer的关系；
3. combineReducers，将reducer全部包在一起，并命名reducer；
4. 在index.js里面createStore，并将allReducers包在里面；
5. 在app.js里面，通过useSelect绑定state，通过usePatch绑定Actions里面的方法；
6. ps：进阶：可以在action定义入参,reducer里面用到action里面的入参，app.js里面输入入参执行；
