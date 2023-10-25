'use client'

import { createContext, useContext, useEffect, useState } from 'react'

interface ThemeContextProps {
	theme: string
	setTheme: (theme: string) => void
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useState('')

	useEffect(() => {
		setTheme(localStorage.getItem('theme') || 'light')
	}, [])

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.add('light')
		}
		localStorage.setItem('theme', theme)
	}, [theme])

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export function useTheme() {
	const context = useContext(ThemeContext)
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider')
	}
	return context
}
