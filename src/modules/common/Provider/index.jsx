import React, { useState, useEffect } from 'react'
import { Context } from '../Context'

const Provider = ({ children }) => {
    const [theme, setTheme] = useState('light')
    const toggleTheme = value => setTheme(value)

    useEffect(() => {
        document.title = `${theme} Mode`
        if (theme === 'light') {
            document.body.style.background = '#fff'
        } else {
            document.body.style.background = '#000'
        }
    })

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