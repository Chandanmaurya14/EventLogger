# EventLogger

EventLogger is a Node.js application designed to log and manage events efficiently. This README provides an overview of the project, installation instructions, and usage guidelines.

## Features

- Log events with timestamps
- Categorize events by type
- Retrieve and display logged events
- Export event logs to a file

## Installation

To install EventLogger, follow these steps:

1. Clone the repository:
  ```bash
  git clone https://github.com/Chandanmaurya14/EventLogger.git
  ```
2. Navigate to the project directory:
  ```bash
  cd EventLogger
  ```
3. Install the dependencies:
  ```bash
  npm install
  ```

## Usage

To start using EventLogger, run the following command:
```bash
node index.js
```

### Logging an Event

To log an event, use the following function:
```javascript
logEvent('eventType', 'eventDescription');
```

### Retrieving Events

To retrieve all logged events, use:
```javascript
getEvents();
```

### Exporting Logs

To export the event logs to a file, use:
```javascript
exportLogs('filename.txt');
```

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or suggestions, please open an issue or contact the repository owner.
