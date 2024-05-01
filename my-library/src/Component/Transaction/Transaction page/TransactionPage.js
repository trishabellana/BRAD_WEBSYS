import React from 'react'
import Navigation from '../../Navigation/Navigation'
import AddTransaction from '../Add transaction/AddTransaction'
import DisplayTransaction from '../Display Transaction/DisplayTransaction'

export default function TransactionPage() {
  return (
    <>
    <Navigation/>
    <AddTransaction/>
    <DisplayTransaction/>
    </>
  )
}
