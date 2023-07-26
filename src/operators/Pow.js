import Operator from './Operator.js';
import logResult from '../loggers/logResult.js';

class Pow extends Operator {
  execute() {
    this.validate();
    if (this.isValid) {
      const number = this.numbers[0];
      const degree = this.numbers[1];
      const result = number ** degree;
      logResult(result);
    }
    super.execute();
  }
}

export default Pow;