/* =========================================================================
   SISTEMA NACIONAL DE VACUNACIÓN Y CERTIFICADOS DE SALUD (MPPS VENEZUELA)
   ========================================================================= */

// Base de datos local en memoria con datos de ejemplo
const baseDatosMPPS = {
  usuarios: [
    {
      cedula: "18452123",
      tipoCedula: "V-",
      primerNombre: "Carmen",
      segundoNombre: "Elena",
      primerApellido: "Rodríguez",
      segundoApellido: "Pérez",
      sexo: "Femenino",
      fechaNacimiento: "1990-04-12",
      correo: "carmen.rodriguez@email.com",
      telefono: "0414-1234567",
      estado: "Miranda",
      municipio: "Sucre",
      parroquia: "Petare",
      centroSalud: "Hospital Dr. Domingo Luciani",
      alergias: "Penicilina, Componentes del Huevo, Timerosal",
      vacunas: [
        {
          biologico: "COVID-19 (Sinopharm / Vero Cell)",
          dosis: "1ra Dosis",
          lote: "LOT-CV2025-01",
          fecha: "2025-02-10",
          hora: "08:30",
          centro: "Hospital Dr. Domingo Luciani",
          licenciado: "Lic. Carmen Solórzano (MPPS-29180)",
          estatus: "Completado"
        },
        {
          biologico: "COVID-19 (Sinopharm / Vero Cell)",
          dosis: "2da Dosis",
          lote: "LOT-CV2025-08",
          fecha: "2025-03-03",
          hora: "09:00",
          centro: "Hospital Dr. Domingo Luciani",
          licenciado: "Lic. Carmen Solórzano (MPPS-29180)",
          estatus: "Completado"
        },
        {
          biologico: "Fiebre Amarilla (Cepa 17D)",
          dosis: "Dosis Única (Vitalicia)",
          lote: "LOT-FA2025-99",
          fecha: "2025-06-15",
          hora: "10:15",
          centro: "CDI Petare Sur",
          licenciado: "Lic. Yaritza Mendoza (MPPS-45109)",
          estatus: "Completado"
        }
      ]
    }
  ],
  estados: [
    "Distrito Capital", "Miranda", "Aragua", "Carabobo", "Lara", "Zulia", "Anzoátegui", "Bolívar", "Táchira", "Mérida"
  ]
};

// Variable para el usuario activo cargado
let usuarioActivo = baseDatosMPPS.usuarios[0];

/* -------------------------------------------------------------------------
   1. CONTROL Y NAVEGACIÓN DE VISTAS Y MENÚS
   ------------------------------------------------------------------------- */

window.mostrarVista = function(idVista) {
  document.querySelectorAll('.view-screen').forEach(view => {
    view.classList.remove('active');
  });
  
  const vistaObjetivo = document.getElementById(idVista);
  if (vistaObjetivo) {
    vistaObjetivo.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Ocultar menú desplegable al cambiar de vista
  const dropdownMenu = document.getElementById('systemDropdownMenu');
  if (dropdownMenu) dropdownMenu.classList.remove('show');
};

window.navegarDesdeMenu = function(modulo) {
  if (modulo === 'salud-vacunacion') {
    window.mostrarVista('vista-login-salud');
    document.getElementById('authSaludTitulo').innerText = "Acceso: Módulo de Vacunación";
  } else if (modulo === 'salud-certificados') {
    window.mostrarVista('vista-login-salud');
    document.getElementById('authSaludTitulo').innerText = "Acceso: Certificados de Salud";
  } else if (modulo === 'admin') {
    window.mostrarVista('vista-login-admin');
  }
};

/* -------------------------------------------------------------------------
   2. INICIALIZACIÓN AL CARGAR EL DOCUMENTO
   ------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  // Inicialización del Menú "Ingrese al Sistema ▼"
  const btnToggle = document.getElementById('btnToggleEnterDropdown');
  const dropdownMenu = document.getElementById('systemDropdownMenu');

  if (btnToggle && dropdownMenu) {
    btnToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdownMenu.classList.toggle('show');
    });

    document.addEventListener('click', () => {
      dropdownMenu.classList.remove('show');
    });
  }

  // Cargar Estados en los selects
  poblarSelectsEstados();
  
  // Cargar datos por defecto del usuario Carmen Elena
  cargarDatosUsuarioEnVistaVacunas(usuarioActivo);
});

/* -------------------------------------------------------------------------
   3. FUNCIONALIDADES DEL MÓDULO DE VACUNACIÓN
   ------------------------------------------------------------------------- */

function poblarSelectsEstados() {
  const selects = ['regSaludEstado', 'modUsrEstado'];
  selects.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.innerHTML = '<option value="">-- Seleccione Estado --</option>';
      baseDatosMPPS.estados.forEach(estado => {
        el.innerHTML += `<option value="${estado}">${estado}</option>`;
      });
    }
  });
}

