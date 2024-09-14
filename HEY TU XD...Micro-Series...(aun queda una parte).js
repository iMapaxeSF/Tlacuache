document.getElementById('keywordForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const keyword = document.getElementById('keyword').value.toLowerCase(); 
    const MyLittlePony = 'mylittlepony';
    const imageContainer = document.getElementById('imageContainer');
    const formContainer = document.getElementById('formContainer');
    
    if (keyword === MyLittlePony) {
        formContainer.classList.add('hidden');
        
        setTimeout(() => {
            imageContainer.innerHTML = '<img src="MLP IDW... (faltan dos partes mas para completar esta oracion), te recomiendo checar el codigo fuente de la carta.png" width=850px style="z-index=9999; position=absolute;"/>';
        }, 1500);
    } else {
        imageContainer.innerHTML = '<p>"Palabra" incorrecta. Inténtalo de nuevo, no seas desgraciado/a</p>';
    }
});