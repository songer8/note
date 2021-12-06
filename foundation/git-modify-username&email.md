
git 修改当前的project的用户名的命令为：
```
git config user.name 目标用户名
```

git修改当前的project提交邮箱的命令为：
```
git config user.email 目标邮箱名
```
**注意：需要cd到当前project里面；**

如果你要修改当前全局的用户名和邮箱时，需要在上面的两条命令中添加一个参数，–global，代表的是全局。
命令分别为：
```
git config --global user.name 目标用户名
git config --global user.email 目标邮箱名
```