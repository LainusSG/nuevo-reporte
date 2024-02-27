
import { Component } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;



const date = new Date();const año = date.getFullYear();const mes = date.toLocaleString('default', { month: 'short' });const mes2 = date.toLocaleString('default', { month: 'long' });const dia = date.getDate(); const hora = date.getHours();const minutos = date.getMinutes();
const fecha =dia +' de '+ mes2 +' del '+ año +', '+ hora + ':' + minutos + 'hrs';

const area = 'Urgencias'
const tipo= 'Set de INstrumental';

const ELEMENT_DATA = [
  {Ticket: 1, Fecha: '27/05/2023', Area:'Urgencias', Sala:2, Turno:2, Estatus:'Pendiente'},
  {Ticket: 2, Fecha: '27/05/2023', Area:'Urgencias', Sala:2, Turno:2, Estatus:'Pendiente'},
  {Ticket: 3, Fecha: '27/05/2023', Area:'Urgencias', Sala:2, Turno:2, Estatus:'Pendiente'},
  {Ticket: 4, Fecha: '27/05/2023', Area:'Urgencias', Sala:2, Turno:2, Estatus:'Pendiente'},
  {Ticket: 5, Fecha: '27/05/2023', Area:'Urgencias', Sala:2, Turno:2, Estatus:'Pendiente'},
  {Ticket: 6, Fecha: '27/05/2023', Area:'Urgencias', Sala:2, Turno:2, Estatus:'Pendiente'},
  {Ticket: 7, Fecha: '27/05/2023', Area:'Urgencias', Sala:2, Turno:2, Estatus:'Pendiente'},
  {Ticket: 8, Fecha: '27/05/2023', Area:'Urgencias', Sala:2, Turno:2, Estatus:'Pendiente'},
  {Ticket: 9, Fecha: '27/05/2023', Area:'Urgencias', Sala:2, Turno:2, Estatus:'Pendiente'},
  {Ticket: 10, Fecha: '27/05/2023', Area:'Urgencias', Sala:2, Turno:2, Estatus:'Pendiente'},

  {Ticket: 11, Fecha: '27/05/2023', Area:'Urgencias', Sala:2, Turno:2, Estatus:'Pendiente'},
  {Ticket: 12, Fecha: '27/05/2023', Area:'Urgencias', Sala:2, Turno:2, Estatus:'Pendiente'},
  {Ticket: 13, Fecha: '27/05/2023', Area:'Urgencias', Sala:2, Turno:2, Estatus:'Pendiente'},
  {Ticket: 14, Fecha: '27/05/2023', Area:'Urgencias', Sala:2, Turno:2, Estatus:'Pendiente'},
  {Ticket: 15, Fecha: '27/05/2023', Area:'Urgencias', Sala:2, Turno:2, Estatus:'Pendiente'},
  {Ticket: 16, Fecha: '27/05/2023', Area:'Urgencias', Sala:2, Turno:2, Estatus:'Pendiente'},
  {Ticket: 17, Fecha: '27/05/2023', Area:'Urgencias', Sala:2, Turno:2, Estatus:'Pendiente'},
  {Ticket: 18, Fecha: '27/05/2023', Area:'Urgencias', Sala:2, Turno:2, Estatus:'Pendiente'},
  {Ticket: 19, Fecha: '27/05/2023', Area:'Urgencias', Sala:2, Turno:2, Estatus:'Pendiente'},
  {Ticket: 20, Fecha: '27/05/2023', Area:'Urgencias', Sala:2, Turno:2, Estatus:'Pendiente'},

  {Ticket: 21, Fecha: '27/05/2023', Area:'Urgencias', Sala:2, Turno:2, Estatus:'Pendiente'},
  {Ticket: 22, Fecha: '27/05/2023', Area:'Urgencias', Sala:2, Turno:2, Estatus:'Pendiente'},
  {Ticket: 23, Fecha: '27/05/2023', Area:'Urgencias', Sala:2, Turno:2, Estatus:'Pendiente'},
  {Ticket: 24, Fecha: '27/05/2023', Area:'Urgencias', Sala:2, Turno:2, Estatus:'Pendiente'},
  {Ticket: 25, Fecha: '27/05/2023', Area:'Urgencias', Sala:2, Turno:2, Estatus:'Pendiente'},
  {Ticket: 26, Fecha: '27/05/2023', Area:'Urgencias', Sala:2, Turno:2, Estatus:'Pendiente'},
  {Ticket: 27, Fecha: '27/05/2023', Area:'Urgencias', Sala:2, Turno:2, Estatus:'Pendiente'},
  {Ticket: 28, Fecha: '27/05/2023', Area:'Urgencias', Sala:2, Turno:2, Estatus:'Pendiente'},
  {Ticket: 29, Fecha: '27/05/2023', Area:'Urgencias', Sala:2, Turno:2, Estatus:'Pendiente'},
  {Ticket: 30, Fecha: '27/05/2023', Area:'Urgencias', Sala:2, Turno:2, Estatus:'Pendiente'},

  {Ticket: 41, Fecha: '27/05/2023', Area:'Urgencias', Sala:2, Turno:2, Estatus:'Pendiente'},
  {Ticket: 42, Fecha: '27/05/2023', Area:'Urgencias', Sala:2, Turno:2, Estatus:'Pendiente'},
  {Ticket: 43, Fecha: '27/05/2023', Area:'Urgencias', Sala:2, Turno:2, Estatus:'Pendiente'},
  {Ticket: 44, Fecha: '27/05/2023', Area:'Urgencias', Sala:2, Turno:2, Estatus:'Pendiente'},
  {Ticket: 45, Fecha: '27/05/2023', Area:'Urgencias', Sala:2, Turno:2, Estatus:'Pendiente'},
  {Ticket: 46, Fecha: '27/05/2023', Area:'Urgencias', Sala:2, Turno:2, Estatus:'Pendiente'},
  {Ticket: 47, Fecha: '27/05/2023', Area:'Urgencias', Sala:2, Turno:2, Estatus:'Pendiente'},
  {Ticket: 48, Fecha: '27/05/2023', Area:'Urgencias', Sala:2, Turno:2, Estatus:'Pendiente'},
  {Ticket: 49, Fecha: '27/05/2023', Area:'Urgencias', Sala:2, Turno:2, Estatus:'Pendiente'},
  {Ticket: 40, Fecha: '27/05/2023', Area:'Urgencias', Sala:2, Turno:2, Estatus:'Pendiente'},
 
  
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
        widths: ['15%','15%', '20%', '20%','15%','15%'],
          body: buildTableBody(data, columns),
      },layout: 'noBorders'
    
  };
}



