import React, { useReducer } from 'react';


export default ({reducer, actions, initialState}) => {
    const Context = React.createContext();

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);
        
        const bindActions = actions => Object.keys(actions)
            .reduce((acc, item) => ({...acc, [item]: actions[item](dispatch)  }), {});
        
        const contextState = {
            state,
            actions: bindActions(actions)
        };
        return (
            <Context.Provider value={contextState}>
                {children}
            </Context.Provider>
        );
    };

    return { Context, Provider };
};