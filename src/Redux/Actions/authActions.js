import firebase from "../../firebase/firebase";

//          registration action
export function registrationForm(email, password) {
  return async (dispatch) => {
    try {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      dispatch(loggedIn(user));
    } catch (error) {
      dispatch(registerError(error.message));
    }
  };
}
//          Register Error Action
export function registerError(error){
    return{
      type: "REGISTER_ERROR",
      payload: error
    }
  }


  //          login action
export function loginForm(email, password) {
    return async (dispatch) => {
      try {
        const user = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        dispatch(loggedIn(user));
      } catch (error) {
        dispatch(loginError(error.message));
      }
    };
  }

  //          Login Error Action
export function loginError(error){
    return{
      type: "LOGIN_ERROR",
      payload: error
    }
  }
  
  //          login function
  function loggedIn(user) {
    return {
      type: "LOGGED_IN",
      payload: user,
    };
  }


  
//          logout action
export function logout() {
    return async (dispatch) => {
      try {
        await firebase.auth().signOut();
        dispatch(loggedOut());
      } catch (error) {
        console.log(error);
      }
    };
  }

  //          logout function
function loggedOut() {
    return {
      type: "LOGGED_OUT",
    };
  }