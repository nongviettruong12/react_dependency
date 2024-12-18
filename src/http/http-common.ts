import axios from "axios";
import queryString from "query-string";

// Function to fetch configuration from the server
const getConfigFromServer = async () => {
  try {
    const response = await axios.get("https://your-server.com/api/config");
    return response.data; // Example: { BASE_URL: "https://api.example.com" }
  } catch (error) {
    console.error("Error loading configuration:", error);
    // Return default config in case of an error
    return { BASE_URL: "https://default-api.com" };
  }
};

// Function to get access token from localStorage
const getAccessToken = () => {
  return localStorage.getItem("token");
};

// Function to create the HTTP client with the dynamic base URL
const createHttpClient = async (
  p0?: { url: string; method: string; params: any } // Make p0 optional
) => {
  // Fetch config from server
  const config = await getConfigFromServer();
  const baseURL = config.BASE_URL;

  // Create axios instance with the dynamic base URL
  const HTTP_CLIENT = axios.create({
    baseURL: baseURL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json, text/plain",
      "Accept-Language": "en",
      Authorization: `Bearer ${getAccessToken()}`,
    },
    paramsSerializer: (params) => queryString.stringify(params),
  });

  // Request Interceptor
  HTTP_CLIENT.interceptors.request.use(
    (request) => {
      const token = getAccessToken();
      if (token) {
        request.headers.Authorization = `Bearer ${token}`;
      }
      return request;
    },
    (error) => errorHandler(error)
  );

  // Response Interceptor
  HTTP_CLIENT.interceptors.response.use(
    (response) => response,
    (error) => errorHandler(error)
  );

  // Handle dynamic properties if provided (for future extensions)
  if (p0) {
    const { url, method, params } = p0;
    HTTP_CLIENT.defaults.baseURL = url || baseURL;
    HTTP_CLIENT.defaults.method = method || "GET";
    HTTP_CLIENT.defaults.params = params || {};
  }

  return HTTP_CLIENT;
};

// Error Handler for different status codes
const errorHandler = (error) => {
  if (error.response) {
    const { status, data } = error.response;
    switch (status) {
      case 401:
        console.log("Unauthorized. Token expired or missing.");
        break;
      case 403:
        console.log("You do not have permission to access this resource.");
        break;
      case 404:
        console.log("The requested resource was not found.");
        break;
      case 500:
        console.log("An internal server error occurred. Please try again later.");
        break;
      default:
        console.log(`An error occurred: ${data?.message || "Unknown error"}`);
        break;
    }
  } else {
    console.log("Network or server error.");
  }
  return Promise.reject(error);
};

// Example Usage: Initialize the client and make requests
const fetchData = async () => {
  const HTTP_CLIENT = await createHttpClient();

  HTTP_CLIENT.get("/endpoint") // Replace with your API endpoint
    .then((response) => console.log(response.data))
    .catch((error) => console.error(error));
};

fetchData(); // Call the fetchData function to make the request

export default createHttpClient; // Export the function to create a client
