import React, { useReducer } from 'react'
import { Provider, Context } from './modules/common'
import Dashboard from './modules/Dashboard'
import reducer from './reducer'

const App = () => {
    const [state, dispatch] = useReducer(reducer, [])
    return (
        <Provider>
            <Context.Consumer>
                {({ theme, toggleTheme }) => (
                    <Dashboard
                        theme={theme}
                        toggleTheme={toggleTheme}
                        tasks={state}
                        dispatch={dispatch}
                    />
                )}
            </Context.Consumer>
        </Provider>
    )
}

export default App