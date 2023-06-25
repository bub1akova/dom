import camelCase from 'lodash/camelCase';

// BEGIN
export default () => {
    const allElements = document.querySelectorAll('*');
  
    allElements.forEach((element) => {
      const classes = element.className.split(' ');
  
      const normalizedClassNames = classes.map((classs) => {
        return camelCase(classs);
      });
  
      element.className = normalizedClassNames.join(' ');
    });
  };

// END