// HACKeXe - Script para activar el traductor de la barra de accesibilidad
$exe.options.atools.translator=true

// HACKeXe - Abre todos los enlaces en una pestaña nueva
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a').forEach(function(link) {
        var isExternal = new URL(link.href).host !== window.location.host;
        if (isExternal) {
            link.target = '_blank';
        }
    });
});