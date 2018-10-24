const initial = [
    {id: "0", done: false, descr: "first"},
    {id: "1", done: false, descr: "second"},
    {id: "2", done: false, descr: "third"}
]


export function TaskReducer(prevState = initial, action){
    switch(action.type){
        case "ADD_TASK":
        return [
            ...prevState,
            {
                id: prevState.length,
                 done: false,
                 descr: action.task
            }
        ]
        case "DONE_TASK":
        {
            let nextState = [...prevState];
            nextState[action.id].done = !nextState[action.id].done; 
            return nextState;
        }

        default:
        return prevState;
    }
}
