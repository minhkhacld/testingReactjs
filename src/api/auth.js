//Create fake data to validate login
const fakeUser = {
  email: "demo@minimos.cc",
  password: "demo1234",
};

//Create cookie to store user information for 24hours
// const setCookie = (cname, cvalue, exdays) => {
//   const d = new Date();
//   d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
//   let expires = "expires=" + d.toUTCString();
//   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }

// const getCookie = (cname) => {
//   let name = cname + "=";
//   let ca = document.cookie.split(";");
//   for (let i = 0; i < ca.length; i++) {
//     let c = ca[i];
//     while (c.charAt(0) === " ") {
//       c = c.substring(1);
//     }
//     if (c.indexOf(name) === 0) {
//       return c.substring(name.length, c.length);
//     }
//   }
//   return "";
// }


//Call Api login
const LoginApi = (email, password) => {
  // console.log('authjs ', email, password)
  let result = {
    isOK: false,
    data: {
      role: "",
      message: "",
      avatar: "",
      email: "",
    }
  };
  try {
    //If correct password and email
    if (email === fakeUser.email && password === fakeUser.password) {
      result = {
        isOK: true,
        data: {
          role: "user",
          message: "Login successful!",
          avatar: "",
          email: "demo@minimos.cc",
        }
      }
      //call API here
    } else {
      throw new Error()
    }
    return result
  }
  catch (err) {
    return {
      isOK: false,
      data: {
        role: null,
        message: "Wrong username or password, please check again!",
        avatar: "",
        email: "",
      }
    };
  };
};


export { LoginApi }