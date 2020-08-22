import React, { Component } from 'react';
import './App.css';

//first we will make anew context

const UserContext = React.createContext();
const ArticleContext = React.createContext();
const CommentContext = React.createContext();

// then create a provider component
class UserProvider extends Component {
  state = {
    name: 'Ann',
    age: 10,
    sexual: "female"
  }

  setUser = (user) => {
    this.setState({
      name: user.name,
      age: user.age,
      sexual: user.sexual
    })
  }

  componentDidMount() {
    console.log(this.props.children)
  }
  render() {
    return (
      // 以对象的方式将属性和方法传给children；
      <UserContext.Provider value={{ user: this.state, setUser: this.setUser }}> 
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

//函数组件
const Family = (props) => (
  <div className="family">
    <Person />
  </div>
)

class Person extends Component {
  static contextType = UserContext;//静态成员变量，效果等同于UserContext.Consumer；
  state = {}
  render() {
    return (
      // <UserContext.Consumer>
      //   {(user) => {
      //     return (
      <div className="person">
        {/* <p>i am {user.name}</p> */}
        {this.context.user.name}
        <button onClick={() => {
          this.context.setUser({
            name: 'Bnn',
            age: 10,
            sexual: "male"
          })
        }}>按钮</button>
      </div>
      //   )
      // }}
      // </UserContext.Consumer>
    );
  }
}
// Person.contextType=UserContext;

class App extends Component {
  state = {
    article: {
      no: 20200110,
      page: 200
    },
    comment: {
      uid: 111
    }
  }

  render() {
    return (
      //构建UserProvider组件，优化组件结构，组件内的属性和方法都在UserProvider组件内；
      <UserProvider>
        <ArticleContext.Provider value={this.state.article}>
          <CommentContext.Provider value={this.state.comment}>
            <section>
              <p>i am the App</p>
              <Family />
            </section>
          </CommentContext.Provider>
        </ArticleContext.Provider>
      </UserProvider>

    );
  }
}

export default App;