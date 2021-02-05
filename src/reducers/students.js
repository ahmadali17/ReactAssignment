export const students = (state={},action)=>{
    
    switch(action.type){
        case 'STUDENTS_LIST_ALL':{
            return {...state,list:action.payload}
        }
        case 'STUDENTS_LIST':{
            return {...state,list:action.payload}
        }

        case 'STUDENT_DETAILS':{    
            return {...state,details:action.payload}
        }

        case 'CLEAR_STUDENT_DETAILS':{
            return{...state,details:action.payload}
        }
    }

    return state
}