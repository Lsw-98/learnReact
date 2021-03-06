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

# refs
refs：提供了一种方式，是我们可以访问DOM节点或在render方法中创建React元素。

以下几种情况适用于refs：
1. 管理焦点，例如文本框或媒体播放
2. 触发强制动画
3. 集成第三方DOM库

在官方文档中，<font color="#FF6347">React提醒我们不要过度使用refs</font>。

## **回调形式的refs**
在React16.3之前，都是使用回调函数的方式使用refs。

<font color="#FF6347">这个回调函数接收React组件实例或DOM元素作为参数，以使他们能在其他地方被存储和访问</font>。

下面是一个<font color="#FF6347">关于refs使用回调函数获取输入框焦点</font>的例子：
```js
import React, { Component } from 'react'

export default class Home extends Component {
  constructor(props) {
    super(props)
    // 首先设置节点为 null
    this.textInput = null

    this.setTextInputRef = element => {
      // 调用回调函数，将输入框的DOM赋值给textInput
      this.textInput = element
    }

    this.focusTextInput = () => {
      // 使用原生DOM API使text输入框获得焦点
      if (this.textInput) {
        // 先让文本框失去焦点，然后点击按钮后使文本框得到焦点
        this.textInput.focus()
      }
    }
  }

  componentDidMount() {
    // 组件被挂载后，让文本框自动获得焦点
    this.focusTextInput()
  }

  render() {
    return (
      <div>
        {/* 使用ref的回调函数将text输入框DOM节点的引用存储到React */}
        <input type="text" ref={this.setTextInputRef} />
        <input type="button" value="Focus the text input" onClick={this.focusTextInput} />
      </div>
    )
  }
}
```
上面的例子，在React组件挂载时，会调用ref回调函数并传入DOM元素，当卸载时又会传入null。<font color="#FF6347">在componentDidMount和componentDidUpdate触发前，React会保证refs一定是最新的</font>。


## **createRef**
### **Refs的创建**
在React 16.3之后，<font color="#FF6347">Refs使用React.createRef()创建</font>，通过ref属性附加到React元素。<font color="#FF6347">在组件中通常将refs赋值给属性值，方便在整个组件中使用它们</font>。
```js
import React, { Component } from 'react'

export default class Home extends Component {
  constructor(props) {
    super(props)
    // 将ref属性赋值给一个实例属性
    this.myRef = React.createRef()
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.myRef} />
      </div>
    )
  }
}
```

### **访问Refs**
可以通过ref的current访问DOM元素。
```js
componentDidMount() {
  // 在组件的任何地方都可以使用
  console.log(this.myRef.current);   // <input tepe="text">
}
```

ref的值根据节点的类型而有所不同：
- 当ref属性属于HTML元素时，ref接收到的就是DOM元素
- 当ref属性属于React组件时，ref接收到的就是组件实例
- 不可以再函数式组件上使用ref，因为函数式组件没有实例

### **使用createRef实现输入框自动获得焦点**
```js
import React, { Component } from 'react'

export default class Home extends Component {
  constructor(props) {
    super(props)
    // 将ref属性赋值给一个实例属性
    this.textInputRef = React.createRef()
  }

  componentDidMount() {
    // 在组件的任何地方都可以使用
    this.textInputRef.current.focus()
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.textInputRef} />
      </div>
    )
  }
}

```

### **为class组件添加ref**
```js
import React, { Component } from 'react'

export default class About extends Component {
  constructor(props) {
    super(props);
    // 创建一个 ref 来存储 textInput 的 DOM 元素
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // 直接使用原生 API 使 text 输入框获得焦点
    // 注意：我们通过 "current" 来访问 DOM 节点
    this.textInput.current.focus();
  }

  render() {
    // 告诉 React 我们想把 <input> ref 关联到
    // 构造器里创建的 `textInput` 上
    return (
      <div>
        <input
          type="text"
          ref={this.textInput} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}
```

```js
import React, { Component } from 'react'
import About from '../About'

export default class Home extends Component {
  constructor(props) {
    super(props)
    // 将ref属性赋值给一个实例属性
    this.textInputRef = React.createRef()
  }

  componentDidMount() {
    // 在组件的任何地方都可以使用
    this.textInputRef.current.focusTextInput()
  }

  render() {
    return (
      <div>
        <About ref={this.textInputRef} />
      </div>
    )
  }
}
```

