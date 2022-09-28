const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case "SIGN_IN":
      console.log("Cliccato");
      return (state = true);

    case "SIGN_OUT":
      return (state = false);

    default:
      return state;
  }
};

export default loggedReducer;
