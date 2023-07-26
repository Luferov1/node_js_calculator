import Operator from './Operator.js';
import logResult from '../loggers/logResult.js';

class Sqrt extends Operator {
  execute() {
    this.validate();
    if (this.isValid) {
      const number = this.numbers[0];
      const result = Math.sqrt(+number);
      logResult(result);
    }
    super.execute();
  }
}

export default Sqrt