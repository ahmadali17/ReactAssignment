
import {
    FormGroup,
    Label,
    Input,
    Button,
  } from 'reactstrap';
import {getStudents, getAllStudents} from '../actions/index';
import { useRef } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const Search = ({getStudents})=>{
    const name = useRef()
    
    const search=()=>{
      console.log(name.current.value)
      getStudents(name.current.value)
    }
    return(
        <div className="container">
      <FormGroup>
      <Label for="exampleSearch">Search</Label>
      <input onChange={search} ref={name} className="form-control" type="text" placeholder="enter Student Name" />
      </FormGroup>
      <Button onClick={search}>Search</Button>
      <h1 style={{textAlign:'center'}}>Students</h1>
    </div>
    
    )
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getStudents }, dispatch)
}
export default connect(null, mapDispatchToProps)(Search)