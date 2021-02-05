import { connect } from 'react-redux';
import Student from '../components/student';
import { getAllStudents } from '../actions';

const StudentsList = ({ list ,history}) => {
    console.log(list);
    if (list) {
        if (list.length > 0){
            return (
                <div className="alert ">
                    <Student studentData={list} history={history}></Student>
                </div>)
        }
        return <p>
        No Avialable Students 
    </p>
    }
    return <p>
        No Avialable Students!!
    </p>
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        list: state.students.list
    }
}

export default connect(mapStateToProps, null)(StudentsList)