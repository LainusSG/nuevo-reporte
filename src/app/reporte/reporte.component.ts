
import { Component } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;



const date = new Date();const año = date.getFullYear();const mes = date.toLocaleString('default', { month: 'short' });const mes2 = date.toLocaleString('default', { month: 'long' });const dia = date.getDate(); const hora = date.getHours();const minutos = date.getMinutes();


const ELEMENT_DATA = [
  {ticket: 1, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 2, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 3, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 4, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 5, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 6, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 7, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 8, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 9, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 10, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 11, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 12, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 13, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 14, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 15, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 16, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 17, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 18, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 19, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 20, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 21, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 22, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 23, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 24, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 25, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 26, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 27, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 28, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 29, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 30, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 31, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 32, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 33, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 34, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 35, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 36, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 37, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 38, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 39, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 40, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 41, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 42, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 43, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 44, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 45, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 46, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 47, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 48, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 49, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 50, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 61, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 62, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 63, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 64, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 65, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 66, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 67, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 68, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 69, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 70, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 71, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 72, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 73, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 74, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 75, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 76, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 77, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 78, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 79, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 80, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 81, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 82, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 83, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 84, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 85, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 86, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 87, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 88, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 89, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 90, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 91, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 92, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 93, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 94, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 95, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 96, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 97, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 98, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 99, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
  {ticket: 100, fecha: '27/05/2023', cirugia:'Estenosis Aórtica', sala:1, turno: 2, estatus:'pendiente'},
];


function buildTableBody(data: { [x: string]: { toString: () => any; }; }[], columns: (string | number)[]) {
  var body = [];

  body.push(columns);

  data.forEach(function(row: { [x: string]: { toString: () => any; }; }) {
      var dataRow: any[] = [];

      columns.forEach(function(column: string | number) {
          dataRow.push({text : row[column].toString(), alignment : 'center', color : 'black', bold:false, fontSize: 9,});
      })

      body.push(dataRow, );
  });

  return body;
}

function table(data: { [x: string]: { toString: () => any; }; }[] | { name: string; age: number; }[], columns: (string | number)[]) {
  return {
    style: 'tableExample',
      table: {
        widths: ['10%','15%','20%','15%','15%','15%'],
          headerRows: 1,
          body: buildTableBody(data, columns),
      },layout: 'noBorders'
    
  };
}

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrl: './reporte.component.css'
})
export class ReporteComponent {
  nombrejefa= "María Dolores Rodríguez Ramírez";
  displayedColumns: string[] = ['ticket', 'fecha', 'cirugia', 'sala', 'turno', 'estatus'];
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

      
      pageSize: 'A4',
      pageMargins: [20, 200, 20, 60],

      background: [
        {
          "image":"logo",
            width: 100,
            margin:[20,22,0,0]
        },

        {
          "image":"logo",
            width: 600,
            margin:[-2,60,0,0],
            opacity: 0.1
        }
      ],

      header:[
     
        {text: 'INSTITUTO NACIONAL DE CIENCIAS MÉDICAS NUTRICIÓN SALVADOR ZUBIRÁN', style: 'header2'},
        {text: 'SUBDIRECCIÓN DE ENFERMERÍA: '+this.nombrejefa, style: 'header'},
        {text: 'DEPARTAMENTO DE ENFERMERÍA', style: 'header'},
        {text: 'CENTRAL DE EQUIPOS Y ESTERILIZACIÓN', style: 'header'},
        {text: 'Fecha de Impresión: '+dia +' de '+ mes2 +' del '+ año +', '+ hora + ':' + minutos + 'hrs', style: 'header3'},
        {text: 'RECEPCIÓN MATERIAL DE QUIRÓFANO ', style: 'header2'},
      ],

      content: [
        
         table(ELEMENT_DATA, ['ticket', 'fecha', 'cirugia', 'sala', 'turno', 'estatus'], ),
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
        margin: [40, 30, 0, 0],
        alignment: "center",
        color: 'black',
        position:'fixed',
       
      },
      header3: {
        fontSize: 11,
        bold: true,
        margin: [0, 27, 30, 0],
        alignment: "right",
        color: 'black',
        position:'fixed',
      },
      footer: {
        fontSize: 10,
        margin: [0, 0, 0, 0],
        alignment: "center",
        color: 'black',
        position:'fixed',
      },
      tableExample: {
        fontSize: 11,
        bold: true,
        margin: [60, 0, 0, 0],
        alignment : 'center',
        color: 'black'
      },
    
    },
    
    footer:[
      
      {text: 'TRACY © '+año, style: 'footer'},
    ]
    }
      
    
 
    const pdf =  pdfMake.createPdf(pdfDefinition);
    pdf.download('Reporte Recepción Material de Quirófano '+ dia + '/'+mes2+'/'+año + ' ('+ hora + '/'+ minutos + 'hr)');

    
  }





  
}


