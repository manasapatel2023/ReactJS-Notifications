const Notification = props => {
  //  Write your code here.
  {text, bg-colors} = props
  <div className={bg-colors}>
      <img src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" className="icon"/>
      <p className="para">{text}</p>
  </div>
}

const element = (
  //  Write your code here.   
  <div className="shadow bg-container">
    <h1 className="heading">Notifications</h1>
    <Notification text="Information Message" className="bg-color1"/>
    <Notification text="Success Message" className="bg-color2"/>
    <Notification text="Warning Message" className="bg-color3"/>
    <Notification text="Error Message" className="bg-color4"/>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
Footer