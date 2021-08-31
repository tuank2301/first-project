const reducer = (state, action) => {
  switch (action.type) {
    case 'CLEAR_ALL':
      return { ...state, dataBirthday: [] };
    case 'LOADING':
      return { ...state, loading: true };
    case 'DISPLAY_ITEMS':
      return { ...state, dataTours: action.payload, loading: false };
    case 'REMOVE_TOUR':
      return {
        ...state,
        dataTours: state.dataTours.filter((item) => item.id !== action.payload),
      };
    case 'REVIEWS_PREV_PERSON':
      return {
        ...state,
        index: checkIndex(state.index - 1),
      };
    case 'REVIEWS_NEXT_PERSON':
      return {
        ...state,
        index: checkIndex(state.index + 1),
      };
    case 'REVIEWS_RANDOM_PERSON':
      return {
        ...state,
        index: randomIndex(),
      };
    case 'SELECT_CATEGORY':
      return {
        ...state,
        dataMenuTemp:
          action.payload === 'all'
            ? state.dataMenu
            : state.dataMenu.filter((item) => item.category === action.payload),
      };
    case 'DISPLAY_TABS_ITEMS':
      return { ...state, dataTabs: action.payload, loading: false };
    case 'CHANGE_TABS_VALUE':
      return { ...state, tabsValue: action.payload };
    default:
      return state;
  }

  function checkIndex(index) {
    if (index < 0) return state.dataReviews.length - 1;
    else if (index === state.dataReviews.length) return 0;
    else return index;
  }

  function randomIndex() {
    let newIndex = Math.floor(Math.random() * state.dataReviews.length);
    if (newIndex === state.index) return checkIndex(newIndex + 1);
    else return newIndex;
  }
};

export default reducer;
