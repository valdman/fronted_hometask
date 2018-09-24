export const getAllURL = (data) => {
    let paths = [];
    (function searchPaths(id, nodes) {
        paths.push(id); // we push in the ids into the array
        nodes.forEach(element => {
            searchPaths(element.id, element.nodes);
        });
    })(data.id, data.nodes); // we throw in data.id and data.nodes 
  
  return paths; // and return an array with all the ids and subids 
}