# 记录React学习过程

# 什么是React


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

# 向路由组件传递参数
1. params参数
    第一步：路由标签（携带参数）：<Link to={`/home/messages/detail/${item.id}/${item.title}`}>{item.title}</Link>
    第二步：注册路由（声明接收）：<Route path='/home/messages/detail/:id/:title' component={Detail} />
    第三步：路由组件（接收参数）：const { id, title } = this.props.match.params
2. search参数
    第一步：路由标签（携带参数）：<Link to={`/home/messages/detail/?id=${item.id}&title=${item.title}`}>{item.title}</Link>
    第二步：注册路由（声明接收）：无需声明
    第三步：路由组件（接收参数）：
                                先从this.props.location接收到search，
                                再调用qs.parse(search.slice(1))解析为对象格式
                                最后进行解构
3. state参数
    第一步：路由标签（携带参数）：<Link to={{ pathname: "/home/messages/detail", state: { id: item.id, title: item.title } }}>{item.title}</Link>
    第二步：注册路由（声明接收）：无需声明
    第三步：路由组件（接收参数）：const { id, title } = this.props.location.state || {}


# Redux

Redux是一个专门用于管理状态的JS库，可以集中式管理React中多个组件共享的状态。

## * 什么情况下可以使用Redux
    1. 某个组件的状态，需要让其他组件使用时（共享）
    2. 一个组件需要更改另一个组件的状态（通信）

## * redux的三个核心概念
### ** action
    action是动作的对象，包括两个属性：
    1. type：动作的类型，值为字符串，必要属性，唯一
    2. data：数据属性，值任意，可选属性
    例如：{type:"add_one", number:1}

### ** store
    store将action、reducer、state联系到了一起

### ** reducer
    reducer可以初始化状态，也可以更新状态

## * 求和案例
### redux的API

1. createStore(reducer, [preloadedState], enhancer)  
    用于创建一个Redux store 来以存放应用中所有的 state。  
    应用中应有且仅有一个 store。
    * reducer (Function): 接收两个参数，分别是当前的 state 树和要处理的 action，返回新的 state 树

2. getState()：返回应用当前的state树
3. dispatch(action)：分发action，是触发state变化的唯一途径
4. subscribe(listener) 添加一个变化监听器，每当dispatch(action)的时候，就会执行。state 树中的一部分可能已经变化，可以在回调函数里调用 getState() 来拿到当前 state。    

    