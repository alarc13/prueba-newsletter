
function newsletter(event) {
    event.preventDefault(); 
  
    const email = document.getElementById("email").value;
  
    fetch("data.json")
      .then(respuesta => respuesta.json())
      .then(datos => {
        const buscar = datos.some(objeto => objeto.email === email);
        if (buscar) {
          alert("Email ya suscrito");
        } else {
          const nuevoEmail = { email: email };
          datos.push(nuevoEmail);
          const datosActualizados = JSON.stringify(datos);
          fetch("data.json", {
            method: "PUT",
            body: datosActualizados,
            headers: {
              "Content-Type": "application/json"
            }
          }).then(() => {
            alert("Email suscrito correctamente");
          }).catch(error => {
            console.error("Error", error);
          });
        }
      })
      .catch(error => {
        console.error("Error", error);
      });
    console.log(email);
  }
  
  const form = document.getElementById("emailForm");
  form.addEventListener("submit", newsletter);
  