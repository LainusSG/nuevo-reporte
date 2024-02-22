import { Component } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;



const date = new Date();const año = date.getFullYear();const mes = date.toLocaleString('default', { month: 'short' });const mes2 = date.toLocaleString('default', { month: 'long' });const dia = date.getDate(); const hora = date.getHours();const minutos = date.getMinutes();


const ELEMENT_DATA = [
  {Nombre:'Pinza Disección'},
  {Nombre:'Pinza Kocher'},
  {Nombre:'Pinza Disección'},
  {Nombre:'Pinza Kocher'},
  {Nombre:'Pinza Disección'},
  {Nombre:'Pinza Kocher'},
];


function buildTableBody(data: { [x: string]: { toString: () => any; }; }[], columns: (string | number)[]) {
  var body = [];


  data.forEach(function(row: { [x: string]: { toString: () => any; }; }) {
      var dataRow: any[] = [];

      columns.forEach(function(column: string | number) {
        dataRow.push({text : row[column].toString(), alignment : 'left', color : 'black', bold:false, fontSize: 9, margin: [20, 10, 0, 0]});
      })

      body.push(dataRow, );
  });

  return body;
}

function table(data: { [x: string]: { toString: () => any; }; }[] | { name: string; age: number; }[], columns: (string | number)[]) {
  return {
    style: 'tableExample',
      table: {
        widths: ['100%'],
          body: buildTableBody(data, columns),
      },layout: 'noBorders'
    
  };
}

@Component({
  selector: 'app-reporte-lavado-atomatico',
  templateUrl: './reporte-lavado-atomatico.component.html',
  styleUrl: './reporte-lavado-atomatico.component.css'
})
export class ReporteLavadoAtomaticoComponent {
  nombrejefa= "María Dolores Rodríguez Ramírez";
  marca = "BTM";
  modelo = "STERIVAP";
  numSerie = "23412341234";
  tipoCiclo = "Universal";
  tiempoCiclo = "10";
  fechaInicio = "10/10/2024";
  horaInicio = "10:50";
  nombreOperador = "Hugo Rodriguez";
  







  displayedColumns: string[] = ['Nombre'];
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
      pageMargins: [20, 420, 20, 30],

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
        {text: 'BITÁCORA DE LAVADO AUTOMÁTICO', style: 'header2'},
        
        {text: 'DATOS DE LAVADORA',style: 'content0'},
        {text: 'Marca:',style: 'content1'},
        {text: 'Modelo:',style: 'content2'},  
        {text: 'Número de serie:',style: 'content3'},
        {text: ' '+this.marca,style: 'content1b'},
        {text: ' '+this.modelo  ,style: 'content2b'},  
        {text: ' '+this.numSerie,style: 'content3b'},
      
        {text: 'Tipo de ciclo:',style: 'content1'},
        {text: 'Tiempo de Ciclo:',style: 'content2'},
        {text: ' '+this.tipoCiclo,style: 'content1b'},
        {text: ' '+this.tiempoCiclo  ,style: 'content2b'},

        {text: 'RESPONSABLE DE LAVADO',style: 'content0'},
        {text: 'Fecha:',style: 'content1'},
        {text: 'Hora:',style: 'content2'},  
        {text: 'Nombre operador:',style: 'content3'},
        {text: 'Firma operador:',style: 'content4'},
        {text: ' '+this.fechaInicio ,style: 'content1b'},
        {text: ' '+this.horaInicio ,style: 'content2b'},
        {text: ' '+this.nombreOperador,style: 'content3b'},
        
        

        {text: 'MATERIALES LAVADOS ', style: 'header2'},


        
      	{
          style: 'tableExample', margin:[40,20,20,0],
          table: {
            widths: ['100%'],
            body: [
              ['Nombre del Instrumental'],
            ]
          },layout: 'noBorders'
        },
  
      ],

      content: [
        //----Datos de la bitacora}
      
        
      
        
        

        


// LINO    
//la tabla solo es el nombre del material ------   crees que se podria poner los renglones...*
         table(ELEMENT_DATA, ['Nombre'], ),
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
        margin: [0, 30, 0, 0],
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
      content0: {
        fontSize: 11,
        bold: true,
        margin: [70, 15, 0,0],
        alignment: "left",
        color: 'black',
        position:'fixed',
      },
      content1: {
        fontSize: 11,
        bold: true,
        margin: [40, 1, 0, 0],
        alignment: "left",
        color: 'black',
        position:'fixed',
      },
      content2: {
        fontSize: 11,
        bold: true,
        margin: [130, -12, 0, 0],
        alignment: "left",
        color: 'black',
        position:'fixed',
      },
      content3: {
        fontSize: 11,
        bold: true,
        margin: [200, -12, 0, 0],
        alignment: "left",
        color: 'black',
        position:'fixed',
      },
      content4: {
        fontSize: 11,
        bold: true,
        margin: [320, -12, 0, 0],
        alignment: "left",
        color: 'black',
        position:'fixed',
      },

      content1b: {
        fontSize: 11,
        bold: false,
        margin: [40, 0, 20, 0],
        alignment: "left",
        color: 'black',
        position:'fixed',
      },
      content2b: {
        fontSize: 11,
        bold: false,
        margin: [120, -12, 0, 0],
        alignment: "left",
        color: 'black',
        position:'fixed',
      },
      content3b: {
        fontSize: 11,
        bold: false,
        margin: [200, -12, 0, 0],
        alignment: "left",
        color: 'black',
        position:'fixed',
      },
      content4b: {
        fontSize: 11,
        bold: false,
        margin: [320, -12, 0, 0],
        alignment: "left",
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
        margin: [20, -15, 0, 0],
        alignment : 'left',
        color: 'black'
      },
    
    },
    
    footer:[
      
      {text: 'TRACY © '+año, style: 'footer'},
    ]
    }
      
    
 
    const pdf =  pdfMake.createPdf(pdfDefinition);
    pdf.download('Bitacora Lavado Automatico '+ dia + '/'+mes2+'/'+año + ' ('+ hora + '/'+ minutos + 'hr)');

    
  }


}