## Context
Context提供了一个<font color="#FF6347">无需为每层组件手动添加props，就能在组件树间进行数据传递</font>的方法。某些属性很多组件都需要用，Context提供一种在组件之间共享此类值得方式，而不必显示地通过组件逐层传递props。

### **Context的API**
1. React.createContext
```js
const MyContext = React.createContext(defaultValue);
```
<font color="#FF6347">创建一个Context对象，当React渲染一个订阅了这个Context对象（MyContext）的组件，这个组件会从组件树中查找离自己最近的`Provider`，读取当前的Context值</font>。

<font color="#FF6347">将undefined传递给Provider的value时，defaultValue不会生效</font>。

2. Context.Provider
```js
<MyContext.Provider value={/* 某个值 */}>
```
每个Context对象都会返回一个Provider React组件，它允许组件订阅context的变化。Provider接收一个value属性，传递给组件。一个Provider可以和多个组件右对应关系。<font color="#FF6347">多个Provider也可以嵌套使用，里层的会覆盖外层的</font>。

<font color="#FF6347">当Provider中的value值发生变化时，内部的所有组件都会重新渲染</font>。而value值是否发生变化是通过<font color="#FF6347">浅比较</font>决定的，所以<font color="#FF6347">当Provider的父组件进行重新渲染时，可能会在Provider包含的组件中发生意外渲染</font>。

例如：当Provider 重渲染时，由于 value 属性总是被赋值为新的对象，以下的代码会重新渲染Provider下面所有的组件：
```js
class App extends React.Component {
  render() {
    return (
      <MyContext.Provider value={{something: 'something'}}>
        <Toolbar />
      </MyContext.Provider>
    );
  }
}
```
<font color="#FF6347">为了防止这种情况，可以把value中的属性提升到state中</font>。

```js
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {something: 'something'},
    };
  }

  render() {
    return (
      <MyContext.Provider value={this.state.value}>
        <Toolbar />
      </MyContext.Provider>
    );
  }
}
```

3. contextType
```js
class MyClass extends React.Component {
  componentDidMount() {
    let value = this.context;
    /* 在组件挂载完成后，使用 MyContext 组件的值来执行一些有副作用的操作 */
  }
  componentDidUpdate() {
    let value = this.context;
    /* ... */
  }
  componentWillUnmount() {
    let value = this.context;
    /* ... */
  }
  render() {
    let value = this.context;
    /* 基于 MyContext 组件的值进行渲染 */
  }
}
MyClass.contextType = MyContext;
```
挂在class上的contextType属性可以赋值为由 React.createContext() 创建的 Context 对象，<font color="#FF6347">可以通过this.context获取最近的Context上的值</font>。

4. Context.Consumer
```js
<MyContext.Consumer>
  {value => /* 基于 context 值进行渲染*/}
</MyContext.Consumer>
```
Consumer可以让你在函数式组件中订阅context。

### **何时使用Context**
Context设计的目的是共享那些对于一个组件树而言是”全局“的数据，例如：当前认证的用户、主题或首选语言。

**逐层传递props**
```js
import React from 'react'
import { Button } from 'antd'

export default function Home() {
  return (
    <div>
      <Toolbar theme="dark" />
    </div>
  )
}

function Toolbar(props) {
  return (
    <div>
      {/* 
        Toolbar组件接受一个额外的theme属性，然后传递给ThemedButton组件，
        如果React应用中每个按钮都需要这样，那就很繁琐 
        因为对于theme这个属性必须逐层传递
      */}
      <ThemedButton theme={props.theme} />
    </div>
  )
}

class ThemedButton extends React.Component {
  render() {
    return <Button theme={this.props.theme} />
  }
}
```

**使用Context进行传递**
```js
import React from 'react'
import { Button } from 'antd'

// 1. 为theme创建一个context，createContext('light')中的light为默认值
const ThemeContext = React.createContext('light')

export default function ContextDemo() {
  return (
    // 2. 使用Provider将想要共享属性的组件包裹起来
    // 这样无论组件树多深。都可以访问到Context定义的属性
    <ThemeContext.Provider value='dark'>
      <Toolbar />
    </ThemeContext.Provider>
  )
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  )
}

class ThemedButton extends React.Component {
  // 3. 指定contextType读取当前的theme context
  // React会向上找到最近的theme Provider，然后使用它的值
  static contextType = ThemeContext

  handleClick = () => {
    console.log(this.context);
  }

  render() {
    return (
      <Button theme={this.context} onClick={this.handleClick} />
    )
  }
}
```

