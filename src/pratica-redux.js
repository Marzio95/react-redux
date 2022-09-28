// questo è un esempio de redux in javascript normale senza react

const redux = require("redux"); // così si importa redux
const createStore = redux.createStore;

// REDUCER
const initialState = {
  counter: 1,
};

// ACTIONS
const aument = () => {
  return {
    type: "AUMENTA",
    value: 9,
  };
};

const increment = () => {
  return {
    type: "INCREMENTA",
    value: store.counter + 1,
  };
};

// il reducer è una funzione, che funziona come lo useState, ha due parametri in partenza: 1 lo state attuale, 2 l azione che cambia lo state
const reducer = (state = initialState, action) => {
  if (action.type === "INCREMENTA") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === "AUMENTA") {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }

  return state;
};

// STORE
const store = createStore(reducer); // passo la funzione reducer che mi restituisce uno state (return state)
console.log(store.getState());

// SUBSCIPTION quando dispatchiamo una azione triggheriamo (attiviamo) il subsciption
// infatti se io attivo il codice con il comando node pratica-redux.js (controllando con il comando ls se ho il file disponibile altrimenti devo
// entrare nella cartella che lo contien) anche se il codice del subscription viene prima del dispatch questo si triggera solo dopo il dispatch
store.subscribe(() => {
  console.log("from.subscription", store.getState());
});

// DISPATCH ACTION
store.dispatch(aument());
console.log(store.getState());
