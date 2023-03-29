# auto-snapshot
cronjob to make snapshot vexanium node

## How to use

### Install package
``npm i``

### Running autosnapshot.js
``node autosnapshot.js``

### Edit with your producer endpoint
``const url = 'http://127.0.0.1:8888/v1/producer/create_snapshot';``

### Setting time for cron job execute
#### this exampe Run on Sunday (0th day of the week) at midnight

``rule.dayOfWeek = 0; // Run on Sunday (0th day of the week)``

``rule.hour = 0; // Run at midnight``
