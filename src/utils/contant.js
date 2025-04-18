export const DOMAIN = "http://localhost:3000/api/";
//export const DOMAIN = `https://3062-2402-800-6345-a909-69c8-9a86-b06f-8eba.ngrok-free.app/api/`;
export const API = {
  // --------------- AUTH ---------------
  AUTH: DOMAIN + `auth`,
};

export const LOCAL_STORAGE = {
  TOKEN: "token",
  USER: "user_remember",
};

export const ROLE = {
  DIRECTOR: 1,
  MANAGER: 2,
  SALE: 3,
};

export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  ERROR: 500,
  NOT_FOUND: 404,
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
  FORBIDDEN: 403,
};
