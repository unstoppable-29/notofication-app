const Notification = (props) => {
  const { className, iconUrl, message } = props;
  const containerClassName = notification-container ${className};


  return (
    <div className={containerClassName}>
      <img className="icon" src={iconUrl} />
      <p className="message">{message}</p>
    </div>
  );
};

const element = (
<div className="notifications-app-container">
    <h1 className="title">Notifications</h1>
    <div className="notifications-list-container">
      <Notification className="primary-bg-color" iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" message="Information Message"/> 
    </div>
</div>
);
ReactDOM.render(element, document.getElementById('root'))