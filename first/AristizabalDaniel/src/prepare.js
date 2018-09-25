export  function prepare(paths, pages){
    paths.reduce((x, element) => { 
        pages.map(({id, url, description, creatingTime}) => { 
            id == element ?
       console.log({"id":id, "url":url, "description":description, "creatingTime":creatingTime}):
                null; 
    });
    });
    }
   

    
