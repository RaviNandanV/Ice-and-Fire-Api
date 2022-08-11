const first_container = document.createElement("div");
first_container.setAttribute("class", "first_container");
document.body.append(first_container);
const second_container = document.createElement("div");
second_container.setAttribute("class", "second_container");
first_container.append(second_container);
const third_container = document.createElement("div");
third_container.setAttribute("class", "third_container");
first_container.append(third_container);
async function getdetails() {
    
        const url = await fetch("https://www.anapioficeandfire.com/api/books");
        const data = await url.json();
        console.log(data);
        data.forEach((book) => createBook(book));      
}
getdetails();
function createBook({name,authors,numberOfPages,publisher,released,isbn}) 
{
    const container = document.createElement("div");
    container.setAttribute("class", "container");
    container.innerHTML = `
       
        <div class = "book_info">
            <p class = "name"> Name Of the Book :${name}</p>
            <p class = "authors"> Author :${authors}</p>  
            <p class = "numberOfPages">Number of Pages ${numberOfPages}</p>
            <p class = "publisher">Publisher:${publisher}</p>
            <p class = "released">Released:${released}</p>
            <p class = "isbn">ISBN :${isbn}</p>
           

    
        <div>
 

        `
    third_container.append(container);    
}