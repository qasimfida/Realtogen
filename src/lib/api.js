const BASE_URL = "https://06p1dxq3c5.execute-api.us-east-1.amazonaws.com/dev/auth";

export const loginUser = async (email,password) => {
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password:password,
    //   isExtAuth: true, 
    }),
  });

  if (!res.ok) {
    throw new Error("Login failed");
  }

  return res.json();
};

export const registerUser = async ({ name, email, password, isExtAuth = false }) => {
  const requestBody = {
    name: name,
    email: email,
  };

  
  if (!isExtAuth) {
    requestBody.password = password;
  } else {
    requestBody.isExtAuth = true;
  }

  const res = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });

  if (!res.ok) {
    throw new Error("Registration failed");
  }

  return res.json();
};
