import { createInterface } from 'readline';
import logWelcomeMessage from './loggers/logWelcomeMessage.js';
import logInvalidInput from './loggers/logInvalidInput.js';
import operatorProps from './utils/operatorProps.js';
import logListOfAvailableOperators from './loggers/logListOfAvailableOperators.js';
import logChosenOperator from './loggers/logChosenOperator.js';
import logNumberInputRequest from './loggers/logNumberInputRequest.js';
import logEndMessage from './loggers/logEndMessage.js';
import logOperatorResetOpportunity from './loggers/logOperatorResetOpportunity.js';
import logOperatorHasBeenReset from './loggers/logOperatorHasBeenReset.js';

const runApp = () => {
  let chosenOperator = null;
  const readline = createInterface( {
    input: process.stdin,
    output: process.stdout
  });

  logWelcomeMessage();
  logListOfAvailableOperators();

  readline.on('line', (consoleInput) => {
    const lowerCasedConsoleInput = consoleInput.toLowerCase();

    if (!chosenOperator && operatorProps[lowerCasedConsoleInput]) {
      chosenOperator = consoleInput;
      logChosenOperator(lowerCasedConsoleInput);
      logNumberInputRequest(
        operatorProps[lowerCasedConsoleInput].minNumberOfArgs,
        operatorProps[lowerCasedConsoleInput].isStrict
      );
      logOperatorResetOpportunity();
    } else if (chosenOperator && consoleInput === 'reset') {
      chosenOperator = null;
      logOperatorHasBeenReset();
      logListOfAvailableOperators();
    } else if (chosenOperator) {
      console.log(chosenOperator);
      const operatorClass = operatorProps[chosenOperator].class;
      const operator = new operatorClass(lowerCasedConsoleInput, chosenOperator);
      operator.execute();
    } else {
      logInvalidInput();
    }
  });

  readline.on('close', () => {
    return logEndMessage();
  });
}

runApp();