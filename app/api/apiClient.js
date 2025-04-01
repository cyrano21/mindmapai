/**
 * API Client Utility
 *
 * This file provides a centralized API client for making requests to the backend.
 * It ensures all API calls use the correct base URL and consistent error handling.
 */

// Set the correct base URL for API requests
// Using relative URL to ensure API calls work regardless of the port
const API_BASE_URL = "";

/**
 * Fetch wrapper with error handling
 * @param {string} endpoint - The API endpoint to call (without the base URL)
 * @param {Object} options - Fetch options (method, headers, body, etc.)
 * @returns {Promise} - Promise that resolves to the JSON response
 */
async function fetchAPI(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;

  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API request failed:", error);
    throw error;
  }
}

/**
 * API client with methods for different request types
 */
const apiClient = {
  /**
   * GET request
   * @param {string} endpoint - The API endpoint
   * @param {Object} options - Additional fetch options
   */
  get: (endpoint, options = {}) =>
    fetchAPI(endpoint, { ...options, method: "GET" }),

  /**
   * POST request
   * @param {string} endpoint - The API endpoint
   * @param {Object} data - The data to send in the request body
   * @param {Object} options - Additional fetch options
   */
  post: (endpoint, data, options = {}) =>
    fetchAPI(endpoint, {
      ...options,
      method: "POST",
      body: JSON.stringify(data),
    }),

  /**
   * PUT request
   * @param {string} endpoint - The API endpoint
   * @param {Object} data - The data to send in the request body
   * @param {Object} options - Additional fetch options
   */
  put: (endpoint, data, options = {}) =>
    fetchAPI(endpoint, {
      ...options,
      method: "PUT",
      body: JSON.stringify(data),
    }),

  /**
   * DELETE request
   * @param {string} endpoint - The API endpoint
   * @param {Object} options - Additional fetch options
   */
  delete: (endpoint, options = {}) =>
    fetchAPI(endpoint, {
      ...options,
      method: "DELETE",
    }),
};

export default apiClient;
