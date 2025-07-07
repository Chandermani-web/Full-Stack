import React, { useState } from "react";
import users from "./Users.jsx";

const Showuser = () => {
  const [user, setuser] = useState(users);
  const [originaluser] = useState(users);

  const searchtheuser = (e) => {
    const value = e.target.value.toLowerCase();
    const filteredUser = originaluser.filter((u)=>u.name.toLowerCase().includes(value))
    setuser(filteredUser);
  }
  return (
    <div>
        <input type="text" placeholder="search..." onChange={searchtheuser}/>
      <main className="users-container">
        {user.map((item) => (
          <div key={item.id} className="user-card">
            <h2 className="name">
              <strong>Name:</strong> {item.name}
            </h2>
            <p className="username">
              <strong>Username:</strong> {item.username}
            </p>
            <p className="email">
              <strong>Email:</strong> {item.email}
            </p>
            <p className="phone">
              <strong>Phone:</strong> {item.phone}
            </p>
            <p className="website">
              <strong>Website:</strong>{" "}
              <a
                href={`https://${item.website}`}
                target="_blank"
                rel="noreferrer"
              >
                {item.website}
              </a>
            </p>

            <div className="address">
              <p>
                <strong>Address:</strong>
              </p>
              <p>Street: {item.address.street}</p>
              <p>Suite: {item.address.suite}</p>
              <p>City: {item.address.city}</p>
              <p>Zipcode: {item.address.zipcode}</p>
            </div>

            <div className="company">
              <p>
                <strong>Company:</strong> {item.company.name}
              </p>
              <p>
                <em>{item.company.catchPhrase}</em>
              </p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Showuser;
