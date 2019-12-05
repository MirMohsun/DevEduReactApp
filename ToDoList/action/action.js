import Todo from '../components/Todo'


export const add = text => (
    {
        type: 'add_todo',
        payload: new Todo ({undifined,text}),
    }
    
)