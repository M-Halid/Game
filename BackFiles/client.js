
const form = document.querySelector("form")
const witz = document.querySelector(".loading")
witz.style.display = "none"
const API_URL = "http://localhost:5000/mews"

form.addEventListener("submit", (e) => {
    e.preventDefault()
    witz.style.display = ""
    form.style.display = "none"

    const formData = new FormData(form)
    const name = formData.get("name")
    const content = formData.get("content")
    const mew = {
        name,
        content
    }

    fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(mew),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())
        .then(createdMew => {
            console.log(createdMew);
            witz.style.display = "none"
            form.style.display = ""
            form.reset()


        })

})