**使用多个context**
```js
import React from 'react'
import { Button } from 'antd'

// 1. 为theme创建一个context
const ThemeContext = React.createContext('light')
const ColorContext = React.createContext('red')

export default function ContextDemo() {
  return (
    // 2. 使用Provider将想要共享属性的组件包裹起来
    // 这样无论组件树多深。都可以访问到Context定义的属性
    <ThemeContext.Provider value='dark'>
      <ColorContext.Provider value='blue'>
        <Toolbar />
      </ColorContext.Provider>
    </ThemeContext.Provider>
  )
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  )
}

class ThemedButton extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {
          (theme) => (

            < ColorContext.Consumer >
              {
                (color) => (
                  <Button theme={theme} color={color} />
                )
              }
            </ColorContext.Consumer>
          )
        }
      </ThemeContext.Consumer>
    )
  }
}
```

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

# React插槽

```html
  <script type="text/babel">
    class Child extends React.Component {
      render() {
        return (
          <div>
            Child
            {/*
                插槽
                Child标签中的所有内容，都在props.children属性中
                this.props.children[index]
            */}
            {
              this.props.children[1]
            }
          </div>
        )
      }
    }

    class Person extends React.Component {
      render() {
        return (
          <div>
            <Child>
              {/*
                这里不会显示<div>1111</div>
                渲染到<Child>时react会把整个Child组件替换Child标签里的所有内容
              */}
              <div>1111</div>
            </Child>
          </div>
        )
      }
    }

    ReactDOM.render(<Person />, document.getElementById("test"))
  </script>
```

# 生命周期
组件的生命周期
1. 初始化阶段：由ReactDOM.render()触发---初次渲染
    1. constructor()
    2. componentWillMount()
    3. render()   常用
    4. componentDidMount()  常用
      一般在componentDidMount()函数中做初始化的事情，例如：开启定时器、发送网络请求、订阅消息
2. 更新阶段，由组件内部的this.setState()或父组件重新渲染render触发
    1. shouldComponentUpdate()
    2. componentWillUpdate()
    3. render()
    4. componentDidUpdate()
3. 卸载阶段，由ReactDOM.unmountComponentAtNode()触发
    1. componenetWillUnmount()  常用
      一般在componenetWillUnmount()做一些收尾的事情，例如：关闭定时器、取消订阅消息

# hook
hook可以在让我们在函数式组件中应用state。
## *相关代码放在react_hook下 
## *useState
useState()用于保存组件状态。
```js
// 数组中第一个参数是状态名，第二个参数改变该状态的唯一方法
const [text, setText] = useState("")
const [list, setList] = useState(["aa", "bb", "cc"])
```

## *useEffect
useEffect可以取代生命周期函数，在任何状态更新后都会执行。
```js
// useEffect类似于componentDidMount
useEffect(() => {
  // 设置副作用
  
  return () => {
    // 清理副作用
  }
}, [/*依赖*/])

// 依赖可以绑定多个状态，只有当绑定的状态发生改变时，才会触发useEffect函数
// 如果传入空数组，则任何状态发生改变都不会触发useEffect函数
```

## *useCallback(记忆函数)
useCallback()起缓存作用，防止因为组件重新渲染，导致方法被重新创建，只有在第二个参数变化了后，方法才重新声明一次。

```js
const handleClick = useCallback(() => {
  ...
}, [/*依赖*/])
```

useCallback()返回的是一个memoized(缓存)函数，仅在其绑定的一个依赖项变化后才更改，可以防止不必要的渲染。useCallback()的实现原理是：当使用一组参数初次调用函数时，会缓存参数和计算结果，当再次使用相同的参数调用该函数时，会直接返回相应的缓存结果。

## useMemo(记忆组件)
useCallback与useMemo的功能相同，类似于Vue中的计算属性。
```js
useCallback(fn, inputs) === useMemo(() => fn, inputs)
```
唯一区别在于：useCallback不会执行第一个参数，而是将它返回给你，而useMemo会执行第一个函数并将函数执行结果返回给你。   
所以useCallback常用于记忆事件函数，生成及以后的事件函数并传递给子组件使用，而useMemo更适合经过函数计算得到一个确定的值，比如记忆组件。

## useRef(保存引用值)

