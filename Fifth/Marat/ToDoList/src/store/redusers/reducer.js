const state = {
    tasks: [
        {
            "id": 1,
            "text": "Go there",
            "state": false
        },
        {
            "id": 2,
            "text": "Look around",
            "state": false
        },
        {
            "id": 3,
            "text": "Go back",
            "state": false
        }
    ]
}
let idKostyl = 3; //I haven't been able to fix id problems when adding task from input

const reducer = (prevState = state, action) => {
    switch (action.type) {
        case "ADD":
            idKostyl++;
            return {
                ...prevState,
                tasks: [...prevState.tasks,
                {
                    id: idKostyl,
                    text: action.text,
                    state: false
                }],
                
            }
        case "DONE":
            return {
                ...prevState,
                tasks: prevState.tasks.map(task => (task.id === action.id) ? { ...task, state: !task.state } : task)
            }
        default:
            return prevState;
    }
}

export default reducer;