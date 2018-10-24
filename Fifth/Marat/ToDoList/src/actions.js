export const addTask = (text) =>({
    type: "ADD",
    text
})

export const deleteTask = (id) =>({
    type: "DONE",
    id
})

