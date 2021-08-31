import React, { useContext, useReducer, useEffect } from 'react';

import {
  birthdayData,
  menuData,
  projectData,
  questionsData,
  reviewsData,
  peopleData,
} from '../data';
import reducer from '../reducers/reducer';

const AppContext = React.createContext();

const initialState = {
  dataBirthday: birthdayData,
  dataProject: projectData,
  dataTours: [],
  dataReviews: reviewsData,
  dataQuestions: questionsData,
  dataMenu: menuData,
  dataMenuTemp: menuData,
  loading: false,
  index: 0,
  allCategories: ['all', ...new Set(menuData.map((item) => item.category))],
  dataTabs: [],
  tabsValue: 0,
  dataPeople: peopleData,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearAll = () => {
    dispatch({ type: 'CLEAR_ALL' });
  };

  const fetchToursData = () => {
    dispatch({ type: 'LOADING' });
    try {
      fetch('https://course-api.com/react-tours-project')
        .then((res) => res.json())
        .then((dataTours) =>
          dispatch({ type: 'DISPLAY_ITEMS', payload: dataTours })
        );
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTabsData = () => {
    dispatch({ type: 'LOADING' });
    try {
      fetch('https://course-api.com/react-tabs-project')
        .then((res) => res.json())
        .then((dataTabs) =>
          dispatch({ type: 'DISPLAY_TABS_ITEMS', payload: dataTabs })
        );
    } catch (error) {
      console.log(error);
    }
  };

  const removeTour = (id) => {
    dispatch({ type: 'REMOVE_TOUR', payload: id });
  };

  const reviewsPrevPerson = () => {
    dispatch({ type: 'REVIEWS_PREV_PERSON' });
  };
  const reviewsNextPerson = () => {
    dispatch({ type: 'REVIEWS_NEXT_PERSON' });
  };
  const reviewsRandomPerson = () => {
    dispatch({ type: 'REVIEWS_RANDOM_PERSON' });
  };

  const selectCategory = (category) => {
    dispatch({ type: 'SELECT_CATEGORY', payload: category });
  };

  const changeTabsValue = (index) => {
    console.log(index);
    dispatch({ type: 'CHANGE_TABS_VALUE', payload: index });
  };

  useEffect(() => {
    fetchToursData();
    fetchTabsData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearAll,
        removeTour,
        fetchToursData,
        reviewsPrevPerson,
        reviewsNextPerson,
        reviewsRandomPerson,
        selectCategory,
        changeTabsValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
