import './index.css'

const MoneyDetails = props => {
  const {Income, Expenses} = props
  const Balance = Income - Expenses
  return (
    <div className="moneyDetails-container">
      <div className="balance-container balance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="image"
          alt="balance"
        />
        <div className="amount-container">
          <p className="type">Your Balance</p>
          <p className="amount" data-testid="balanceAmount">
            Rs {Balance}
          </p>
        </div>
      </div>
      <div className="balance-container income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="image"
          alt="income"
        />
        <div className="amount-container">
          <p className="type">Your Income</p>
          <p className="amount" data-testid="incomeAmount">
            Rs {Income}
          </p>
        </div>
      </div>
      <div className="balance-container expenses">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="image"
          alt="expenses"
        />
        <div className="amount-container">
          <p className="type">Your Expenses</p>
          <p className="amount" data-testid="expensesAmount">
            Rs {Expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
