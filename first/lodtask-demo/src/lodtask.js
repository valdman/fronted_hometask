import fetch from 'node-fetch';

export const lodtask = ({ingredientsArray}) => {
    const ingredientsArgs = ingredientsArray.join(",");
  
    const requestApi = (ingredients, page) => {
        return fetch(`http://www.recipepuppy.com/api/?i=${ingredients}&p=${page}`)
        .then((res) => res.json())
        .catch(err => {
            //console.log("Yet another broken page: ", err);
            return Promise.resolve([]);
        })
        .then((res) => res.results);
    };

    const compareRecipes = (a, b) => {
        const getComlexity = (recipe) => recipe.ingredients.split(",").length;
        return Math.sign(getComlexity(a) - getComlexity(b));
    }
  
    const requests = [...Array(20).keys()].map((value) => requestApi(ingredientsArgs, value + 1));
  
    return Promise.all(requests).then(res => {
        const sortedRecipies = res.reduce((memo, current) => memo.concat(current), [])
                                .sort(compareRecipes)
                                .slice(0, 3);

        return sortedRecipies.map(r => ({
                Title: r.title,
                Link: r.href,
                Ingredients: r.ingredients
            }));
      });  
}