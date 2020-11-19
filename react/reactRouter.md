### 如何区分Hash Router和Browser Router；
1. url里面“#”后面的是Hash；
ps：“#”后面做定位跳转，实际在同一html里面
2. 全是“/”的是Broswer；
ps：path指向服务端的文件夹，因此服务端不干预情况下请求的都是不同html；

### Hash Router和Browser Router的区别：
1. Hash Router是通过监听hash的变化来渲染不同组件的；
   Broswer Router是通监听path的变化；
2. Hash Router在路由切换的过程中不会发起请求；
   Broswer Router会向服务端发送请求，因此需要服务端Ngix配合，确保不同的请求返回同一个html；（主要应用场景：SEO，因为百度爬虫无法识别不同Hash，会认为网站很小）

### 应用
- <Route />里面是hash和组件的对应关系，形成路由。
```html
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
	return (
		<div className="App">
			<Router>
				<Route
					render={() =>
						user.isLogin() ? (
							<React.Fragment>
								<Switch>
									<Route path="/question/:taskNumber/:questionNumber" component={Question} />
									<Route path="/done/:taskNumber" component={Done} />
									{/* <Route path="/test" component={Test} /> */}
									<Route path="/logout" component={Logout} />
									<Route path="/data" component={Data} />
									<Route path="/home" component={Home} />
									<Route>
										<Introduction /> 
									</Route>
								</Switch>
							</React.Fragment>
						) : (
								<Login />
							)}
				/>
			</Router>
		</div>
	);
}

export default App;
```