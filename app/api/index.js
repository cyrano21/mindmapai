/**
 * API Routes Index
 *
 * This file exports all API-related functions and endpoints for easy imports
 */

import apiClient from "./apiClient";

/**
 * Profile API functions
 */
export const profileApi = {
  /**
   * Get user profile data
   * @returns {Promise} - Promise that resolves to the profile data
   */
  getProfile: () => apiClient.get("/api/profile"),

  /**
   * Update user profile data
   * @param {Object} profileData - The profile data to update
   * @returns {Promise} - Promise that resolves to the updated profile data
   */
  updateProfile: (profileData) => apiClient.put("/api/profile", profileData),
};

/**
 * Tests API functions
 */
export const testsApi = {
  /**
   * Get test results
   * @returns {Promise} - Promise that resolves to the test results
   */
  getTestResults: () => apiClient.get("/api/tests"),

  /**
   * Save test results
   * @param {Object} testData - The test data to save
   * @returns {Promise} - Promise that resolves to the saved test data
   */
  saveTestResults: (testData) => apiClient.post("/api/tests", testData),
};

/**
 * Export the API client for direct use
 */
export default apiClient;
