const schedule = require('node-schedule');
const fs = require('fs');

const createSnapshot = async () => {
  const { default: fetch } = await import('node-fetch');
  const url = 'http://127.0.0.1:8888/v1/producer/create_snapshot';
  const options = {
    method: 'POST',
  };
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const result = await response.json();
    const timestamp = new Date().toISOString();
    const log = `${timestamp}: ${JSON.stringify(result)}\n`;
    fs.appendFileSync('snapshot.log', log);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = 0; // Run on Sunday (0th day of the week)
rule.hour = 0; // Run at midnight

const job = schedule.scheduleJob(rule, function() {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}: Scheduled job running.`);
  createSnapshot();
});

console.log(`schedule Running`)
