var client = contentful.createClient({
  space: "o7pj7562yj77",
  accessToken: "5JoMKGzw3sIBaD7Nxpqig0um1Ltft240lcYBJxbaJpk",
});

client.getEntries().then(function (entries) {
    var container = document.getElementById("contentful-custom");
    entries.items.forEach(function (entry) {
      var div = document.createElement("div");
      div.className = "col-3"
      div.innerHTML = `<div class="card card-custom">
                         <div class="card-body">
                          <h4 class="fs-2 fw-4">${entry.fields.internalName}</h4>
                          <p>${entry.fields.pageTitle ? entry.fields.pageTitle : "Title"}</p>
                          <p>${entry.fields.pageDescription ? entry.fields.pageDescription : "This is the descriptive paragraph used in this project and it shows the details of this element"}</p>
                         </div>
                       </div>`;
      container.appendChild(div);
      console.log(entries)
    });
  })
  .catch(function (error) {
    console.error("Error:", error);
  });
