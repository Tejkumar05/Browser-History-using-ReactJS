import './index.css'

const UserHistoryList = props => {
  const {historyListDetails, onDeleteHistoryItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyListDetails

  const onDeleteHistory = () => {
    onDeleteHistoryItem(id)
  }

  return (
    <li className="history-list-item">
      <div className="history-list-container">
        <p className="browsing-time">{timeAccessed}</p>
        <div className="domain-container">
          <img src={logoUrl} alt="domain logo" className="logo-image" />
          <div className="domain-card">
            <p className="browser-title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
      </div>
      <div className="delete-container">
        <button
          className="delete-button"
          type="button"
          testid="delete"
          onClick={onDeleteHistory}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default UserHistoryList
