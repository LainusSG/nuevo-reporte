
import { Component } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;



const date = new Date();const año = date.getFullYear();const mes = date.toLocaleString('default', { month: 'short' });const mes2 = date.toLocaleString('default', { month: 'long' });const dia = date.getDate(); const hora = date.getHours();const minutos = date.getMinutes();
const fecha =dia +' de '+ mes2 +' del '+ año +', '+ hora + ':' + minutos + 'hrs';

const area = 'Quirófano'
const tipo= 'Set de INstrumental';

const ELEMENT_DATA = [
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},
  {Prioridad: 'Alta', Ticket: 1233, Proveedor: 'SMARTEST', Nombre: 'Set de Angiocardio', Elaborar:1, Estatus: 'Pendiente'},

];

function buildTableBody(data: { [x: string]: { toString: () => any; }; }[], columns: (string | number)[]) {
  var body = [];


  data.forEach(function(row: { [x: string]: { toString: () => any; }; }) {
      var dataRow: any[] = [];

      columns.forEach(function(column: string | number) {
          dataRow.push({text : row[column].toString(), alignment : 'center', color : 'black', bold:false, fontSize: 9, margin: [0, 10, 0, 0]});
      })

      body.push(dataRow, );
  });

  return body;
}

function table(data: { [x: string]: { toString: () => any; }; }[] | { name: string; age: number; }[], columns: (string | number)[]) {
  return {
    style: 'tableExample',
      table: {
        widths: ['16%','16%', '16%', '17%','16%','16%'],
          body: buildTableBody(data, columns),
      },layout: 'noBorders'
    
  };
}
@Component({
  selector: 'app-reporte-empaque-material-otras-areas-provedor-externo',
  templateUrl: './reporte-empaque-material-otras-areas-provedor-externo.component.html',
  styleUrl: './reporte-empaque-material-otras-areas-provedor-externo.component.css'
})
export class ReporteEmpaqueMaterialOtrasAreasProvedorExternoComponent {
  nombrejefa= "María Dolores Rodríguez Ramírez";
  displayedColumns: string[] = ['Prioridad', 'Ticket','Proveedor','Nombre', 'Elaborar', 'Estatus'];
  dataSource = ELEMENT_DATA;

  getBase64ImageFromURL(url: string) {
    return new Promise((resolve, reject) => {
      var img = new Image();
      img.setAttribute("crossOrigin", "anonymous");
    
      img.onload = () => {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
    
        var ctx = canvas.getContext("2d");
        ctx!.drawImage(img, 0, 0);
    
        var dataURL = canvas.toDataURL("image/png");
    
        resolve(dataURL);
      };
    
      img.onerror = error => {
        reject(error);
      };
    
      img.src = url;
    });}
  
    async createPDF(){
 
    const pdfDefinition: any = {

      pageSize: 'LETTER',
      pageMargins: [30, 290, 30, 60],

      background: [
        {
          "image":"logo",
            width: 90,
            margin:[30,35,0,0]
        },

        {
          "image":"logo",
            width: 550,
            margin:[30,80,0,0],
            opacity: 0.1
        }
      ],

      header:[
     
        {text: 'INSTITUTO NACIONAL DE CIENCIAS MÉDICAS Y NUTRICIÓN SALVADOR ZUBIRÁN', style: 'header2'},
        {text: 'SUBDIRECCIÓN DE ENFERMERÍA: '+this.nombrejefa, style: 'header'},
        {text: 'DEPARTAMENTO DE ENFERMERÍA', style: 'header'},
        {text: 'CENTRAL DE EQUIPOS Y ESTERILIZACIÓN', style: 'header'},
        {text: 'Fecha de Impresión: '+fecha, style: 'header3'},
        {text: 'EMPAQUE MATERIAL DE OTRAS ÁREAS HOSPITALARIAS Y PROVEEDOR EXTERNO', style: 'header2'},
      	{
          columns: [
            {
              text: '', 
              width:'40%',alignment: "center", margin:[0,25,0,0], fontSize: 11, bold:true,
            },
            {
              text: 'Área: '+area,
              width:'20%',alignment: "center", margin:[0,25,0,0], fontSize: 11, bold:true,
            },
            {
              text: 'Rango de Fecha: '+/*aqui va la primera la variable de fecha del piker*/'10/08/23'+' - '+/*aqui va la segunda la variable de fecha del piker*/'16/12/23',
              width:'40%',alignment: "center", margin:[0,25,0,0], fontSize: 11, bold:true,
            },
          ]
        },
        

        {
          style: 'tableExample', margin:[30,20,30,0],
          table: {
            widths: ['16%','16%', '16%', '17%','16%','16%'],
            body: [
              ['Prioridad', 'Ticket','Proveedor/Área','Nombre', 'Por Elaborar', 'Estatus'],
            ]
          },layout: 'noBorders'
        },
        

      ],

      content: [
        
         table(ELEMENT_DATA, ['Prioridad', 'Ticket','Proveedor','Nombre', 'Elaborar', 'Estatus'], ),
    ],
    
  images:{
    
    "logo" : await this.getBase64ImageFromURL(
        "../../assets/LOGO PNG NUTRICIÓN.png")
      
  },
    styles: {

      header: {
        fontSize: 11,
        bold: true,
        margin: [40, 7, 0, 0],
        alignment: "center",
        color: 'black',
        position:'fixed',
      },
      header2: {
        fontSize: 11,
        bold: true,
        margin: [40, 40, 0, 0],
        alignment: "center",
        color: 'black',
        position:'fixed',
       
      },
      header3: {
        fontSize: 11,
        bold: true,
        margin: [0, 27, 40, 0],
        alignment: "right",
        color: 'black',
        position:'fixed',
      },
      footer: {
        fontSize: 10,
        margin: [0, 20, 0, 0],
        alignment: "center",
        color: 'black',
        position:'fixed',
      },
      tableExample: {
        fontSize: 11,
        bold: true,
        margin: [0, -15, 0, 0],
        alignment : 'center',
        color: 'black'
      },
    
    },
    
    footer:[
      
      {text: 'TRACY © '+año, style: 'footer'},
    ]
    }
      
    
 
    const pdf =  pdfMake.createPdf(pdfDefinition);
    pdf.download('Reporte Empaque Material De Otras Áreas Hospitalarias Y Proveedor Externo  '+ dia + '/'+mes2+'/'+año + ' ('+ hora + '/'+ minutos + 'hr)');

    
  }
}