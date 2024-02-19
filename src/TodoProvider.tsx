import React, { createContext, useContext, useReducer } from 'react';
import todosReducer, {Action} from "./toodosReducer"

export type Todo={
    id:number;
    text:string;
    done:boolean;
}

const initialTodos:Todo[]=[{
    id:1,
    text:'Learn React',
    done:false,
},{
    id:2,
    text:'Build an App',
    done:false,
},{
    id:3,
    text:'Use typescript with react',
    done:false,
}
]

const TodoContext=createContext<typeof initialTodos | null>(null);
const TodoDispatchContext= createContext<React.Dispatch<Partial<Action>>> (()=>null);

export  function TodoProvider({children,}: {children: React.ReactElement[];}){
    const [todos,dispatch]=useReducer(todosReducer,initialTodos);
    return(
        <TodoContext.Provider value={todos}>
            <TodoDispatchContext.Provider value={dispatch}>
                {children}
            </TodoDispatchContext.Provider>
        </TodoContext.Provider>
    )
}
export const useTodos = () => useContext(TodoContext);
export const useDispatch = () => useContext(TodoDispatchContext);