@Component({
  selector: 'app-reporte-recepcion-material-otras-areas-hospitalareas',
  templateUrl: './reporte-recepcion-material-otras-areas-hospitalareas.component.html',
  styleUrl: './reporte-recepcion-material-otras-areas-hospitalareas.component.css'
})
export class ReporteRecepcionMaterialOtrasAreasHospitalareasComponent {
 
  nombrejefa= "María Dolores Rodríguez Ramírez";
  displayedColumns: string[] = ['Ticket', 'Fecha', 'Area', 'Sala','Turno', 'Estatus'];
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
        {text: 'RECEPCIÓN MATERIAL OTRAS ÁREAS HOSPITALARIAS', style: 'header2'},
        {text: 'Rango de Fecha: '+/*aqui va la primera la variable de fecha del piker*/'10/08/23'+' - '+/*aqui va la segunda la variable de fecha del piker*/'16/12/23', style: 'header3' },
   
        {
          style: 'tableExample', margin:[30,20,30,0],
          table: {
            widths: ['15%','15%', '20%', '20%','15%','15%'],
            body: [
              ['Ticket', 'Fecha', 'Área', 'Sala','Turno', 'Estatus'],
            ]
          },layout: 'noBorders'
        },

      ],

      content: [
        
         table(ELEMENT_DATA, ['Ticket', 'Fecha', 'Area', 'Sala','Turno', 'Estatus'], ),
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
        fontSize: 9,
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
    pdf.download('Recepción Material Otras Áreas Hospitalarias '+ dia + '/'+mes2+'/'+año + ' ('+ hora + '/'+ minutos + 'hr)');

    
  }





  
}



