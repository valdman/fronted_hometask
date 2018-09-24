export const prepare = (paths, pages) => {
    let pagesFull = [];

    paths.forEach(element => {  // takes the info from paths and pages and merge it in one array
        pages.map(({id, url, description, creatingTime}) => {  
            if(id == element ){ 
            pagesFull.push({"id":id, "url":url, "description":description, "creatingTime":creatingTime});
                null; 
            }
        })  
        
    });
    return pagesFull;  
    }

    
