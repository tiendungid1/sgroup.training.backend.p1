const form = document.getElementById("newBook");
const inputElement = document.getElementById("image");
const pond = FilePond.create(inputElement);
let image;

pond.onaddfile = (err, item) => {
    if (err) {
        alert(err);
        return;
    }
    image = item.getFileEncodeBase64String();
}

if (form) {
    form.addEventListener("submit", async function(e) {
        e.preventDefault();
    
        const name = document.getElementById("name").value;
        const description = document.getElementById("description").value;
    
        const url = 'http://localhost:3000/articles/store';
        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'credentials': 'include',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                description,
                image,
            }),
        }
    
        fetch(url, options)
            .then(data => {
                if (!data.ok) {
                    throw Error(data.status);
                }
                return data.json();
            })
            .then(update => console.log(update))
            .catch(e => {
                alert(e);
                return location.href = "http://localhost:3000/articles/create";
            });
    
        location.href = "http://localhost:3000/";
        return;
    })
}
