"use client";

import css from "./BookingForm.module.css"

export default function BookingForm() {

  return (
    <form
      className={css.form}
      onSubmit={(e) => {
        e.preventDefault();
        alert("Car successfully rented!");
      }}
    >
      <div className={css.wrapperTitle}>
        <h3 className={css.title}>Book your car now</h3>
        <p className={css.paragraph}>Stay connected! We are always ready to help you.</p>
      </div>
      <div className={css.wrapperInput}>
        <input className={css.input} placeholder="Name*" required />
        <input className={css.input} placeholder="Email*" required />
        <input className={css.input} placeholder="Booking date" />
        <textarea className={css.textarea} placeholder="Comment"></textarea>
        <button className={css.sendBtn } type="submit">Send</button>
      </div>
      
    </form>
  );
}
