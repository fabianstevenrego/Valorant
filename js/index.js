
function cambiarMapa(mapaId) {
    fetch(`https://valorant-api.com/v1/maps/${mapaId}`)
        .then(response => response.json())
        .then(data => {
            const carouselDiv = document.getElementById('carrusel');
            carouselDiv.innerHTML = `
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner rounded">
            <div class="carousel-item active">
                <img id="mi-imagen" src="${data.data.displayIcon}" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                </br>
                    <h5 id="parrafo" >Mapa</h5>
                    <p id="parrafo" >Tactico</p>
                </div>
            </div>
            <div class="carousel-item">
                <img id="mi-imagen" src="${data.data.listViewIcon}" class="d-block w-100 imgvp" alt="...">
                <div class="carousel-caption d-none d-md-block">
                </br>
                <h5 id="parrafo" >Vista Previa</h5>
                <p id="parrafo" ></p>
                </div>
            </div>
            <div class="carousel-item">
                <img id="mi-imagen" src="${data.data.splash}" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                </br>
                <h5 id="parrafo" >Imagen oficial del mapa</h5>
                <p id="parrafo" >${data.data.displayName}</p>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" 
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Anterior</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Siguiente</span>
        </button>
    </div>
        `;

            const contenedorDiv = document.createElement('div');
            contenedorDiv.innerHTML = `
          <h1>${data.data.displayName}</h1>
          <h4> Coordenadas</h4>
          <p>${data.data.coordinates}</p>
        `;
            carouselDiv.appendChild(contenedorDiv);
        })
        .catch(error => console.error(error));
}

