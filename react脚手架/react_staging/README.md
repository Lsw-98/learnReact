# todoList 相关知识点

1. 拆分组件、实现静态组件，注意：className、style的写法
2. 动态初始化列表，如何确定将数据放在哪个组件的state中
    ---- 某个组件使用：放在该组件自身
    ---- 某些组件使用：放在共同的父组件中（状态提升）
3. 父子组件通信：
    ---- 父组件给子组件传递数据：通过props
    ---- 子组件给父组件传递数据：通过props，要求父组件给子组件传递一个函数
4. 注意delfaultChecked和checked的区别，类似的还有defaultValue和value
5. 状态在哪里，操作状态的方法就在哪里

# github搜索案例知识点
1. 设计状态时要考虑全面，例如带有网络请求的组件，要考虑网络请求前后各个状态的变化
2. ES6小知识点：解构赋值与重命名
    let obj = {a:{b:1}}
    const {a} = obj   // 传统解构赋值
    const {a:{b}} = obj  // 连续解构赋值
    const {a:{b:value}} = obj   // 连续解构并重命名
3. 消息订阅与发布机制
    1. 在componentDidMount()函数中订阅，先订阅、再发布
    2. 适用于任意组件通信
    3. 要在组件的componentWillUnmount()函数中取消订阅