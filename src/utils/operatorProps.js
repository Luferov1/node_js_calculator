import Add from '../operators/Add.js';
import Subtract from '../operators/Subtract.js';
import Multiply from '../operators/Multiply.js';
import Divide from '../operators/Divide.js';
import Sqrt from '../operators/Sqrt.js';
import Log from '../operators/Log.js';
import Pow from '../operators/Pow.js';
import Sin from '../operators/Sin.js';
import Cos from '../operators/Cos.js';
import Tg from '../operators/Tg.js';

const operatorProps = {
  add: {
    class: Add,
    minNumberOfArgs: 2,
    isStrict: false
  },
  subtract: {
    class: Subtract,
    minNumberOfArgs: 2,
    isStrict: false
  },
  multiple: {
    class: Multiply,
    minNumberOfArgs: 2,
    isStrict: false
  },
  divide: {
    class: Divide,
    minNumberOfArgs: 2,
    isStrict: false
  },
  sqrt: {
    class: Sqrt,
    minNumberOfArgs: 1,
    isStrict: true
  },
  log: {
    class: Log,
    minNumberOfArgs: 1,
    isStrict: true
  },
  pow: {
    class: Pow,
    minNumberOfArgs: 2,
    isStrict: true
  },
  sin: {
    class: Sin,
    minNumberOfArgs: 1,
    isStrict: true
  },
  cos: {
    class: Cos,
    minNumberOfArgs: 1,
    isStrict: true
  },
  tg: {
    class: Tg,
    minNumberOfArgs: 1,
    isStrict: true
  }
};

export default operatorProps;