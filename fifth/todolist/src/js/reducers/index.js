const initialState = {
   tasks: []
}

const rootReducer = (state = initialState, action) => {
   switch (action.type) {
      case "LOAD_TASKS":
         return {
            ...state,
            tasks: action.data.map((task, index) => {
               return {
                  id: index,
                  text: task,
                  done: false
               }
            })
         }
      case "TOGGLE_TASK":
         return {
            ...state,
            tasks: state.tasks.map(task => {               
               return task.id === action.id ?
                  {
                     ...task,
                     done: !task.done
                  } :
                  task
            })
         }
      default:
         return state
   }
}

export default rootReducer;