function clickButtonWithText(selector, targetText) {
  const element = document.querySelector(`${selector} button`);
  const spanSelector2 = "span.text-xs.font-semibold.main-title.ng-star-inserted";

  if (element) {
    if (element.textContent.trim() === targetText.trim()) {
        if (!document.querySelector(spanSelector2)) {
      element.click();
    }}
  }
}
var name_task = "Name task"

clickButtonWithText("#divContainer > div > div > app-tile", name_task);


const spanSelector = ".mt-8"
const spanElement = document.querySelector(spanSelector);

if (spanElement) {
const spanText = document.querySelector(".mt-8").innerText;

if (spanText === name_task) {

} else {
  document.querySelector("div > div.head-container > app-action-modal-header > div > button").click()
  }
 }
