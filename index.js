
        const inputTexto = document.getElementById('texto');
        const boton = document.getElementById('cambiarColor');

        inputTexto.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                const valor = inputTexto.value.trim();
                if (valor.length === 0) {
                    alert('No ingresaste ningún texto.');
                } else {
                    alert('Texto ingresado: ' + valor);
                }
            }
        });

        const temas = [
            { background: 'white', color: 'black' },
            { background: 'black', color: 'white' },
            { background: 'lightblue', color: 'red' }
        ];

        let indiceTema = 0;

        function aplicarTema() {
            const tema = temas[indiceTema];
            document.body.style.backgroundColor = tema.background;
            document.body.style.color = tema.color;
        }

        boton.addEventListener('click', function() {
            indiceTema = (indiceTema + 1) % temas.length;
            aplicarTema();
        });

        aplicarTema();
 