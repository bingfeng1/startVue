# VUE学习
# 数据绑定
通过构造函数Vue，创建一个Vue的根实例，并启动Vue应用
```
const app = new Vue({
    el:"#app"
})
```
- 里面的el，可以通过app.$el获取该节点
- app.a 获取data内部的属性
- {{}}内部可以计算，可以三目，但不能使用用户自定义的全局变量