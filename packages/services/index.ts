import lodash from 'lodash';

export default function run() {
  const result = lodash.random(0, 100);
  return `Random number: ${result}`;
}
