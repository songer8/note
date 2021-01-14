### 分支管理
![branch management](../image/branch-management.jpg)

- checkout出来的分支，就是本地的分支；
- 第二步提交代码前，需要git add . git commit -m"***";
- HEAD标识当前分支,origin标示远程;
- merge 是为了多人提交，不会出现代码覆盖的问题,每次开发前后都要git merge，减少冲突；
ps:提交代码步骤1:把远程develop分支的代码merge到本地分支来
- create merge request不是属于某个分支，assignee选择review人，submit即可；
