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

# 路由的基本使用
1. 明确好界面中的布局
2. 路由标签使用Link进行跳转
3. 使用Route标签进行路径的匹配
4. <App />最外侧包裹着<BrowserRouter>

# 路由组件和与一般组件的区别
1. 写法不同：
    一般组件： <Demo />
    路由组件：<Route path="/demo" component={Demo}>
2. 接收到的props的不同
    一般组件：写组件标签时传递了什么，就能收到什么
    路由组件：接收到三个固定的属性:location、history、match

# NavLink和MyNavLink
1. NavLink可以实现路由链接的高亮，通过activeClassName指定样式名
2. 标签体内容是一个特殊的标签属性
3. 通过this.props.children可以获取标签体内容

# 模糊匹配与严格匹配
1. 默认使用模糊匹配，【输入的路径】必须包含要【匹配的路径】，且顺序一致
2. 开启严格匹配，加exact关键字
3. 严格匹配不需要便不要开启, 否则无法继续匹配二级路由
