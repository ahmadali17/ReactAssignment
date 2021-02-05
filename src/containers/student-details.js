import { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getStudentDetails,clearStudentDetails } from '../actions'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import Header from './header';
import axios from 'axios';
import { deleteStudent } from '../actions/index';
const StudentDetails = ({ getStudentDetails,clearStudentDetails, details, match }) => {
    const id = match.params.id
    console.log(id)
    useEffect(() => {
        
        getStudentDetails(id)

        return ()=>{
            console.log('clear')
            clearStudentDetails()
        }
    },[])

    
    const renderStudentDetails = (details) => {
        if (details && details.id) {
            return (
                <div>
                    <Card>
                        <CardBody>
                        <CardTitle tag="h5">Name: {details.name}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Id: {details.id}</CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Age: {details.age}</CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Phone: {details.phone}</CardSubtitle>

                        <Button color="danger" onClick={
                            ()=>{
                                deleteStudent(details.id)
                            }
                        }>Delete</Button>
                        </CardBody>
                    </Card>
                </div>
            )
        }
        return ''
    }
    return (
        <div className="container">
        <Header></Header>
        {renderStudentDetails(details)}
    </div>)

}


const mapStateToProps = (state) => {
    console.log(state)
    return {
        details: state.students.details
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getStudentDetails ,clearStudentDetails}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentDetails)

