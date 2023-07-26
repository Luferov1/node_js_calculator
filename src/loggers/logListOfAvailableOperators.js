import operatorProps from '../utils/operatorProps.js';

const logListOfAvailableOperators = () => {
  const operatorsArr = Object.keys(operatorProps);
  const operatorsString = operatorsArr.reduce((string, operatorName, index) => {
    if (index === operatorsArr.length - 1) {
      return `${string}${index + 1}) ${operatorName}`;
    }
    return `${string}${index + 1}) ${operatorName}\n`;
  }, '');
  console.log('Choose the operator, you can see the list of available operators below');
  console.log(operatorsString);
}

export default logListOfAvailableOperators;