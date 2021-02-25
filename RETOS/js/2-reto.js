const myCollection = { books: [ { title: 'Cien Años de Soledad', author: 'Gabriel García Márquez', 
        read: true }, { title: 'Do Androids Dream of Electric Sheep', author: 'Phillip K. Dick', read: false } ] }; 

    const isRead = (obj) => {
        if(obj.read) return `Ya has leido el libro ${obj.title} de Autor ${obj.author}`;
            return `Aún necesitas leer el libro ${obj.title} de autor ${obj.author}` 
    }

    myCollection.books.forEach((el) =>{
        console.log(isRead(el));
    });