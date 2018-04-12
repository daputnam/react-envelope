import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

const AddressLabel = ({ person }) => {
  const address = person.address;
  return (
    <div>
      <p>{person.firstName + " " + person.lastName}</p>
      <p>
        {address.number} {address.street}
      </p>
      <p>
        {address.city}, {address.state}, {address.zip}
      </p>
    </div>
  );
};

const Envelope = props => {
  return (
    <div className="envelope">
      <div className="from-person">
        <AddressLabel person={props.fromPerson} />
        <div className="stamp">Stamp</div>
      </div>
      <div className="to-person">
        <AddressLabel person={props.toPerson} />
      </div>
    </div>
  );
};

const CreditCard = props => {
  return (
    <div className="credit-card">
      <div className="bank-name">{props.cardInfo.bankName}</div>
      <div className="card-number">{props.cardInfo.cardNumber}</div>
      <div className="card-first-four">
        {props.cardInfo.cardNumber.slice(0, 4)}
      </div>
      <div className="valid-thru">
        VALID THRU {props.cardInfo.expirationMonth}/{
          props.cardInfo.expirationYear
        }
      </div>
      <div className="name">{props.cardInfo.name.toUpperCase()}</div>
    </div>
  );
};

const MotivationalPoster = props => {
  return (
    <div className="poster">
      <div className="image">
        <img src={props.image} />{" "}
      </div>
      <div className="poster-title">{props.title}</div>
      <div className="poster-text">{props.text}</div>
    </div>
  );
};

const Email = props => {
  return (
    <div className="email">
      <div className="check-box">
        <input className="check" type="checkbox" />
      </div>
      <div className="text">
        <div className="top-row">
          <div className="sender">{props.email.sender}</div>
          <div className="subject">{props.email.subject}</div>
          <div className="date">{props.email.date}</div>
        </div>
        <div className="bottom-row">
          <div className="message">{props.email.message}</div>
        </div>
      </div>
    </div>
  );
};

const person1 = {
  firstName: "Bob",
  lastName: "Brasky",
  address: {
    number: 123,
    street: "Main St",
    city: "Smallville",
    state: "OH",
    zip: 87878
  }
};
const person2 = {
  firstName: "Mary",
  lastName: "Smith",
  address: {
    number: 44,
    street: "Origin St",
    city: "Big City",
    state: "MI",
    zip: 90210
  }
};

const creditInfo = {
  bankName: "Big Bank, Inc",
  name: "Billy Stevens",
  cardNumber: "2222 1234 5678 9123",
  expirationMonth: "08",
  expirationYear: "29"
};
const poster = {
  image: "https://avatars0.githubusercontent.com/u/11948214?s=460&v=4",
  title: "Code alot",
  text: "it's super easy"
};
const email = {
  sender: "Bill Brasky",
  subject: "Story about my wife",
  date: "July 15th",
  message:
    "Thanks for taking the time to listen to my message. Here is more of the message."
};
ReactDOM.render(<Email email={email} />, document.getElementById("root"));
{
  /* <MotivationalPoster image={poster.image} title={poster.title} text={poster.text} /> */
}
