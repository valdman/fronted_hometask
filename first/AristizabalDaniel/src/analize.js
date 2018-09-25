
export const getAllURL = (data) => {
    const paths = []; 
    (function searchPaths(id, nodes) {
        Array.from(data).push(id); 
        paths.push(id);
        nodes.forEach(element => {
            searchPaths(element.id, element.nodes);
        });
    })(data.id, data.nodes); 
  return paths; 
}
