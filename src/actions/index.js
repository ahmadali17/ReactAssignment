const axios = require('axios');
const URL = "http://localhost:3002/students"

export const getStudents = async (name) => {
    let payload;
    try{
        if(!name||typeof(name)==undefined){
            let response = await fetch(`${URL}`)
            payload = await response.json()
            console.log(payload)
        }
        else{
            let response = await fetch(`${URL}?name=${name}`)
            payload = await response.json()
            console.log(payload)
        }
        
    }
    catch(err){
        console.log(err)
    }
    return {
        type: 'STUDENTS_LIST',
        payload
    }
}

export const getAllStudents = async () => {
    let payload;
    try{
        let response = await fetch(`${URL}`)
        payload = await response.json()
        console.log(payload)
    }
    catch(err){
        console.log(err)
    }
    return {
        type: 'STUDENTS_LIST_ALL',
        payload
    }
}

export const addStudent = (student) => {
    console.log(student)
    axios.post('http://localhost:3002/students', student).then(resp => {
    console.log(resp.data);
}).catch(error => {
    console.log(error);
});
}

export const deleteStudent = async (id)=>{
    axios.delete(`${URL}/${id}`).then(resp =>{
        console.log(resp.data);
    }).catch(error => {
        console.log(error);
    });
}

export const getStudentDetails = async (id) => {
    let payload;
    try{
        let response = await fetch(`${URL}/${id}`)
        payload = await response.json()
        console.log(payload)
    }
    catch(err){
        console.log(err)
    }
    return {
        type: 'STUDENT_DETAILS',
        payload
    }

}

export const clearStudentDetails = ()=>{
    return {
        type:'CLEAR_STUDENT_DETAILS',
        payload:null
    }
}