import './index.css'

const TransactionItem = props => {
  const {history, onDeleteList} = props
  const {id, Title, Amount, Type} = history
  const onClickDeleteButton = () => {
    onDeleteList(id)
  }

  return (
    <li className="historyList">
      <p className="L-title">{Title}</p>
      <p className="L-amount">Rs {Amount}</p>
      <p className="L-type">{Type}</p>
      <button
        className="delete-button"
        data-testid="delete"
        type="button"
        onClick={onClickDeleteButton}
      >
        <img
          className="delete-image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
