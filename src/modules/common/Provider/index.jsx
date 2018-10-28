import React, { useState } from 'react'
import { Context } from '../Context'

const Provider = ({ children }) => {
    const [theme, setTheme] = useState('light')
    const toggleTheme = value => setTheme(value)

    return (
        <Context.Provider value={{
            theme,
            toggleTheme
        }}>
            {children}
        </Context.Provider>
    )
}

export { Provider }