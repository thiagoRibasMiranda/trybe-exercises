const showCountValue = (counter) => {
  const h1Element = document.getElementById("counter");
  h1Element.innerText = counter;
};

showCountValue(0);
// ========== ACTIONTYPES ==========
const INCREMENTO = "INCREMENTO";
const DECREMENTO = "DECREMENTO";

// ========== ACTIONS ==========
const actionIncremento = () => {
  // DISPARA A ACTION DE ADICIONAR + 1 AO COUNTER
  //store.???
  store.dispatch({ type: INCREMENTO });
};

const actionDecremento = () => {
  // DISPARA A ACTION DE REMOVER - 1 AO COUNTER
  //store.???
  store.dispatch({ type: DECREMENTO });
};
// ========== REDUCER ==========
const initialState = {
  number: 0
};
const reducer = (state = initialState, action) => {
  // console.log(state);
  // console.log(store);
  // if (action.type = "Soma"){
  //   return {...state, counter: 1};
  // } else if (action.type = "Subtrai"){
  //   return {...state, counter: 2};
  // };
  switch (action.type) {
    case INCREMENTO:
      return {
        number: state.number + 1
      };
    case DECREMENTO:
      return {
        number: state.number - 1
      };
    default:
      return {
        ...state
      };
  }
};

// ========== STORE ==========
const store = Redux.createStore(reducer);

store.subscribe(() => {
  const counter = store.getState();
  showCountValue(counter.number);
  console.log(counter);
});

const btnInc = document.getElementById("inc");
const btnDec = document.getElementById("dec");

btnInc.addEventListener("click", actionIncremento);
btnDec.addEventListener("click", actionDecremento);
