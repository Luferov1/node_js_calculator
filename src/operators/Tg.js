import Operator from './Operator.js';
import logResult from '../loggers/logResult.js';

class Tg extends Operator {
  execute() {
    this.validate();
    if (this.isValid) {
      const number = this.numbers[0];
      const result = Math.tan(number);
      logResult(result);
    }
    super.execute();
  }
}

export default Tg;