import React, { useState } from 'react'

const ExpenseTracker = () => {
    const[balance,setBalance]=useState(0)
    const[description,setDescription]=useState('')
    const[transaction,setTransaction]=useState([])
    const[amount,setAmount]=useState('')

    const addExpense=()=>{
        const parsedAmount=parseFloat(amount);
        if(isNaN(parsedAmount) || parsedAmount<0){
            alert('Please enter a valid amount')
            return;
        }
        setBalance((prevBal)=>prevBal+parsedAmount)
      //add transaction to list
      setTransaction((prevTrans)=>[...prevTrans,{description,amount:parsedAmount},])
      //clear form
      setDescription('')
      setAmount('')
    }
  return (
    <div>
      <div className='container'>
        <h1>Expense Tracker</h1>
        <div className='balance'>
            <h2>Total Balance:$ <span id='balance'>{balance.toFixed(2)}</span></h2>
        </div>
        <div className='transaction'>
            <h2>Transaction</h2>
            <ul>{
                transaction.map((trans,index)=>(
                    <li key={index}>{
                     `${trans.description}:$${trans.amount.toFixed(2)}`   
                     } </li>
                ))
}
            </ul>
        </div>
        <div className='add-expense'>
            <h2>Add Expense</h2>
            <form>
                <label htmlFor='description'>Description:</label>
                <input type='text' id='description' placeholder='Add description' value={description} onChange={(e)=>setDescription(e.target.value)} required/>

                <label htmlFor='amount'>Amount:</label>
                <input type='number'id='amount' placeholder='Add amount' value={amount} onChange={(e)=>setAmount(e.target.value)} required />

                <button type='button' onClick={addExpense}>Add Expense</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default ExpenseTracker
