export const fetchCategories = () => {
  return (dispatch) => {
    fetch(`https://pinterestcloneapi.herokuapp.com/categories`)
      .then((res) => res.json())
      .then((catData) =>
        dispatch({ type: "FETCH_CATEGORIES", payload: catData })
      );
  };
};
