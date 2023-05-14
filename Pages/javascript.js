// Obtener el año actual
const currentYear = new Date().getFullYear();

// Insertar el año en el footer
document.querySelector('footer').innerHTML += '<p>&copy; ' + currentYear + ' TuDominio. Todos los derechos reservados.</p>';

// insertar al corrousel
<script type="module">
  import { Toast } from 'bootstrap.esm.min.js'

  Array.from(document.querySelectorAll('.toast'))
    .forEach(toastNode => new Toast(toastNode))
</script>

import * as Popper from "@popperjs/core"

