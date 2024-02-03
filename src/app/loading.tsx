"use client"
import { useThemeContext } from '@/contexts/theme.context'
import React from 'react'

function Loading() {
  const {theme} = useThemeContext()
  return (
    <div className='loading' data-theme={theme}>
        <h1>Loading...</h1>
    </div>
  )
}

export default Loading