// Import the Axios library for making HTTP requests
import axios from "axios";

// Set the base URL for the YouTube API
const BASE_URL = "https://youtube138.p.rapidapi.com";

// Define the options for the API request
const options = {
  // Query parameters for the request (hl stands for language and gl stands for geolocation)
  params: {
    hl: "en", // Request data in English language
    gl: "US", // Request data relevant to the United States
  },
  // Request headers with the API key and host information
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY, // Your API key
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com", // The host for the API request
  },
};

// Function to fetch data from the YouTube API
// An asynchronous function is a special type of
// function that allows you to work with promises
//  more easily. Promises are objects that represent
//  the eventual completion (or failure) of an asynchronous 
// operation and allow you to handle the results in a more organized way.
export const fetchDataFromApi = async (url) => {
  // Use Axios to make an HTTP GET request to the specified URL with the defined options
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  // Return the data received from the API
  return data;
};
// async is used here to define an asynchronous function, 
// and await is used inside the function to wait for the result
//  of asynchronous operations before moving on to the next steps in the code.
