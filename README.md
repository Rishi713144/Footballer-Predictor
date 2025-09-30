# Footballer Predictor

Welcome to **Footballer Predictor**!  
Footballer Predictor  is a simple web application that allows users to view a random image from a predefined collection after entering their name. The program stops after displaying one image and can be reset to allow further interactions. The application features a modern, responsive design with user-friendly feedback.

## Features

- **Name Input Requirement:** Users must enter their name before displaying an image
- **Random Image Display:** Shows a random image from a collection
- **Reset Functionality:** A reset button clears the current state, allowing users to enter a new name and display another image.
- **Customizable Models**: Adapt and extend prediction models for your use-case.

## Getting Started

**Clone or Download:** Save the index.html file to your local machine.



**Open in Browser:** Open index.html in a modern web browser (e.g., Chrome, Firefox, Edge).





**No server is required as the application runs client-side.**



**Dependencies:** None. The application uses no external libraries and relies on images hosted online.

# Usage





**Enter Name:** Type your name in the input field labeled "Enter Your Name."



**Show Random Image:** Click the "Show Random Image" button to display a random image from the collection.





If no name is entered, an alert will prompt you to enter one.



If the image collection is empty, an alert will notify you.



**Program Stop:** After the image loads, the program stops, disabling the "Show Random Image" button, and an alert displays: "[Your Name], this is the final image. The program has stopped. Click Reset to start again."



**Subsequent Clicks:** Clicking "Show Random Image" after the program stops repeats the final alert.



**Reset:** Click the "Reset" button to clear the image, name input, and program state. An alert confirms the reset, and you can enter a new name to start again.


## License

[MIT License](LICENSE)

