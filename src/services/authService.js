import API from "./api";

export const login = async (credentials) => {
  try {
    const response = await API.post("/user/login", credentials);
    localStorage.setItem('userData',JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error al iniciar sesión");
  }
};

export const register = async (userData) => {
  try {
    const response = await API.post("/user/create", userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error al registrarse");
  }
};

export const getLocations = async () => {
  try {
    const response = await API.get("/location/get-all");
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error al cargar ubicaciones");
  }
};

export const createProperty = async (propertyData) => {
  try {
    const response = await API.post("/property/create", propertyData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error al crear la propiedad");
  }
};

export const getProperties = async () => {
  try {
    const response = await API.get("/property/get-all");
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error al cargar propiedades");
  }
};

export const getProLocation = async () => {
  try {
    const response = await API.get("/property/get-all-location");
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error al cargar propiedades");
  }
};


export const getReservations = async () => {
  try {
    const response = await API.get("/reservation/get-all");
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error al cargar propiedades");
  }
};

export const createReservation = async (reservationData) => {
  try {
    const response = await API.post("/reservation/create", reservationData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error al crear la reserva");
  }
};


