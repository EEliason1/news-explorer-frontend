// import { request } from "./utils";

// const baseUrl = "http://localhost:3001";

function signup({ email, password, username }) {
  return new Promise((resolve, reject) => {
    resolve({ token: "temp token" });
  });
}

function signin({ email, password }) {
  return new Promise((resolve, reject) => {
    resolve({ token: "temp token" });
  });
}

function checktoken(token) {
  return new Promise((resolve, reject) => {
    resolve({
      data: { name: "temp name", email: "fake@example.com", id: "fake-id" },
    });
  });
}

export { signin, signup, checktoken };
