# Traffic Light Counter Simulation

## Overview

This project simulates a traffic light system with two main behaviors: a set of counters incrementing and decrementing alternately, mimicking the operation of traffic lights. The system consists of two main counters:
- **sameGoCounter**: Increments from 0 to 50 and then switches to **sameStopCounter**.
- **sameStopCounter**: Decrements from 50 to 0, then switches back to **sameGoCounter** to restart the process.
- **secondGoCounter** and **secondStopCounter** follow a similar behavior but operate on the second traffic light.

### Features
- **Incrementing Counters**: `sameGoCounter` and `secondGoCounter` increase until they reach 50.
- **Decrementing Counters**: When a counter reaches 50, it switches to a stop counter (e.g., `sameStopCounter`), which decrements until it reaches 0.
- **Reset Mechanism**: Once a counter hits its limit (either 50 or 0), the system resets and starts again.

## How It Works

1. **Counters**: 
   - `sameGoCounter` and `sameStopCounter` control the behavior of the first and third lights.
   - `secondGoCounter` and `secondStopCounter` control the second light.
   
2. **Switching Logic**: 
   - When `sameGoCounter` reaches 50, it switches to `sameStopCounter`, which decrements down to 0.
   - Similarly, when `secondStopCounter` reaches 0, it switches to `secondGoCounter`, which increments up to 50.
   
3. **Intervals**:
   - JavaScript `setInterval` is used to control the rate at which each counter increments or decrements.
   - Counters are cleared and reset at appropriate points to ensure smooth transitions.

## Getting Started

### Prerequisites

You will need a basic web browser and knowledge of JavaScript to run this project.

### Running the Project

1. Clone or download the project to your local machine.
2. Open the `index.html` file in a browser.
3. Observe the simulation as the counters increment and decrement.
4. Modify the intervals or logic in the JavaScript file if you want to change the behavior of the system.

### Files

- **index.html**: The main HTML file displaying the traffic light system.
- **style.css**: CSS file for basic styling of the counters and lights.
- **script.js**: JavaScript file containing the logic for incrementing and decrementing the counters.

## Code Explanation

The key parts of the JavaScript file are:

- **Counters**: 
   - `sameGoCounter`, `sameStopCounter`: Control for the first and third lights.
   - `secondGoCounter`, `secondStopCounter`: Control for the second light.

- **setInterval Functions**: 
   - `startIntervalIdOne()` increments `sameGoCounter`.
   - `switchToStopCounterOne()` decrements `sameStopCounter` after the counter reaches 50.
   - Similar logic is applied for `secondGoCounter` and `secondStopCounter`.

- **clearAllIntervals()**: Ensures that only one set of intervals runs at any time, preventing overlapping logic.

## Customization

- You can modify the intervals in the `setInterval()` functions to adjust how fast or slow the counters increment and decrement.
- The counter limits (50 and 0) can be adjusted to fit different use cases.
  
## Troubleshooting

- **Counters not switching properly**: Ensure that intervals are cleared appropriately with `clearInterval()` to avoid overlapping.
- **Performance issues**: If the counters slow down or behave unexpectedly, consider reducing the number of active intervals at a time.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
