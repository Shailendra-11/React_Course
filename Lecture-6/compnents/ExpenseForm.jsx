import React, { useEffect, useRef, useState } from 'react'
import Input from './Input'
import Select from './Select'

export default function ExpenseForm({
  expense,
  setExpense,
  setExpenses,
  editingRowId,
  setEditingRowId,
}) {
  const [errors, setErrors] = useState({})

  const validationConfig = {
    title: [
      { required: true, message: 'Please enter title' },
      { minLength: 2, message: 'Title should be at least 2 characters long' },
    ],
    category: [{ required: true, message: 'Please select a category' }],
    amount: [
      {
        required: true,
        message: 'Please enter an amount',
      },
      {
        pattern: /^[1-9]\d*(\.\d+)?$/,
        message: 'Please enter a valid number',
      },
    ],
  }

  const validate = (formData) => {
    const errorsData = {}

    Object.entries(formData).forEach(([key, value]) => {
      validationConfig[key].some((rule) => {
        if (rule.required && !value) {
          errorsData[key] = rule.message
          return true
        }

        if (rule.minLength && value.length < rule.minLength) {
          errorsData[key] = rule.message
          return true
        }

        if (rule.pattern && !rule.pattern.test(value)) {
          errorsData[key] = rule.message
          return true
        }
      })
    })

    setErrors(errorsData)
    return errorsData
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const validateResult = validate(expense)

    if (Object.keys(validateResult).length) return

    if (editingRowId) {
      setExpenses((prevState) =>
        prevState.map((prevExpense) => {
          if (prevExpense.id === editingRowId) {
            return { ...expense, id: editingRowId }
          }
          return prevExpense
        })
      )
      setExpense({
        title: '',
        category: '',
        amount: '',
      })
      setEditingRowId('')
      return
    }

    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ])
    setExpense({
      title: '',
      category: '',
      amount: '',
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setExpense((prevState) => ({
      ...prevState,
      [name]: value,
    }))
    setErrors({})
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <Input
        label="Title"
        id="title"
        name="title"
        // value={expense.title}
        value={expense.title}
        onChange={handleChange}
        error={errors.title}
      />
      <Select
        label="Category"
        id="category"
        name="category"
        value={expense.category}
        onChange={handleChange}
        options={['Grocery', 'Clothes', 'Bills', 'Education', 'Medicine']}
        defaultOption="Select Category"
        error={errors.category}
      />
      <Input
        label="Amount"
        id="amount"
        name="amount"
        value={expense.amount}
        onChange={handleChange}
        error={errors.amount}
      />
      <button className="add-btn">{editingRowId ? 'Save' : 'Add'}</button>
    </form>
  )
}


// import React from 'react'
// import { useState } from "react";
// export default function ExpenseForm({ setExpenses }) {
  // const [title , settitle] = useState('');
  // const [category ,setcategory] = useState('');
  // const [amount , setamount] = useState('');

//    const [error ,setError] = useState()
//    const validate = ()=>{
//     const errorsData ={}
//        if (!formData.title) {
//         errorsData.title = 'Title is required'
//        }
//        if (!formData.category) {
//         errorsData.category = 'Category is required'
//        }
//        if (!formData.amount) {
//         errorsData.amount = 'Amount is required'
//        }

//        setError(errorsData)
//        return errorsData;
//    }
//   const [expense, setExpense] = useState({
//     title:'',
//     category:'',
//     amount: '',
//   })
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const validateresult= validate(expense)
//     if(Object.keys(validateresult).length) return;
//     setExpenses((prevState) => [
//       ...prevState,
//       { ...expense, id: crypto.randomUUID() },
//     ])
//     setExpense({
//       title: '',
//       category: '',
//       amount: '',
//     })
//   }

 // const handleSubmit = (e) => {
  //  e.preventDefault()
    //  const expense = {title ,category ,amount ,id:crypto.randomUUID()}
    //   setExpenses((prevState)=>[...prevState ,expense])
    //   settitle('')
    //   setcategory('')
    //   setamount('')
    



    // const expense = { ...getFormData(e.target), id: crypto.randomUUID() }
    // setExpenses((prevState) => [...prevState, expense])
    // e.target.reset()
  //}

  // const getFormData = (form) => {
    // const formData = new FormData(form)
    // const data = {}
    // for (const [key, value] of formData.entries()) {
    //   data[key] = value
    // }
    // return data
  // }

//   return (
//     <form className="expense-form" onSubmit={handleSubmit}>
//     <div className="input-container">
//       <label htmlFor="title">Title</label>
//       <input
//         id="title"
//         name="title"
//         value={expense.title}
//         onChange={(e) =>
//           setExpense((prevState) => ({ ...prevState, title:e.target.value }))
//         }
//       />
//     </div>
//     <div className="input-container">
//       <label htmlFor="category">Category</label>
//       <select
//         id="category"
//         name="category"
//         value={expense.category}
//         onChange={(e) =>
//           setExpense((prevState) => ({
//             ...prevState,
//             category: e.target.value,
//           }))
//         }
//       >
//         <option value="" hidden>
//           Select Category
//         </option>
//         <option value="Grocery">Grocery</option>
//         <option value="Clothes">Clothes</option>
//         <option value="Bills">Bills</option>
//         <option value="Education">Education</option>
//         <option value="Medicine">Medicine</option>
//       </select>
//     </div>
//     <div className="input-container">
//       <label htmlFor="amount">Amount</label>
//       <input
//         id="amount"
//         name="amount"
//         value={expense.amount}
//         onChange={(e) =>
//           setExpense((prevState) => ({
//             ...prevState,
//             amount: e.target.value,
//           }))
//         }
//       />
//     </div>
//     <button className="add-btn">Add</button>
//   </form>
//   )
// } 