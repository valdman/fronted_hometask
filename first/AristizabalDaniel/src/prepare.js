export  function prepare(paths, pages){
    const Results = []; 
    paths.reduce((x, element) => { 
        pages.map(({id, url, description, creatingTime}) => { 
            id == element ?
       Results.push({"id":id, "url":url, "description":description, "creatingTime":creatingTime}):
                null; 
    });
    
    });
    return Results; 
    }
   

    
