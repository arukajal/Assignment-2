import React from "react";
import faker from "faker";
function Card(props) {
  return (
    <div class="card">
      <div class="image">
        <img src={faker.image.avatar()} alt="" />
      </div>
      <div class="content">
        <div class="header">{faker.name.findName()}</div>
        <div class="meta">
          <a href>{faker.phone.phoneNumber()}</a>
        </div>
        <div class="description">{faker.internet.email()}</div>
      </div>
    </div>
  );
}

export default Card;
