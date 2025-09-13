class BookingForm extends HTMLElement {
  constructor() {
    super(); // Establish prototype chain.

    const shadow = this.attachShadow({ mode: 'open' }); // Attach shadow tree and return shadow root reference (cf. https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow).
    const bookingFormContainer = document.createElement('div'); // Creating a container for the `booking-form` element.

    const action = this.getAttribute('action') || '';
    const method = this.getAttribute('method') || '';
    const legend = this.getAttribute('legend') || '';
    const firstName = this.getAttribute('first-name') || '';

    bookingFormContainer.innerHTML = `
      <form action="${action}" method="${method}">
        <fieldset>
          <legend>${legend}</legend>
          ${firstName && `
            <label for="first-name">${firstName}</label>
            <input id="first-name" name="first-name" type="text" placeholder="" autocomplete="given-name" required>
          `}
        </fieldset>

      </form>
    `;

    shadow.appendChild(bookingFormContainer);
  }
}

customElements.define('booking-form', BookingForm); // Let the browser know about the custom element.
