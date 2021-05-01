const { createTSFN } = require('../');

const callback = (...args) => {
};

void async function() {
  const start = process.hrtime.bigint();
  console.log(await createTSFN(callback));
  const end = process.hrtime.bigint();
  process.stderr.write(`Completed in ${Number(end - start) / 1e6}ms\n`);
}();
