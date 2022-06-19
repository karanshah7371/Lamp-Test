function subscribeNewsletter(data) {
  var formdata = new FormData();
  formdata.append("EMAIL", data);

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      if (this.responseText == "") {
        console.log("Successful");
      }
    }
  });

  xhr.open(
    "POST",
    "https://2707512f.sibforms.com/serve/MUIEAOtQZAJ3orobh805zIofj3E8OE51IoqflLBb7xpDoekP03QguLkdiFPKXSkbu0n2t4jAAhR27IW-aId3VczpCTg43zX7ZamQ7DNgYsXNvLgm_ErYx9tNkr9yzLuZryepPVtslh6AOmn0RbWNHUL2aRmOR7ny1_hHoiYpWzZgR-exD3oUWXcsggf5Co9voOD9HJ-Kgd3XxxfY"
  );

  xhr.send(formdata);
}
