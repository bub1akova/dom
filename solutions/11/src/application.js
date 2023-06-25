import 'whatwg-fetch';

export default () => {
  // BEGIN
  const inputElements = Array.from(document.querySelectorAll('input[data-autocomplete]'));

  inputElements.forEach((input) => {
    const autocompleteUrl = input.dataset.autocomplete;
    const listName = input.dataset.autocompleteName;
    const list = document.querySelector(`ul[data-autocomplete-name="${listName}"]`);

    const updateList = async (searchTerm) => {
      try {
        const response = await fetch(`${autocompleteUrl}?search=${encodeURIComponent(searchTerm)}`);
        const data = await response.json();
        list.innerHTML = '';

        if (data.length > 0) {
          data.forEach((item) => {
            const li = document.createElement('li');
            li.textContent = item;
            list.appendChild(li);
          });
        } else {
          const li = document.createElement('li');
          li.textContent = 'Nothing';
          list.appendChild(li);
        }
      } catch (error) {
        console.error(error);
      }
    };

    input.addEventListener('input', (event) => {
      const searchTerm = event.target.value;
      updateList(searchTerm);
    });
  });
  // END
};