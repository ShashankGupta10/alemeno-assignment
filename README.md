# Alemeno Assignment

# Image Classifier

The `Image Color Recognizer` is a React and Django project designed to facilitate the analysis and identification of the colors in images. It provides a user-friendly interface for uploading images, sending them to a backend for processing, and displaying the results in an easily understandable format.

## Features

1. **Image Upload**: Allows users to upload image files from their local system.
2. **Processing Status**: Displays a loading indicator while the image is being processed.
3. **Result Display**: Shows the color results in a tabular format, including all color representations.
4. **Error Handling**: Gracefully handles errors that may occur during the image processing.

## Installation

### Prerequisites
- Make sure you have Node.js, pnpm and Python > 3.10 installed on your system. You can download and install them from the official [Node.js website](https://nodejs.org/) and [Python Website](https://www.python.org/downloads/).

### Step 1: Clone the Project

```bash
  git clone https://github.com/ShashankGupta10/alemeno-assignment
  cd alemeno-assignment
```
### Step 2: Install Dependencies on Client and run the client
Navigate to your project directory inside client and install the necessary dependencies:

```bash
    pnpm install
    pnpm run dev
```
### Step 3: Install dependencies on the backend and run the backend
Navigate to the project directory inside client and install the necessary dependencies:
```bash
pip install -r requirements.txt
py manage.py migrate
py manage.py runserver
```


Usage
To use the Image Classifier, follow these steps:

- Upload an Image: Click on the "Upload Image" button to select an image file from your local system.
- Get Result: After selecting an image, click the "Get Result" button to send the image to the backend for processing.
- View Results: The classification results will be displayed in a table once processing is complete.

### Props
- `file`: The image file to be classified.
- `setIsLoading`: A function to update the loading state.

### Code Explanation
### State Initialization
- `isLoading`: State to manage the loading status.
- `data`: State to store the classification results.

### Image Upload and Processing
- `getResult`: Handles the image upload and sends it to the backend for processing. Updates the state with the results once processing is complete.

### Displaying Results
Displays the image and a table of classification results, including RGB values and color representations.

### Dependencies
- `axios`: For making HTTP requests to the backend.
- `react`: For building the user interface.
- `django`: For the backend infrastructure.
- `django_rest_framework`: For rest API handling.
- `django-cors-headers`: For cross origin API requests.
- `opencv-python`: For image processing.
- `scikit-learn`: For KMeans clustering model to get the colors.
- `PIL`: For image handling.

## Author
Made with ❤️ by Shashank Gupta