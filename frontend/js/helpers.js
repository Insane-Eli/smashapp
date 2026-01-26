
function jsonify(response){
response
    .then((res) => res.json())
    .then((data) => JSON.stringify(data, null, 2))
    .catch((err) => console.error(err));
}
return response;