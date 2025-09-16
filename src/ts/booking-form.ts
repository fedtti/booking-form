class BookingForm extends HTMLElement {
  constructor() {
    super(); // Establish prototype chain.

    const shadow = this.attachShadow({ mode: 'open' }); // Attach shadow tree and return shadow root reference (cf. https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow).
    const bookingFormContainer = document.createElement('div'); // Creating a container for the `booking-form` element.

    const action = this.getAttribute('action') || '';
    const method = this.getAttribute('method') || '';
    const legend = this.getAttribute('legend') || '';
    const firstName = this.getAttribute('first-name') || '';
    const lastName = this.getAttribute('last-name') || '';
    const email = this.getAttribute('email') || '';

    bookingFormContainer.innerHTML = `
      <form action="${action}" method="${method}">
        <fieldset>
          <legend>${legend}</legend>
          ${firstName && `
            <label for="first-name">${firstName}</label>
            <input id="first-name" name="first-name" type="text" placeholder="" autocomplete="given-name">
          `}
          ${lastName && `
            <label for="last-name">${lastName}</label>
            <input id="last-name" name="last-name" type="text" placeholder="" autocomplete="family-name">
          `}
          ${email && `
            <label for="email">${email}</label>
            <input id="email" name="email" type="email" placeholder="" autocomplete="off" required>
          `}
        </fieldset>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>
    `;

    shadow.appendChild(bookingFormContainer);
  }
}

customElements.define('booking-form', BookingForm); // Let the browser know about the custom element.