## useContext(跨组件共享数据)
使用useContext有以下步骤：
1. React.createContext();创建一个TestContext对象
2. TestContext.Provider包裹子组件
3. 数据放在<TestContext.Provider value={value}>的value中
4. 子组件中通过useContext(TestContext)获取值

```js
const Child1 = () => {
  // 子组件通过useContext(TestContext)获取值
  const value = useContext(TestContext);
  return (
    <div>
      {(() => console.log('Child1-render'))()}
      <h3>Child1-value: {value}</h3>
    </div>
  );
}
```

## useReducer
useReducer()类似于Redux。useReducer()接收一个reducer()函数作为参数，reducer()接收两个参数，第一个是state，第二个是action。
useReducer()返回两个参数，第一个是state，返回状态中的值，第二个是dispatch，用于发布事件来更新state。
```js
// 处理函数
const reducer = (preState, action) => {
  // 这里可以用switch来接收dispatch事件
}

// 外部状态
const intialState = () => {

}

function App() {
  const [state, dispatch] = useReducer(reducer, intialState)
  return (
    <div className="App">
      ...
    </div >
  );
}
```

## 自定义hooks
当我们想在两个函数之间共享逻辑（有相同代码段），我们就可以使用自定义hooks，将公共代码提取到第三个函数中。**自定义组件必须已use开头。**

# 路由
我理解的路由就是根据不同的url展示不同的组件，是一种url与components的映射关系。

## 路由重定向
```js
<Redirect from='/' to='/films' />
```
from代表哪个url需要重定向，to代表重定向到哪个url，component代表重定向到url对应的组件

## 实现路由精准匹配的两种方式
### *Switch
Switch用来实现页面的唯一渲染，Switch从上到下依次匹配Route，直到匹配到一个Route，就跳出匹配。  
因为Redirect默认使用的是模糊匹配，如果不加上Switch限制，会导致路由匹配可能发生错误。
### *exact
可以给Redirect加上exact属性，使Redirect只可以匹配到'/'。

## 路由嵌套
二级路由必须写到一级路由对应的组件下，不可以统一写到indexRouter.js中，因为在indexRouter.js体现不出父子关系。

## 声明式导航
### *Link
在react中，使用<Link>标签实现路由跳转，使用<Link>标签时，<font color="#FF6347">url会更新，组件会重新渲染，但页面不会重新加载</font>。

### *NavLink
<NavLink>是特殊的<Link>，会在匹配上当前的url的时候给已渲染的元素添加参数。
```js
 <NavLink to="/films">电影</NavLink>
```

### <font color="#FF6347">*在使用NavLink时遇到的错误</font>
```js
Uncaught Error: Invariant failed: You should not use <NavLink> outside a <Router>
```
该报错信息是说:不能再<Router>之外使用<NavLink>,解决方法有两种:
1. 修改 index.js入口文件
在`<App />`外层包裹<Router>
```js
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
```

2. 使用插槽
将使用了<NavLink>组件包裹在<Router>中。
```js
<MRouter>
  {/* 将Tabbar作为插槽放在MRouter中 */}
  <Tabbar></Tabbar>
</MRouter>
```
然后/router/IndexRouter.js中使用props进行渲染。
```js
<HashRouter>
  <Switch>
    <Route path="/films" component={Films}></Route>
    <Route path="/cinemas" component={Cinemas}></Route>
    <Route path="/center" component={Center}></Route>
    {/* 
      重定向
    */}
    <Redirect exact from='/' to='/films' />
  </Switch>
  {this.props.children}
</HashRouter>
```

## activeClassName
当激活了某一项时,会加上activeClassName属性,否则不加。使用这个可以实现高亮效果。
```js
<ul>
  <li>
    <NavLink to="/films" activeClassName='active'>电影</NavLink>
  </li>
  <li>
    <NavLink to="/cenimas" activeClassName='active'>影院</NavLink>
  </li>
  <li>
    <NavLink to="/center" activeClassName='active'>我的</NavLink>
  </li>
</ul>
```

## 编程式导航
NowPlaying是films的孩子，可以接收到props，可以使用this.props.history下的方法实现编程式导航。  
也可以使用React hooks封装的useHistory进行函数式编程。  
编程式导航常用到的方法:
 - go
 - goBack
 - goForward

