document.addEventListener('DOMContentLoaded', function() {

    // botón para cambiar entre modo oscuro/claro
    const header = document.querySelector('.header');
    const modoBtn = document.createElement('button');
    modoBtn.textContent = '🌙 Modo Oscuro';
    modoBtn.classList.add('modo-btn');
    header.appendChild(modoBtn);

    // Funcionalidad 
    modoBtn.addEventListener('click', function() {
        document.body.classList.toggle('modo-oscuro');
        if (document.body.classList.contains('modo-oscuro')) {
            modoBtn.textContent = '☀️ Modo Claro';
        } else {
            modoBtn.textContent = '🌙 Modo Oscuro';
        }
    });

    // Se crea una galería simple de fotos
    const presentacionContenido = document.querySelector('.presentacion__contenido');
    
    const galeriaSection = document.createElement('section');
    galeriaSection.classList.add('galeria');
    
    const galeriaTitle = document.createElement('h2');
    galeriaTitle.textContent = 'Mi Galería Formula 1';
    galeriaTitle.classList.add('galeria__titulo');
    
    const imagenesContainer = document.createElement('div');
    imagenesContainer.classList.add('galeria__imagenes');
    
    // Imágenes de ejemplo 
    const imagenes = [
        { src: 'imagenes/F1 A.jpg', alt: 'Imagen 1',  },
        { src: 'imagenes/F1 M.jpg', alt: 'Imagen 2',  },
        { src: 'imagenes/F1 F.jpg', alt: 'Imagen 3',  },
    ];
    
    
    const imagenPrincipal = document.createElement('div');
    imagenPrincipal.classList.add('galeria__principal');
    const imgPrincipal = document.createElement('img');
    imgPrincipal.src = imagenes[0].src;
    imgPrincipal.alt = imagenes[0].alt;
    const tituloPrincipal = document.createElement('p');
    tituloPrincipal.textContent = imagenes[0].titulo;
    imagenPrincipal.appendChild(imgPrincipal);
    imagenPrincipal.appendChild(tituloPrincipal);
    
    
    const miniaturas = document.createElement('div');
    miniaturas.classList.add('galeria__miniaturas');
    
    imagenes.forEach((imagen, index) => {
        const miniatura = document.createElement('img');
        miniatura.src = imagen.src;
        miniatura.alt = imagen.alt;
        miniatura.classList.add('galeria__miniatura');
        
       
        miniatura.addEventListener('click', function() {
            imgPrincipal.src = imagen.src;
            imgPrincipal.alt = imagen.alt;
            tituloPrincipal.textContent = imagen.titulo;
            
            
            document.querySelectorAll('.galeria__miniatura').forEach(min => {
                min.classList.remove('activa');
            });
            miniatura.classList.add('activa');
        });
        
        
        if (index === 0) {
            miniatura.classList.add('activa');
        }
        
        miniaturas.appendChild(miniatura);
    });
    
    galeriaSection.appendChild(galeriaTitle);
    galeriaSection.appendChild(imagenPrincipal);
    galeriaSection.appendChild(miniaturas);

    presentacionContenido.appendChild(galeriaSection);
    
    // Mensaje de bienvenida 
    const mensajeBienvenida = document.createElement('div');
    mensajeBienvenida.classList.add('mensaje-bienvenida');
    mensajeBienvenida.textContent = '¡Bienvenido a mi portafolio!';
    document.body.appendChild(mensajeBienvenida);
    
    // Hacer que el mensaje desaparezca después de 3 segundos
    setTimeout(function() {
        mensajeBienvenida.classList.add('oculto');
        setTimeout(function() {
            mensajeBienvenida.remove();
        }, 500);
    }, 3000);
});