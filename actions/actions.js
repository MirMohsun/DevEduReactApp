let nextTodoId = 0
export const addTodo = text => ({
    type: 'Add',
    id: nextTodoId++,
    text
})

export const setVisibility = filter => ({
    type: 'Set_Visibility',
    filter
})

export const toggleTodo = id => ({
    type: 'Toggle',
    id
})

export const VisibilityFilters = {
    Show_all: 'Show_all',
    Show_completed: 'Show_completed',
    Show_active: 'Show_active'
}