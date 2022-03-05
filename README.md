# 记录React学习过程

# 什么是React
我理解的React就是一个构建用户界面的js库，它更注重View层面的东西。可以将页面分为多个组件，进行组件化开发，最后将合适组件渲染到页面当中。
React开发灵活，高效，使用jsx语法；使用虚拟DOM减少与DOM的交互，提高性能；组件化的开发可以更好的复用。

# jsx
jsx是js的扩展语法，jsx执行速度更快，更高效，并且是类型安全的，在编译阶段就能发现错误。  
jsx有以下语法规则：  
 - 没有if...else...语法，可以用三元运算符代替；
 - 内联样式需要在{}内写，并且写成对象形式
 - 注释也要写在{}中
 - 类名要写成className

# 组件
## *类组件

## *函数组件

# state
state是用来管理组件中需要用到的数据的。可以使用this.setState()方法来修改state。state在组件内部初始化，可以被组件自身修改，而外部不能访问也不能修改。

没有state的组件叫无状态组件，设置了state的叫做有状态组件，**我们要尽量多写无状态组件，更便于维护**

## *setState()是异步还是同步的
    在一个事件函数中，不管setState()被调用多少次，都会在函数执行结束后，统一归结为一次重新渲染，这样做可以【优化性能】，这使得setState()表现为异步的。
## * 什么情况下，setState()表现为异步
    在react中的合成事件(onClick)或钩子函数(constructor)里面调用setState()

    - 当setState处在同步的逻辑中，则表现为异步更新状态
    - 当setState处在异步的逻辑中，则表现为同步更新状态

## *如何将setState()变为同步
    1. 在setState()传入state（可以理解成上一次的state）作为参数，根据上一次state改变当前state。
    2. 使用setTimeout()包裹setState()


# props
可以通过给某个组件标签增加属性的方式来给该组件传递props。
也可以通过[component].defaultProps属性来指定默认的props值

## *props和state的区别
1. 组件不可自己随意修改props，而state可以通过setState()修改。
2. props可以从父组件获取，state不可以

## *Props 验证
可以通过props-type来对接收的props进行类型限制，例如：
```js
// 对props进行类型限定
static propTypes = {
  todos: PropTypes.array.isRequired,
  updateTodos: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}
```

# ref
可以通过ref获取DOM元素，例如：
```js
<input ref={content => { this.c = content }} type="text" />
consloe.log(this.c)  // <input type="text">
consloe.log(this.c.value)  // 可以得到输入框的内容
```

## *注
    在react中尽量少使用ref

# 事件处理
通过onXxx属性指定事件处理函数  
React使用的是自定义（合成）事件，而不是使用的原生DOM事件 ---- 为了更高的兼容性。  
React中的事件是通过事件委托方式处理的（委托给组件最外层的元素） ---- 为了更高效。  
通过event.target得到发生事件的DOM元素对象。

# react事件绑定和原生事件绑定的区别
react中的事件是绑定到document上面的，而原生的事件是绑定到dom上面的。

## *react事件绑定的优点
所有事件都代理到document，达到性能优化的目的

# 受控组件与非受控组件
## *受控组件
在React中，可变状态通常保存在组件的状态属性(State)中，
并且只能使用 setState() 更新，
而呈现表单的React组件也控制着在后续用户输入时该表单中发生的情况，
以这种由React控制的输入表单元素而改变其值的方式，称为：“受控组件”。

## *非受控组件
React要编写一个非受控组件，可以使用ref来从DMO节点中获取表单数据。

# 父子组件通信
## *子传父
父组件给子组件一个函数属性，子组件接收到该属性后，在某些事件发生后对函数进行回调，告知父组件，父组件对某些状态进行更改

## *父传子
通过给组件声明属性给子组件传值

# 非父子组件通信的方式
## *状态提升
React中的状态提升就是一个组件将想要共享的状态传给公共父组件，然后在父组件上改变这个状态，通过props传给另一个组件

## *消息订阅
步骤：  
1. 组件A订阅消息
```js
// 订阅消息
// 第一个参数updateState是订阅名，第二个参数是data，表示接收到的消息数据
this.token = Pubsub.subscribe('updateState', (_, stateObj) => {
  this.setState(stateObj)
})
```
2. 组件B发布消息，更改state数据
```js
Pubsub.publish('updateState', { isFirst: false, isLoading: true })
```
3. 组件A接收到消息，根据消息重新渲染页面
4. 组件A在componentWillUnmount()取消订阅
订阅消息可以在componentDidMount()钩子函数中进行

## *context状态树传参


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

    