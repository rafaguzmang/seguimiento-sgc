import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DireccionComponent } from './direccion/direccion.component';
import { ProcedimientosComponent } from './direccion/procedimientos/procedimientos.component';
import { EvaluacionComponent } from './direccion/procedimientos/evaluacion/evaluacion.component';
import { RevisionComponent } from './direccion/procedimientos/revision/revision.component';
import { FormatosComponent } from './direccion/formatos/formatos.component';
import { MinutasComponent } from './direccion/formatos/minutas/minutas.component';
import { VentasComponent } from './ventas/ventas.component';
import { ProcedimientosventasComponent } from './ventas/procedimientosventas/procedimientosventas.component';
import { FormatosventasComponent } from './ventas/formatosventas/formatosventas.component';
import { NecesidadesclienteComponent } from './ventas/formatosventas/necesidadescliente/necesidadescliente.component';
import { PrecotizacionComponent } from './ventas/formatosventas/precotizacion/precotizacion.component';
import { VentascotizacionComponent } from './ventas/formatosventas/ventascotizacion/ventascotizacion.component';
import { ConformidadComponent } from './ventas/formatosventas/conformidad/conformidad.component';
import { EncuestaComponent } from './ventas/formatosventas/encuesta/encuesta.component';
import { ConfidencialidadComponent } from './ventas/formatosventas/confidencialidad/confidencialidad.component';
import { SatisfaccionComponent } from './ventas/formatosventas/satisfaccion/satisfaccion.component';
import { DisenoComponent } from './diseno/diseno.component';
import { ProcedimientosdisenoComponent } from './diseno/procedimientosdiseno/procedimientosdiseno.component';
import { FormatosdisenoComponent } from './diseno/formatosdiseno/formatosdiseno.component';
import { NpidisenoComponent } from './diseno/formatosdiseno/npidiseno/npidiseno.component';
import { ComprasComponent } from './compras/compras.component';
import { ProcedimientocomprasComponent } from './compras/procedimientocompras/procedimientocompras.component';
import { ProcedimientoproveedoresComponent } from './compras/procedimientocompras/procedimientoproveedores/procedimientoproveedores.component';
import { FormatoscomprasComponent } from './compras/formatoscompras/formatoscompras.component';
import { ProveedoresautorizadoscomprasComponent } from './compras/formatoscompras/proveedoresautorizadoscompras/proveedoresautorizadoscompras.component';
import { EvaluacionproveedorescomprasComponent } from './compras/formatoscompras/evaluacionproveedorescompras/evaluacionproveedorescompras.component';
import { RhComponent } from './rh/rh.component';
import { ProcedimientosrhComponent } from './rh/procedimientosrh/procedimientosrh.component';
import { CompetenciasrhComponent } from './rh/procedimientosrh/competenciasrh/competenciasrh.component';
import { CapacitacionrhComponent } from './rh/procedimientosrh/capacitacionrh/capacitacionrh.component';
import { ClimalaboralrhComponent } from './rh/procedimientosrh/climalaboralrh/climalaboralrh.component';
import { FormatosrhComponent } from './rh/formatosrh/formatosrh.component';
import { RequisicionpersonalComponent } from './rh/formatosrh/requisicionpersonal/requisicionpersonal.component';
import { EvaluacioncompetenciasComponent } from './rh/formatosrh/evaluacioncompetencias/evaluacioncompetencias.component';
import { NecesidadescapacitacionComponent } from './rh/formatosrh/necesidadescapacitacion/necesidadescapacitacion.component';
import { ClimalaboralComponent } from './rh/formatosrh/climalaboral/climalaboral.component';
import { EvaluacioncapacitacionComponent } from './rh/formatosrh/evaluacioncapacitacion/evaluacioncapacitacion.component';
import { ResguardoequipoComponent } from './rh/formatosrh/resguardoequipo/resguardoequipo.component';
import { CalidadComponent } from './calidad/calidad.component';
import { ProcedimientoscalidadComponent } from './calidad/procedimientoscalidad/procedimientoscalidad.component';
import { AccionescorrectivasComponent } from './calidad/accionescorrectivas/accionescorrectivas.component';
import { AtencionquejasComponent } from './calidad/atencionquejas/atencionquejas.component';
import { PrimerapiezaComponent } from './calidad/primerapieza/primerapieza.component';
import { FormatoscalidadComponent } from './calidad/formatoscalidad/formatoscalidad.component';
import { ChecklistComponent } from './calidad/formatoscalidad/checklist/checklist.component';
import { LiberacionComponent } from './calidad/formatoscalidad/liberacion/liberacion.component';
import { VerificacioncalidadComponent } from './calidad/formatoscalidad/verificacioncalidad/verificacioncalidad.component';
import { NoconformecalidadComponent } from './calidad/formatoscalidad/noconformecalidad/noconformecalidad.component';
import { RegistronoconformesComponent } from './calidad/formatoscalidad/registronoconformes/registronoconformes.component';
import { CorrectivascalidadComponent } from './calidad/formatoscalidad/correctivascalidad/correctivascalidad.component';
import { EtiquetascalidadComponent } from './calidad/formatoscalidad/etiquetascalidad/etiquetascalidad.component';
import { InspeccioncalidadComponent } from './calidad/formatoscalidad/inspeccioncalidad/inspeccioncalidad.component';
import { EquiposmedicioncalidadComponent } from './calidad/formatoscalidad/equiposmedicioncalidad/equiposmedicioncalidad.component';
import { RhprogramasComponent } from './rh/rhprogramas/rhprogramas.component';
import { CalidadinstruccionesComponent } from './calidad/calidadinstrucciones/calidadinstrucciones.component';
import { SgcComponent } from './sgc/sgc.component';
import { SgcprocedimientosComponent } from './sgc/sgcprocedimientos/sgcprocedimientos.component';
import { SgccontrolcambiosComponent } from './sgc/sgcprocedimientos/sgccontrolcambios/sgccontrolcambios.component';
import { SgcauditoriainternaComponent } from './sgc/sgcprocedimientos/sgcauditoriainterna/sgcauditoriainterna.component';
import { SgcformatosComponent } from './sgc/sgcformatos/sgcformatos.component';
import { SgccambioprocesoComponent } from './sgc/sgcformatos/sgccambioproceso/sgccambioproceso.component';
import { SgcauditoriainternaformatoComponent } from './sgc/sgcformatos/sgcauditoriainternaformato/sgcauditoriainternaformato.component';
import { SgclistaasistenciaComponent } from './sgc/sgcformatos/sgclistaasistencia/sgclistaasistencia.component';
import { SgclistaverificacionauditoriainternaComponent } from './sgc/sgcformatos/sgclistaverificacionauditoriainterna/sgclistaverificacionauditoriainterna.component';
import { SgccontrolacComponent } from './sgc/sgcformatos/sgccontrolac/sgccontrolac.component';
import { SgcmodificaciondocumentoComponent } from './sgc/sgcformatos/sgcmodificaciondocumento/sgcmodificaciondocumento.component';
import { SgcformatoinstruccionComponent } from './sgc/sgcformatos/sgcformatoinstruccion/sgcformatoinstruccion.component';
import { SgcseguimientoComponent } from './sgc/sgcformatos/sgcseguimiento/sgcseguimiento.component';
import { SgcevaluacionriesgoComponent } from './sgc/sgcformatos/sgcevaluacionriesgo/sgcevaluacionriesgo.component';
import { SgcreporteobservacionesComponent } from './sgc/sgcformatos/sgcreporteobservaciones/sgcreporteobservaciones.component';
import { SgcinfomehallazgosComponent } from './sgc/sgcformatos/sgcinfomehallazgos/sgcinfomehallazgos.component';
import { SgcobjetivoscalidadComponent } from './sgc/sgcformatos/sgcobjetivoscalidad/sgcobjetivoscalidad.component';
import { SgcdocumentosinternosComponent } from './sgc/sgcdocumentosinternos/sgcdocumentosinternos.component';
import { SgcpoliticacalidadComponent } from './sgc/sgcdocumentosinternos/sgcpoliticacalidad/sgcpoliticacalidad.component';
import { SgcdocumentosobjetivoscalidadComponent } from './sgc/sgcdocumentosinternos/sgcdocumentosobjetivoscalidad/sgcdocumentosobjetivoscalidad.component';
import { SgcmisionvisionComponent } from './sgc/sgcdocumentosinternos/sgcmisionvision/sgcmisionvision.component';
import { SgcalcancesgcComponent } from './sgc/sgcdocumentosinternos/sgcalcancesgc/sgcalcancesgc.component';
import { SgcinteraccionprodesossgcComponent } from './sgc/sgcdocumentosinternos/sgcinteraccionprodesossgc/sgcinteraccionprodesossgc.component';
import { SgcmatrizcomunicacionComponent } from './sgc/sgcdocumentosinternos/sgcmatrizcomunicacion/sgcmatrizcomunicacion.component';
import { SgcorganigramaversionComponent } from './sgc/sgcdocumentosinternos/sgcorganigramaversion/sgcorganigramaversion.component';
import { SgcmatrizpartesinterezadasComponent } from './sgc/sgcdocumentosinternos/sgcmatrizpartesinterezadas/sgcmatrizpartesinterezadas.component';
import { MatrizindicadoresComponent } from './sgc/sgcdocumentosinternos/matrizindicadores/matrizindicadores.component';
import { AlmacenComponent } from './almacen/almacen.component';
import { SgcmanualcalidadComponent } from './sgc/sgcmanualcalidad/sgcmanualcalidad.component';
import { SgcprogramasComponent } from './sgc/sgcprogramas/sgcprogramas.component';
import { SgcprogramasactividadesComponent } from './sgc/sgcprogramas/sgcprogramasactividades/sgcprogramasactividades.component';
import { SgcplanesComponent } from './sgc/sgcplanes/sgcplanes.component';
import { SgcbitacorasComponent } from './sgc/sgcbitacoras/sgcbitacoras.component';
import { AlmacenprocedimientoComponent } from './almacen/almacenprocedimiento/almacenprocedimiento.component';
import { AlmacenformatosComponent } from './almacen/almacenformatos/almacenformatos.component';
import { AlmaceninstruccionestrabajoComponent } from './almacen/almaceninstruccionestrabajo/almaceninstruccionestrabajo.component';
import { AlmacenbitacoraComponent } from './almacen/almacenbitacora/almacenbitacora.component';
import { AlmacenprocedimientoalmacenComponent } from './almacen/almacenprocedimiento/almacenprocedimientoalmacen/almacenprocedimientoalmacen.component';
import { AlmacenformatosvaleComponent } from './almacen/almacenformatos/almacenformatosvale/almacenformatosvale.component';
import { ProduccionComponent } from './produccion/produccion.component';
import { ProduccionprocedimientosComponent } from './produccion/produccionprocedimientos/produccionprocedimientos.component';
import { ProduccionformatosComponent } from './produccion/produccionformatos/produccionformatos.component';
import { ProduccioninstruccionestrabajoComponent } from './produccion/produccioninstruccionestrabajo/produccioninstruccionestrabajo.component';
import { ProduccioncnclaserComponent } from './produccion/produccioninstruccionestrabajo/produccioncnclaser/produccioncnclaser.component';
import { ProducciondabladomaterialComponent } from './produccion/produccioninstruccionestrabajo/producciondabladomaterial/producciondabladomaterial.component';
import { ProduccionsoldaduraComponent } from './produccion/produccioninstruccionestrabajo/produccionsoldadura/produccionsoldadura.component';
import { ProduccionlavadomaterialComponent } from './produccion/produccioninstruccionestrabajo/produccionlavadomaterial/produccionlavadomaterial.component';
import { ProduccionpinturaelectrostaticaComponent } from './produccion/produccioninstruccionestrabajo/produccionpinturaelectrostatica/produccionpinturaelectrostatica.component';
import { ProduccionflejadomaterialComponent } from './produccion/produccioninstruccionestrabajo/produccionflejadomaterial/produccionflejadomaterial.component';
import { ProduccionmutiladomaterialComponent } from './produccion/produccioninstruccionestrabajo/produccionmutiladomaterial/produccionmutiladomaterial.component';
import { ProduccionmanualesComponent } from './produccion/produccionmanuales/produccionmanuales.component';
import { ProduccionmanualfresadoraComponent } from './produccion/produccionmanuales/produccionmanualfresadora/produccionmanualfresadora.component';
import { ProduccionmanualguillotinaComponent } from './produccion/produccionmanuales/produccionmanualguillotina/produccionmanualguillotina.component';
import { ProduccionmanualkalamazooComponent } from './produccion/produccionmanuales/produccionmanualkalamazoo/produccionmanualkalamazoo.component';
import { ProduccionmanualcortelaserComponent } from './produccion/produccionmanuales/produccionmanualcortelaser/produccionmanualcortelaser.component';
import { ProduccionmanualpinturaelectrostaticaComponent } from './produccion/produccionmanuales/produccionmanualpinturaelectrostatica/produccionmanualpinturaelectrostatica.component';
import { ProduccionmanualsoldaduraComponent } from './produccion/produccionmanuales/produccionmanualsoldadura/produccionmanualsoldadura.component';
import { ProduccionmanualtornoComponent } from './produccion/produccionmanuales/produccionmanualtorno/produccionmanualtorno.component';
import { ProduccionmanualroladoraComponent } from './produccion/produccionmanuales/produccionmanualroladora/produccionmanualroladora.component';
import { ProduccionmanualsierracintaComponent } from './produccion/produccionmanuales/produccionmanualsierracinta/produccionmanualsierracinta.component';
import { ProduccionmanualcortecncComponent } from './produccion/produccionmanuales/produccionmanualcortecnc/produccionmanualcortecnc.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    // dirección
    {path:'direccion',component:DireccionComponent},
        // procesos
        // {path:'direccion/procesos',component:ProcesosComponent},
        // procedimientos
        {path:'direccion/procedimientos',component:ProcedimientosComponent},
        {path:'direccion/procedimientos/evaluacion',component:EvaluacionComponent},
        {path:'direccion/procedimientos/revision',component:RevisionComponent},
        // formatos
        {path:'direccion/formatos',component:FormatosComponent},
        {path:'direccion/formatos/minutas',component:MinutasComponent},
    // ventas
    {path:'ventas',component:VentasComponent},
        // procesos
        {path:'ventas/procedimientos',component:ProcedimientosventasComponent},
        // formatos
        {path:'ventas/formatos',component:FormatosventasComponent},
        {path:'ventas/formatos/necesidadescliente',component:NecesidadesclienteComponent},
        {path:'ventas/formatos/precotizacion',component:PrecotizacionComponent},
        {path:'ventas/formatos/cotizacion',component:VentascotizacionComponent},
        {path:'ventas/formatos/conformidad',component:ConformidadComponent},
        {path:'ventas/formatos/encuesta',component:EncuestaComponent},
        {path:'ventas/formatos/confidencialidad',component:ConfidencialidadComponent},
        {path:'ventas/formatos/satisfaccion',component:SatisfaccionComponent},
    // diseno
    {path:'diseno',component:DisenoComponent},
        // procesos
        {path:'diseno/procedimientos',component:ProcedimientosdisenoComponent},
        // formatos
        {path:'diseno/formatos',component:FormatosdisenoComponent},
        {path:'diseno/formatos/npi',component:NpidisenoComponent},
    // diseno
    {path:'compras',component:ComprasComponent},
        // procesos
        {path:'compras/procedimientos',component:ProcedimientocomprasComponent},
        {path:'compras/procedimientos/proveedores',component:ProcedimientoproveedoresComponent},
        // formatos
        {path:'compras/formatos',component:FormatoscomprasComponent},
        {path:'compras/formatos/proveedores-autorizados',component:ProveedoresautorizadoscomprasComponent},
        {path:'compras/formatos/evaluacion-proveedores',component:EvaluacionproveedorescomprasComponent},
    // rh
    {path:'rh',component:RhComponent},
        // procesos
        {path:'rh/procedimientos',component:ProcedimientosrhComponent},
        {path:'rh/procedimientos/competencias',component:CompetenciasrhComponent},
        {path:'rh/procedimientos/capacitacion',component:CapacitacionrhComponent},
        {path:'rh/procedimientos/clima-laboral',component:ClimalaboralrhComponent},
        // formatos
        {path:'rh/formatos',component:FormatosrhComponent},
        {path:'rh/formatos/requisiciondepersonal',component:RequisicionpersonalComponent},
        {path:'rh/formatos/evaluacioncompetencia',component:EvaluacioncompetenciasComponent},
        {path:'rh/formatos/necesidades-capacitacion',component:NecesidadescapacitacionComponent},
        {path:'rh/formatos/climalaboral',component:ClimalaboralComponent},
        {path:'rh/formatos/evaluacion-capacitacion',component:EvaluacioncapacitacionComponent},
        {path:'rh/formatos/resguardoequipo',component:ResguardoequipoComponent},
        // programas
        {path:'rh/programas',component:RhprogramasComponent},
    // Calidad
    {path:'calidad',component:CalidadComponent},
        // procesos
        {path:'calidad/procedimientos',component:ProcedimientoscalidadComponent},
        {path:'calidad/accionescorrectivas',component:AccionescorrectivasComponent},
        {path:'calidad/atencionclientes',component:AtencionquejasComponent},
        {path:'calidad/primerapieza',component:PrimerapiezaComponent},
        
        // formatos
        {path:'calidad/formatos',component:FormatoscalidadComponent},
        {path:'calidad/checklist',component:ChecklistComponent},
        {path:'calidad/liberacion',component:LiberacionComponent},
        {path:'calidad/verificacion',component:VerificacioncalidadComponent},
        {path:'calidad/registronoconformes',component:RegistronoconformesComponent},
        {path:'calidad/noconforme',component:NoconformecalidadComponent},
        {path:'calidad/correctivas',component:CorrectivascalidadComponent},
        {path:'calidad/etiquetas',component:EtiquetascalidadComponent},
        {path:'calidad/inspeccion',component:InspeccioncalidadComponent},
        {path:'calidad/equiposmedicion',component:EquiposmedicioncalidadComponent},
        //instrucciones
        {path:'calidad/instrucciones',component:CalidadinstruccionesComponent},
    //sgc
    {path:'sgc',component:SgcComponent},
        // procedimientos
        {path:'sgc/procedimientos',component:SgcprocedimientosComponent},
        {path:'sgc/procedimientos/controlcambios',component:SgccontrolcambiosComponent},
        {path:'sgc/procedimientos/auditoria',component:SgcauditoriainternaComponent},
        //formatos
        {path:'sgc/formatos',component:SgcformatosComponent},
        {path:'sgc/formatos/cambioproceso',component:SgccambioprocesoComponent},
        {path:'sgc/formatos/auditoriainterna',component:SgcauditoriainternaformatoComponent},
        {path:'sgc/formatos/listaasistencia',component:SgclistaasistenciaComponent},
        {path:'sgc/formatos/listaverificacion',component:SgclistaverificacionauditoriainternaComponent},
        {path:'sgc/formatos/controlac',component:SgccontrolacComponent},
        {path:'sgc/formatos/modificaciondocumento',component:SgcmodificaciondocumentoComponent},
        {path:'sgc/formatos/formatoinstruccion',component:SgcformatoinstruccionComponent},
        {path:'sgc/formatos/seguimiento',component:SgcseguimientoComponent},
        {path:'sgc/formatos/riesgo',component:SgcevaluacionriesgoComponent},
        {path:'sgc/formatos/reporteobservaciones',component:SgcreporteobservacionesComponent},
        {path:'sgc/formatos/informehallazgos',component:SgcinfomehallazgosComponent},
        {path:'sgc/formatos/objetivoscalidad',component:SgcobjetivoscalidadComponent},
        //documentos internos
        {path:'sgc/documentos',component:SgcdocumentosinternosComponent},
        {path:'sgc/documentos/politicadalidad',component:SgcpoliticacalidadComponent},
        {path:'sgc/documentos/objetivoscalidad',component:SgcdocumentosobjetivoscalidadComponent},
        {path:'sgc/documentos/misionvision',component:SgcmisionvisionComponent},
        {path:'sgc/documentos/alcansesgc',component:SgcalcancesgcComponent},
        {path:'sgc/documentos/interaccionprocesosgc',component:SgcinteraccionprodesossgcComponent},
        {path:'sgc/documentos/matrizcomunicacion',component:SgcmatrizcomunicacionComponent},
        {path:'sgc/documentos/organigrama',component:SgcorganigramaversionComponent},
        {path:'sgc/documentos/matrizpartes',component:SgcmatrizpartesinterezadasComponent},
        {path:'sgc/documentos/matrizindicadores',component:MatrizindicadoresComponent},
        // manual de calidad
        {path:'sgc/manualcalidad',component:SgcmanualcalidadComponent},
        // programas
        {path:'sgc/programas',component:SgcprogramasComponent},
        {path:'sgc/programas/actividades',component:SgcprogramasactividadesComponent},
        // planes
        {path:'sgc/planes',component:SgcplanesComponent},
        // bitacoras
        {path:'sgc/bitacoras',component:SgcbitacorasComponent},
    //almacen
    {path:'almacen',component:AlmacenComponent},
        // procedimientos
        {path:'almacen/procedimientos',component:AlmacenprocedimientoComponent},
        {path:'almacen/procedimientos/almacen',component:AlmacenprocedimientoalmacenComponent},
        // formatos
        {path:'almacen/formatos',component:AlmacenformatosComponent},
        {path:'almacen/formatos/valeherramienta',component:AlmacenformatosvaleComponent},
        // instrucciones de trabajo
        {path:'almacen/instruccionestrabajo',component:AlmaceninstruccionestrabajoComponent},
        // bitacoras
        {path:'almacen/bitacoras',component:AlmacenbitacoraComponent},
    // produccion
    {path:'produccion',component:ProduccionComponent},
        //procedimientos
        {path:'produccion/procedimientos',component:ProduccionprocedimientosComponent},
        //formatos
        {path:'produccion/formatos',component:ProduccionformatosComponent},
        //instrucciones de trabajo
        {path:'produccion/instruccionestrabajo',component:ProduccioninstruccionestrabajoComponent},
        {path:'produccion/instruccionestrabajo/cortecnclaser',component:ProduccioncnclaserComponent},
        {path:'produccion/instruccionestrabajo/dobladodematerial',component:ProducciondabladomaterialComponent},
        {path:'produccion/instruccionestrabajo/soldadura',component:ProduccionsoldaduraComponent},
        {path:'produccion/instruccionestrabajo/lavadodematerial',component:ProduccionlavadomaterialComponent},
        {path:'produccion/instruccionestrabajo/pinturaelectrostatica',component:ProduccionpinturaelectrostaticaComponent},
        {path:'produccion/instruccionestrabajo/flejadodematerial',component:ProduccionflejadomaterialComponent},
        {path:'produccion/instruccionestrabajo/mutiladodepiezas',component:ProduccionmutiladomaterialComponent},
        //manuales
        {path:'produccion/manuales',component:ProduccionmanualesComponent},
        {path:'produccion/manuales/manualfresadora',component:ProduccionmanualfresadoraComponent},
        {path:'produccion/manuales/manualguillotina',component:ProduccionmanualguillotinaComponent},
        {path:'produccion/manuales/manualkalamazoo',component:ProduccionmanualkalamazooComponent},
        {path:'produccion/manuales/manualcortelaser',component:ProduccionmanualcortelaserComponent},
        {path:'produccion/manuales/manualpinturaelectrostatica',component:ProduccionmanualpinturaelectrostaticaComponent},
        {path:'produccion/manuales/manualsoldadura',component:ProduccionmanualsoldaduraComponent},
        {path:'produccion/manuales/manualtorno',component:ProduccionmanualtornoComponent},
        {path:'produccion/manuales/manualroladora',component:ProduccionmanualroladoraComponent},
        {path:'produccion/manuales/manualsierracinta',component:ProduccionmanualsierracintaComponent},
        {path:'produccion/manuales/manualcortecnc',component:ProduccionmanualcortecncComponent},
];
