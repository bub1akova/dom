export default (document) => {
  // BEGIN
  const category = document.getElementsByClassName('content')[0].getElementsByTagName('h1')[0].textContent.trim();
  const categoryDescription = document.getElementsByClassName('description')[0].textContent.trim();
  const articleElements = document.getElementsByClassName('links')[0].getElementsByTagName('div');

  const articles = Array.from(articleElements).map(articleElement => {
    const title = articleElement.getElementsByTagName('h2')[0].getElementsByTagName('a')[0].textContent.trim();
    const description = articleElement.getElementsByTagName('p')[0].textContent.trim();
    return { title, description };
  });

  return { title: category, description: categoryDescription, items: articles }; 
  
  // END
};
