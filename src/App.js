import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/home'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers'
import promiseMW from 'redux-promise';
import AddStudent from './containers/add-student';
import NotFound from './components/not-found';
import  StudentDetails from './containers/student-details';
const createStoreWithMW = applyMiddleware(promiseMW)(createStore)
const App = () => {
    return (
        <Provider store={createStoreWithMW(reducers)}>
            <BrowserRouter>
                <div className="conatainer">
                    <div className="row">
                        <div className="col">
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/addstudent" component={AddStudent} />
                                <Route path="/students/:id" component={StudentDetails} />
                                <Route path="*" component={NotFound} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </Provider>
    )
}
export default App