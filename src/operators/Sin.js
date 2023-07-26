import Operator from './Operator.js';
import logResult from '../loggers/logResult.js';

class Sin extends Operator {
  execute() {
    this.validate();
    if (this.isValid) {
      const number = this.numbers[0];
      const result = Math.sin(number);
      logResult(result);
    }
    super.execute();
  }
}

export default Sin;