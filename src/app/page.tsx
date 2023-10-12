import React from 'react'
import { testClass, sizeClass } from '../styles/enumStyle'
import Header from '../components/Header'

export default function Home() {
  return (
    <main>
      <Header />
      <p className={`${testClass} ${sizeClass}`}>Hello1</p>
    </main>
  )
}
