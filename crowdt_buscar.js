function clickButtonIfSpanExists() {
  const spanSelector = "body > ngb-modal-window.action-modal-1712621742464.d-block.modal.fade.show > div > div > app-action-loader > app-open-ended > div > div.head-container > app-action-modal-header > div > div > span > span.bg-card-2.h-6.inline-block.mr-2.rounded-md.w-6.ng-star-inserted";
  const buttonSelector = "BotonBuscar"; // Use ID selector for better reliability

  // Safely access the document to avoid errors
  if (document && document.readyState === 'complete') {
    const spanElement = document.querySelector(spanSelector);
    const buttonElement = document.getElementById(buttonSelector);

    if (spanElement) {
      console.log("Span element found. Waiting...");

      // Simulate a human-like delay between 10 and 20 seconds
      setTimeout(() => {
        if (buttonElement) {
          console.log("Clicking button...");
          buttonElement.click();
        } else {
          console.warn("Button element not found.");
        }
      }, Math.random() * (20000 - 1000) + 1000); // Random delay in milliseconds
    } else {
      console.log("Span element not found. Button not clicked.");
    }
  } else {
    console.warn("Document not ready or accessible. Script execution delayed.");
    document.addEventListener("DOMContentLoaded", clickButtonIfSpanExists); // Try again when ready
  }
}

// Call the function to initiate the process
clickButtonIfSpanExists();
