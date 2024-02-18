import { style } from '@angular/animations';
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
  

 
];


function buildTableBody(data: { [x: string]: { toString: () => any; }; }[], columns: (string | number)[]) {
  var body = [];

  body.push(columns);

  data.forEach(function(row: { [x: string]: { toString: () => any; }; }) {
      var dataRow: any[] = [];

      columns.forEach(function(column: string | number) {
          dataRow.push({text : row[column].toString(), alignment : 'center', color : 'black',});
      })

      body.push(dataRow, );
  });

  return body;
}

function table(data: { [x: string]: { toString: () => any; }; }[] | { name: string; age: number; }[], columns: (string | number)[]) {
  return {
    style: 'tableExample',
      table: {
        widths: ['10%','20%','30%','10%','10%','20%'],
          headerRows: 1,
          body: buildTableBody(data, columns),
      }
    
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


  
  createPDF(){
 
    const pdfDefinition: any = {

      
      pageSize: 'A4',
      pageMargins: [20, 200, 20, 40],

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
  
    styles: {
      header2: {
        fontSize: 12,
        bold: true,
        margin: [0, 20, 0, 0],
        alignment: "center",
        color: 'black',
        position:'fixed',
       
      },
      header: {
        fontSize: 12,
        bold: true,
        margin: [0, 7, 0, 0],
        alignment: "center",
        color: 'black',
        position:'fixed',
      },

      header3: {
        fontSize: 12,
        bold: true,
        margin: [0, 27, 20, 0],
        alignment: "right",
        color: 'black',
        position:'fixed',
      },
      footer: {
        fontSize: 12,
        margin: [0, 7, 0, 0],
        alignment: "center",
        color: 'black',
        position:'fixed',
      },
      tableExample: {
        fontSize: 15,
        bold: false,
        margin: [0, 0, 0, 0],
        alignment : 'center',
        color: 'black'
      },
    
    },
    
    footer:[
      
      {text: 'TRACY © '+año, style: 'footer'},
    ]
    }
      
    
 
    const pdf =  pdfMake.createPdf(pdfDefinition);
    pdf.open();

    //this.saveByteArray('reporte', pdfDefinition); //-------- esta linea de codigo convierte la funcion de arriba en el formato reconocido por angulars
    
  }


  saveByteArray1(reportName: string, byte: BlobPart) {
    var blob = new Blob([byte], {type: "application/pdf"});
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    var fileName = reportName;
    link.download = fileName;
    link.click();
  };



  
}


