import React, { useState } from "react";

import { Form, Button } from "semantic-ui-react";

function UpdateForm(props) {
  const { isOpen, onSubmit, onClose } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cell, setCell] = useState("");
  const [address, setAddress] = useState("");
  const [years, setYears] = useState("");
  const [rank, setRank] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handleCellChange(e) {
    setCell(e.target.value);
  }
  function handleAddressChange(e) {
    setAddress(e.target.value);
  }
  function handleYearsChange(e) {
    setYears(e.target.value);
  }
  function handleRankeChange(e) {
    setRank(e.target.value);
  }

  function resetForm() {
    setName("");
    setEmail("");
    setCell("");
    setAddress("");
    setYears("");
    setRank("");
  }

  function handleSubmit(e) {
      e.preventDefault();
      onSubmit({name, email, cell, address, years, rank})
        .then(() => {
            resetForm();
            onClose();
        })
  }

  function handleClose() {
      onClose();
  }

  return (
    <div className={isOpen ? "popup popup_opened" : "popup"}>
      <div className="popup__overlay" onClick={handleClose} />
      <div className="popup__container">
        <button
          className="popup__close"
          areia-label="Close"
          type="reset"
          onClick={handleClose}
        ></button>
        <Form>
          <Form.Field>
            <label>Name</label>
            <input
              id="name"
              name="name"
              placeholder="Name"
              required
              onChange={handleNameChange}
              value={name}
            />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input
              id="email"
              name="email"
              placeholder="Email"
              type="email"
              onChange={handleEmailChange}
              value={email}
            />
          </Form.Field>
          <Form.Field>
            <label>Cell Phone Number</label>
            <input
              id="cell"
              name="cell"
              placeholder="303 123-4567"
              onChange={handleCellChange}
              value={cell}
            />
          </Form.Field>
          <Form.Field>
            <label>Address</label>
            <input
              id="address"
              name="address"
              placeholder="123 S Address St"
              onChange={handleAddressChange}
              value={address}
            />
          </Form.Field>
          <Form.Field>
            <label>Years in Troop (Buest Guess)</label>
            <input
              id="years"
              name="years"
              placeholder="1901 - 2021"
              onChange={handleYearsChange}
              value={years}
            />
          </Form.Field>
          <Form.Field>
            <label>Rank in Troop (Buest Guess)</label>
            <input
              id="rank"
              name="rank"
              placeholder="First Class"
              onChange={handleRankeChange}
              value={rank}
            />
          </Form.Field>
          <Button type="submit" onClick={handleSubmit} primary style={{ marginTop: "1em" }}>
            Sign Up
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default UpdateForm;
