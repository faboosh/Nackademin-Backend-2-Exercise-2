async function deletePost(id) {
    let result = await fetch('http://localhost:8080/bloggPost/delete/'+id, {
        "method" : "DELETE",
    })
    if(!result) {
        console.log("Ingen repons")
    } else {
        console.log(result)
    }
    let div = document.getElementById(id)
    div.parentNode.removeChild(div)
}