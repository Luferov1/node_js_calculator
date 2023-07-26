import Operator from './Operator.js';
import logResult from '../loggers/logResult.js';

class Add extends Operator {
  execute()  {
    this.validate();
    if (this.isValid) {
      const result = this.numbers.reduce((acc, value) => +acc + +value);
      logResult(result);
    }
    super.execute();
  }
}
export default Add;