document.getElementById("btn").addEventListener("click", function () {
   const result = document.getElementById("result");
   const error = document.getElementById("error");
   result.textContent = "";
   error.textContent = "";

   const select = document.getElementById("select").value;
   const input = document.getElementById("input").value;

   result.innerHTML = `<div class='load'></div>`;

   fetch(`https://swapi.dev/api/${select}/${input}/`)
      .then((response) => {
         if (!response.ok || input > 10) {
            throw new Error("Ошибка 404");
         }
         return response.json();
      })
      .then((data) => {
         console.log(data);
         result.textContent =
            JSON.stringify(data.name) || JSON.stringify(data.title);
      })

      .catch((error) => {
         error.textContent = "Ошибка: " + error.message;
         document.querySelector(".load").remove();
      })
      .finally(() => {
         input.value = "";
      });
});