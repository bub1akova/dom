export default () => {
  // BEGIN 
  const elements = {
    buttonGenerator: document.querySelector('#alert-generator'),
    buttonsContainer: document.querySelector('.alerts'),
  }
  
  let alertsCounter = 1;
  
  elements.buttonGenerator.addEventListener('click', () => {
    const alertElement = document.createElement('div');

    alertElement.classList.add('alert', 'alert-primary');
    alertElement.textContent = `Alert ${alertsCounter}`;
  
    elements.buttonsContainer.prepend(alertElement);
    alertsCounter++;
  });
  // END
};