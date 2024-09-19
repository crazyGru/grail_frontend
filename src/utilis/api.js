const API_BASE_URL = "http://ec2-52-90-200-142.compute-1.amazonaws.com";

const fetchAPI = async (endpoint, options) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
  if (!response.ok) {
    const errorDetail = await response.json();
    throw new Error(errorDetail.detail || "An error occurred");
  }
  return response.json();
};

export { fetchAPI };
