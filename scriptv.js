    document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById("cotizacion-form");
        const calcularBtn = document.getElementById("calcular-btn");
        const precioFinalSpan = document.getElementById("precio-final");
        const variacionPesosSpan = document.getElementById("variacion-pesos");
        const variacionPorcentajeSpan = document.getElementById("variacion-porcentaje");

        calcularBtn.addEventListener("click", function () {
            // Obtener valores seleccionados del formulario
            const metrosCuadrados = parseInt(document.getElementById("metros-cuadrados").value);
            const zona = document.getElementById("zona").value;
            const calidad = document.getElementById("calidad").value;
            const niveles = document.getElementById("niveles").value;
            const accesoriosPiso = document.getElementById("accesorios-piso").value;
            const accesoriosParedes = document.getElementById("accesorios-paredes").value;
            const accesoriosGriferia = document.getElementById("accesorios-griferia").value;
            const accesoriosVentanas = document.getElementById("accesorios-ventanas").value;
            const accesoriosMuebles = document.getElementById("accesorios-muebles").value;
            const distribucion = document.getElementById("distribucion").value;

            // Calcular precio base según metros cuadrados y zona
            let precioBase = 0;
            if (zona === "Zona Superior") {
                precioBase = metrosCuadrados === 60 ? 139000000 : metrosCuadrados === 90 ? 205000000 : 375000000;
            } else if (zona === "Zona Interm") {
                precioBase = metrosCuadrados === 60 ? 110000000 : metrosCuadrados === 90 ? 180000000 : 285000000;
            } else if (zona === "Zona Baja") {
                precioBase = metrosCuadrados === 60 ? 99000000 : 0; // No disponible para 120m2
            }

            // Aplicar ajustes según calidad y niveles
            if (calidad === "Lujo") {
                precioBase *= 1.105; // +10.5%
            } else if (calidad === "Regular") {
                precioBase *= 0.965; // -3.5%
            }

            if (niveles === "Tres") {
                precioBase *= 1.125; // +12.5%
            } else if (niveles === "Tres con Ático") {
                precioBase *= 1.093; // +9.3%
            }

            // Aplicar ajustes según accesorios de piso
            let aumentoAccesoriosPiso = 0;
            switch (accesoriosPiso) {
                case "Ladrillo":
                    aumentoAccesoriosPiso = 6300;
                    break;
                case "Madera":
                    aumentoAccesoriosPiso = 28500;
                    break;
                case "Cerámicos":
                    aumentoAccesoriosPiso = 33200;
                    break;
                case "Mármol":
                    aumentoAccesoriosPiso = 38500;
                    break;
                case "Granito":
                    aumentoAccesoriosPiso = 11000;
                    break;
                case "Porcelanato":
                    aumentoAccesoriosPiso = 35350;
                    break;
                case "Alfombra":
                    aumentoAccesoriosPiso = 8000;
                    break;
                case "Vinilo":
                    aumentoAccesoriosPiso = 4850;
                    break;
                case "Flotantes":
                    aumentoAccesoriosPiso = 26900;
                    break;
                case "Mosaicos":
                    aumentoAccesoriosPiso = 29500;
                    break;
                default:
                    aumentoAccesoriosPiso = 0;
            }

            // Aplicar ajustes según accesorios de paredes
            let aumentoAccesoriosParedes = 0;
            switch (accesoriosParedes) {
                case "Rústico":
                    aumentoAccesoriosParedes = 850000;
                    break;
                case "Pintura":
                    aumentoAccesoriosParedes = 1800000;
                    break;
                case "Refuerzo":
                    aumentoAccesoriosParedes = 1150000;
                    break;
                default:
                    aumentoAccesoriosParedes = 0;
            }

            // Aplicar ajustes según accesorios de grifería
            let aumentoAccesoriosGriferia = 0;
            switch (accesoriosGriferia) {
                case "Moderada":
                    aumentoAccesoriosGriferia = 450000;
                    break;
                case "Media":
                    aumentoAccesoriosGriferia = 750000;
                    break;
                case "Lujo":
                    aumentoAccesoriosGriferia = 1850000;
                    break;
                default:
                    aumentoAccesoriosGriferia = 0;
            }

            // Aplicar ajustes según accesorios de ventanas
            let aumentoAccesoriosVentanas = 0;
            switch (accesoriosVentanas) {
                case "Gama normal":
                    aumentoAccesoriosVentanas = 950000;
                    break;
                case "Gama alta":
                    aumentoAccesoriosVentanas = 4000000;
                    break;
                default:
                    aumentoAccesoriosVentanas = 0;
            }

            // Aplicar ajustes según accesorios de muebles
            let aumentoAccesoriosMuebles = 0;
            switch (accesoriosMuebles) {
                case "Biblioteca":
                    aumentoAccesoriosMuebles = 500000;
                    break;
                case "Mesa auxiliar cocina":
                    aumentoAccesoriosMuebles = 180000;
                    break;
                case "Repisa TV. Sala":
                    aumentoAccesoriosMuebles = 245000;
                    break;
                case "Gabinete cocina":
                    aumentoAccesoriosMuebles = 115000;
                    break;
                case "Tendedero prendas":
                    aumentoAccesoriosMuebles = 65000;
                    break;
                case "Para el baño":
                    aumentoAccesoriosMuebles = 133000;
                    break;
                default:
                    aumentoAccesoriosMuebles = 0;
            }

            // Calcular el precio base total con los ajustes de accesorios
            const precioBaseConAccesorios = precioBase + aumentoAccesoriosPiso + aumentoAccesoriosParedes + aumentoAccesoriosGriferia + aumentoAccesoriosVentanas + aumentoAccesoriosMuebles;

            // Aplicar descuentos o recargos según la distribución
            if (distribucion === "Interior") {
                precioBaseConAccesorios *= 0.9; // -10%
            } else if (distribucion === "Exterior Sombra") {
                precioBaseConAccesorios *= 1.1; // +10%
            } else if (distribucion === "Exterior Amanecer") {
                precioBaseConAccesorios *= 0.965; // -3.5%
            }

            // Calcular precio final
            const precioFinal = precioBaseConAccesorios;

            // Mostrar resultados
            precioFinalSpan.textContent = `$${precioFinal.toLocaleString()}`;
            variacionPesosSpan.textContent = `$${(precioFinal - precioBase).toLocaleString()}`;
            variacionPorcentajeSpan.textContent = `${((precioFinal - precioBase) / precioBase * 100).toFixed(2)}%`;
        });
    });