function cargarDatosUsuarioEnVistaVacunas(usr) {
  if (!usr) return;

  // Actualizar resumen visual del usuario
  document.getElementById('vacUsrDisplayNombre').innerText = `${usr.primerNombre} ${usr.segundoNombre || ''} ${usr.primerApellido} ${usr.segundoApellido || ''}`;
  document.getElementById('vacUsrDisplayCedula').innerText = `(${usr.tipoCedula}${usr.cedula})`;
  document.getElementById('vacUsrDisplaySexo').innerText = usr.sexo;
  document.getElementById('vacUsrDisplayEdad').innerText = calcularEdad(usr.fechaNacimiento) + " años";
  document.getElementById('vacUsrDisplayCorreo').innerText = usr.correo;
  document.getElementById('vacUsrDisplayUbicacion').innerText = `${usr.estado} - ${usr.parroquia}`;
  
  // Actualizar alerta de alergias
  document.getElementById('vacUsrDisplayAlergias').innerText = usr.alergias || 'Sin alergias registradas';

  // Cargar tabla de historial de vacunas
  const tbody = document.getElementById('tbodyVacunasAplicadasPersonal');
  if (tbody) {
    tbody.innerHTML = '';
    usr.vacunas.forEach(v => {
      tbody.innerHTML += `
        <tr>
          <td><strong>${v.biologico}</strong></td>
          <td><span class="badge badge-info">${v.dosis}</span></td>
          <td><code>${v.lote}</code></td>
          <td>${v.fecha}</td>
          <td>${v.hora}</td>
          <td>${v.centro}</td>
          <td>${v.licenciado}</td>
          <td><span class="badge badge-success">${v.estatus}</span></td>
        </tr>
      `;
    });
    document.getElementById('badgeTotalVacunas').innerText = `${usr.vacunas.length} Dosis Registradas`;
  }
}

function calcularEdad(fechaNacimiento) {
  const hoy = new Date();
  const nac = new Date(fechaNacimiento);
  let edad = hoy.getFullYear() - nac.getFullYear();
  const m = hoy.getMonth() - nac.getMonth();
  if (m < 0 || (m === 0 && hoy.getDate() < nac.getDate())) {
    edad--;
  }
  return edad;
}

// Búsqueda por cédula
window.buscarUsuarioPorCedula = function() {
  const cedulaBuscada = document.getElementById('vacInputCedula').value.trim();
  const usuario = baseDatosMPPS.usuarios.find(u => u.cedula === cedulaBuscada);

  if (usuario) {
    usuarioActivo = usuario;
    cargarDatosUsuarioEnVistaVacunas(usuario);
  } else {
    alert("Usuario no encontrado con esa cédula. Puede presionar 'Registro de Usuario (No Registrado)' para crearlo.");
  }
};

/* -------------------------------------------------------------------------
   4. CONTROL DE MODALES Y LOGINS BÁSICOS
   ------------------------------------------------------------------------- */
window.loginSaludSubmit = function() {
  window.mostrarVista('vista-panel-salud-vacunas');
};

window.loginAdminSubmit = function() {
  window.mostrarVista('vista-panel-admin');
};

window.abrirModalRegistroUsuario = function() {
  document.getElementById('modalRegistroUsuarioBackdrop').classList.add('show');
};

window.cerrarModalRegistroUsuario = function() {
  document.getElementById('modalRegistroUsuarioBackdrop').classList.remove('show');
};