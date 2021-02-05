import Header from '../containers/header';
import Search from '../containers/search';
import Students from '../containers/students';
import { getAllStudents } from '../actions/index';
const Home = ({history})=>{
    return <div>
        <Header/>
        <Search/>
        <Students history={history}/>
    </div>
}

export default Home