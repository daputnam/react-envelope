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

const person = {
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

ReactDOM.render(
  <Envelope toPerson={person} fromPerson={person} />,
  document.getElementById("root")
);
