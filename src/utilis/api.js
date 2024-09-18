const API_BASE_URL = "http://localhost:8000";

const fetchAPI = async (endpoint, options) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
  if (!response.ok) {
    const errorDetail = await response.json();
    throw new Error(errorDetail.detail || "An error occurred");
  }
  return response.json();
};

export { fetchAPI };
