import operatorProps from '../utils/operatorProps.js';
import logNumberInputRequest from '../loggers/logNumberInputRequest.js';
import logOperatorResetOpportunity from '../loggers/logOperatorResetOpportunity.js';
import logInvalidInput from '../loggers/logInvalidInput.js';

class Operator {
  constructor(consoleInput, operator) {
    this.consoleInput = consoleInput;
    this.numbers = [];
    this.minNumberOfArgs = operatorProps[operator].minNumberOfArgs;
    this.isStrict = operatorProps[operator].isStrict;
    this.isValid = true;
  }

  validate() {
    const regex = /-?\d+(\.\d+)?/g;
    const numbers = this.consoleInput.match(regex);

    if (numbers) {
      this.numbers = numbers;
    }
    this.isValid =
      this.numbers.length >= this.minNumberOfArgs && !this.isStrict ||
      this.numbers.length === this.minNumberOfArgs && this.isStrict;
  }
  execute() {
    if (this.isValid) {
      logNumberInputRequest(this.minNumberOfArgs, this.isStrict);
      logOperatorResetOpportunity();
    } else {
      logInvalidInput();
      logNumberInputRequest(this.minNumberOfArgs, this.isStrict);
      logOperatorResetOpportunity();
    }
  }
}

export default Operator;