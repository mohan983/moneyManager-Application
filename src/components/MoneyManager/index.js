import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionsList: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
    Income: 0,
    Expenses: 0,
  }

  onChangeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmountInput = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeTypeSelect = event => {
    this.setState({optionId: event.target.value})
  }

  onClickAddButton = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )
    const {displayText} = typeOption
    const newHistory = {
      id: uuidv4(),
      Title: titleInput,
      Amount: amountInput,
      Type: displayText,
    }
    if (optionId === 'INCOME') {
      this.setState(prevState => ({
        transactionsList: [...prevState.transactionsList, newHistory],
        Income: prevState.Income + parseInt(amountInput),
        titleInput: '',
        amountInput: '',
      }))
    } else {
      this.setState(prevState => ({
        transactionsList: [...prevState.transactionsList, newHistory],
        Expenses: prevState.Expenses + parseInt(amountInput),
        titleInput: '',
        amountInput: '',
      }))
    }
  }

  onDeleteList = id => {
    const {transactionsList} = this.state
    const deletedList = transactionsList.filter(eachItem => eachItem.id === id)
    const filteredHistoryList = transactionsList.filter(
      eachItem => eachItem.id !== id,
    )
    if (deletedList[0].Type === 'Income') {
      this.setState(prevState => ({
        transactionsList: filteredHistoryList,
        Income: prevState.Income - parseInt(deletedList[0].Amount),
      }))
    } else {
      this.setState(prevState => ({
        transactionsList: filteredHistoryList,
        Expenses: prevState.Expenses - parseInt(deletedList[0].Amount),
      }))
    }
  }

  render() {
    const {
      transactionsList,
      titleInput,
      amountInput,
      optionId,
      Income,
      Expenses,
    } = this.state

    return (
      <div className="bg-container">
        <div className="moneyManager-container">
          <h1 className="welcomeUser">Hi, Richard</h1>
          <p className="welcome-paragraph">
            Welcome back to your <span className="span">Money Manager</span>
          </p>
        </div>
        <div>
          <MoneyDetails Income={Income} Expenses={Expenses} />
        </div>
        <div className="transaction-container">
          <div className="input-container">
            <h1 className="heading">Add Transaction</h1>
            <label className="label" htmlFor="title">
              TITLE
            </label>
            <input
              className="input"
              id="title"
              placeholder="TITLE"
              value={titleInput}
              onChange={this.onChangeTitleInput}
            />
            <label className="label" htmlFor="amount">
              AMOUNT
            </label>
            <input
              className="input"
              id="amount"
              value={amountInput}
              placeholder="AMOUNT"
              onChange={this.onChangeAmountInput}
            />
            <label className="label" htmlFor="type">
              TYPE
            </label>
            <select
              className="input"
              id="type"
              value={optionId}
              onChange={this.onChangeTypeSelect}
            >
              {transactionTypeOptions.map(eachItem => (
                <option
                  key={eachItem.optionId}
                  value={eachItem.optionId}
                  className="option"
                >
                  {eachItem.displayText}
                </option>
              ))}
            </select>
            <button
              className="button"
              type="button"
              onClick={this.onClickAddButton}
            >
              Add
            </button>
          </div>
          <div className="history-container">
            <h1 className="H-heading">History</h1>
            <div className="container">
              <p className="M-title">Title</p>
              <p className="M-amount">Amount</p>
              <p className="M-type">Type</p>
            </div>
            <ul className="historyList-container">
              {transactionsList.map(eachItem => (
                <TransactionItem
                  key={eachItem.id}
                  history={eachItem}
                  onDeleteList={this.onDeleteList}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
