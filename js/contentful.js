var client = contentful.createClient({
  space: "o7pj7562yj77",
  accessToken: "5JoMKGzw3sIBaD7Nxpqig0um1Ltft240lcYBJxbaJpk",
});

client
  .getEntries()
  .then(function (entries) {
    var container = document.getElementById("contentful-custom");
    entries.items.forEach(function (entry) {
      var div = document.createElement("div");
      var imgTag = "";
      div.className = "row contentful-item";
      if (entry.fields?.featuredProductImage?.fields.file.url) {
        imgTag = `<img class="product-img" src="${entry.fields.featuredProductImage.fields.file.url}" />`;
        div.innerHTML = `
                          <div class="col-6">
                            <h4>${
                              entry.fields.internalName
                            }</h4>
                            <p>${
                              entry.fields.pageDescription
                                ? entry.fields.pageDescription
                                : "This is the descriptive paragraph used in this project and it shows the details of this element"
                            }</p>
                          </div>
                          <div class="col-6">
                            ${imgTag}
                          </div>
                       `;
      } else {
        div.innerHTML = `<div class="row">
                          <div class="col-12">
                            <h4>${
                              entry.fields.internalName
                            }</h4>
                            <p>${
                              entry.fields.pageDescription
                                ? entry.fields.pageDescription
                                : "This is the descriptive paragraph used in this project and it shows the details of this element"
                            }</p>
                          </div>
                       </div>`;
      }
      container.appendChild(div);
    });
  })
  .catch(function (error) {
    console.error("Error:", error);
  });
