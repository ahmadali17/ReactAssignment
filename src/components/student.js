import { Button, Table } from 'reactstrap';
const Student = ({ studentData,history }) => {
    console.log(studentData);
    const goToDetails = ()=>{
       
    }
    if (studentData) {
        return <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
        {
            studentData.map((student) => {
                return (
                    <tr key={student.id}>
                        <th>{student.id}</th>
                        <th>{student.name}</th>
                        <th>{student.age}</th>
                        <th>{student.phone}</th>
                        <th><Button color="primary" onClick={
                            ()=> history.push(`/students/${student.id}`)
                        }>Details</Button></th>
                    </tr>
                )
            })
        }
        </tbody>
      </Table>
    }

    

}
export default Student