## 动态路由
在路径后跟上`/:路径名`，例如：
```js
<Route path="/detail/:id" component={Detail}></Route>
```
表示id这一级路由是动态变化的。  
使用动态路由会将动态变化的路径值传过去。在`props.match.params`中可以找到动态变化的路径值。（<font color="#FF6347">一种路由传参方式</font>）
  
## 路由传参方式
1. 动态路由
2. query传参
    - 使用props.history.push()方法，该方法接收两个参数，第一个参数为要传参的地址(组件)，第二个参数为query，query接收一个对象类型，代表需要传递的数据
    - 在props.location.query查看接收到的参数
```js
  // A路由
  props.history.push({ pathname: "/detail", query: { id } })

  // Detail路由
  console.log(props.location.query)  // {id: 5860}
```       
    
3. state传参
与query传参相同。

### *三种传参方式的不同
 - 动态路由传递的参数会在地址栏显示，query和state不显示
 - state传参是加密的，刷新地址栏，参数不会丢失；query刷新地址栏，参数会丢失

## 路由拦截
当一个用户是第一个次浏览一个网站时，在他使用某些功能之前可能需要登录注册等操作，这时候就要判断用户是否已经登录，若没有登录，需要将路由拦截，并重定向到指定的url下。

```js
// Center页面
function isAuth() {
  return localStorage.getItem("token")
}

<Route path="/center" render={(props) => {
  return isAuth() ? <Center {...props} /> : <Redirect to="/login" />
}}></Route>

// Login页面
localStorage.setItem("token", "123")
props.history.push('/center')
```

上述代码是判断用户在进入`<Center />（个人中心）`页面之前是否已经登录，如果没有登录，要将url重定向到`<Login />`页面，然后在 `<Login />`页面进行token设置，再跳转回center界面。

使用render写法跳转到`<Center />`后，不能得到props对象，<font color="#FF6347">需要在回调函数内手动传入props</font>。

# WithRouter
WithRouter可以将将react-router的 history、location、match 三个对象传入props对象上

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

## Router v6
```js
// history模式
<BrowserRouter>
  {/* 路由入口：指定跳转到哪一个组件，to用来配置路由地址 */}
  <Link to='/'>首页</Link>
  <Link to='/about'>关于</Link>
  <Link to='/login'>登录</Link>
  {/* 路由出口：路由对应的组件会在这里进行渲染 */}
  <Routes>
    {/* 指定路径和组件的对应关系，用于指定导航链接，完成路由匹配 */}
    <Route path="/" element={<Home />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/login" element={<Login />}></Route>
  </Routes>
</BrowserRouter >
```

- Link：路由入口，用于指定导航链接，完成路由跳转，最终渲染为a标签
- Routes：路由出口，路由对应的组件在Routes中进行渲染
- Route：指定路由地址与组件的对应关系，用于指定导航链接，完成路由匹配
- BrowserRouter：history模式

### **编程式导航**
Router v6通过useNavigate钩子函数实现编程式导航
```js
import { useNavigate } from 'react-router-dom'
// 指定钩子函数得到跳转函数
const navigate = useNavigate()
// 执行跳转函数，跳转到about页
navigate('/about')   // 相当于push
navigate('/about', { replace: true })   // 相当于replace
navigate(-1)    // 相当于back
navigate(1)     // 相当于forward
navigate(-2)    // 相当于go
```

### **传参**
Router v6有两种传参方式
1. searchParams传参
```js
// 传参：
navigage('/about?id=1001')
// 取参：
let [params] = useSearchParams()
let id = params.get('id')
```
params是一个对象，里面包含很多方法：get、append、delete、forEach等，可以对传来的参数进行操作。


2. params传参
```js
// 传参：
navigage('/about/1001')
// 取参：
let params = useParams()
let id = params.id
```
第二种方法的参数就是一个参数对象。

### **嵌套路由**
1. 定义嵌套路由声明
```js
{/* 指定路径和组件的对应关系，用于指定导航链接，完成路由匹配 */}
<Route path="/" element={<Home />}>
  {/* 定义二级路由 */}
  <Route path='board' element={<Board />}></Route>
  <Route path='article' element={<Article />}></Route>
</Route>
```

2. 使用<Outlet />指定二级路由出口     
然后再Home组件中配置二级路由出口。
```js
import { Outlet } from 'react-router-dom'
{/* 二级路由出口 */}
<Outlet></Outlet>
```

### **配置默认路由**
使用index关键字配置默认路由
```js
<Route index element={<Board />}></Route>
```

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

    