import { Routes } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
    {
        path: 'administrarperfiles',
        loadChildren: () => import('../../Administrar_Perfiles/administrar-perfiles.module').then(m => m.AdministrarPerfilesModule)
    },
    {
        path: 'gestionarareacomun',
        loadChildren: () => import('../../Gestionar_Area_Comun/gestionar-area-comun.module').then(m => m.GestionarAreaComunModule)
    },
    {
        path: 'visualizarcalendario',
        loadChildren: () => import('../../Visualizar_Calendario/visualizar-calendario.module').then(m => m.VisualizarCalendarioModule)
    },
    {
        path: 'solicitarareacomun',
        loadChildren: () => import('../../Solicitar_Area_Comun/solicitar-area-comun.module').then(m => m.SolicitarAreaComunModule)
    },
    {
        path: 'visualizardocumentos',
        loadChildren: () => import('../../Visualizar_Documentos/visualizar-documentos.module').then(m => m.VisualizarDocumentosModule)
    },
    {    
        path: 'gestionardocumentos',
        loadChildren: () => import('../../Gestionar_Documentos/gestionar-documentos.module').then(m => m.GestionarDocumentosModule)
    },
    {    
        path: 'publicardocumentos',
        loadChildren: () => import('../../Publicar_Documentos/publicar-documentos.module').then(m => m.PublicarDocumentosModule)
    },
    {    
        path: 'registrarpagosdeservicios',
        loadChildren: () => import('../../Registrar_Pagos_de_Servicios/registrar-pago-de-servicios.module').then(m => m.RegistrarPagodeServiciosModule)
    },
    {    
        path: 'gestionarpagosdeservicios',
        loadChildren: () => import('../../Gestionar_Pagos_de_Servicios/gestionar-pagos-de-servicios.module').then(m => m.GestionarPagosdeServiciosModule)
    },
    {    
        path: 'administrarvisita',
        loadChildren: () => import('../../Administrar_Visita/administrar-visita.module').then(m => m.AdministrarVisitaModule)
    },
    {    
        path: 'consultarvisita',
        loadChildren: () => import('../../Consultar_Visita/consultar-visita.module').then(m => m.ConsultarVisitaModule)
    },
    {    
        path: 'generaralertas',
        loadChildren: () => import('../../Generar_Alertas/generar-alertas.module').then(m => m.GenerarAlertasModule)
    },
    {    
        path: 'gestionarreporteeconomico',
        loadChildren: () => import('../../Gestionar_Reporte_Economico/gestionar-reporte-economico.module').then(m => m.GestionarReporteEconomicoModule)
    },
    {    
        path: 'consultarresidentemoroso',
        loadChildren: () => import('../../Consultar_Residente_Moroso/consultar-residente-moroso.module').then(m => m.ConsultarResidenteMorosoModule)
    },
    {    
        path: 'enviarmensaje',
        loadChildren: () => import('../../Enviar_Mensaje/enviar-mensaje.module').then(m => m.EnviarMensajeModule)
    },
    {    
        path: 'iniciarsesion',
        loadChildren: () => import('../../Iniciar_Sesion/iniciar-sesion.module').then(m => m.IniciarSesionModule)
    },
    {    
        path: 'cambiarcontraseña',
        loadChildren: () => import('../../Cambiar_Contraseña/cambiar-contraseña.module').then(m => m.CambiarContraseñaModule)
    },

];