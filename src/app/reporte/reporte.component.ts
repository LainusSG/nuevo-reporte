import { style } from '@angular/animations';
import { Component } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import { degrees, grayscale, PDFDocument, rgb, StandardFonts } from 'pdf-lib';




export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
];


function buildTableBody(data: { [x: string]: { toString: () => any; }; }[], columns: (string | number)[]) {
  var body = [];

  body.push(columns);

  data.forEach(function(row: { [x: string]: { toString: () => any; }; }) {
      var dataRow: any[] = [];

      columns.forEach(function(column: string | number) {
          dataRow.push(row[column].toString());
      })

      body.push(dataRow);
  });

  return body;
}

function table(data: { [x: string]: { toString: () => any; }; }[] | { name: string; age: number; }[], columns: (string | number)[]) {
  return {
      table: {
          headerRows: 1,
          body: buildTableBody(data, columns)
      }
  };
}

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrl: './reporte.component.css'
})
export class ReporteComponent {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;


  
  createPDF(){
 
    const pdfDefinition: any = {
   
      content: [
        { text: 'Dynamic parts', style: 'header'  },
  
         table(ELEMENT_DATA, ['position', 'name', 'weight', 'symbol'], ),

    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        margin: 2,
        color: 'black'
      },
      subheader: {
        fontSize: 16,
        bold: true,
        margin: [0, 10, 0, 5]
      },
      tableExample: {
        margin: [0, 5, 0, 15]
      },
      tableHeader: {
        bold: true,
        fontSize: 13,
        color: 'black'
      }
    },
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








  async createPdf() {
    //--------------------------------- comenzar a borrar ------------------------------------------
    
    
    const flagUrl = '../assets/PLANTILLA GENERAL.pdf';
    const constitutionUrl = 'https://pdf-lib.js.org/assets/us_constitution.pdf';
  
    const flagPdfBytes = await fetch(flagUrl).then((res) => res.arrayBuffer());
    const constitutionPdfBytes = await fetch(constitutionUrl).then((res) =>
      res.arrayBuffer(),
    );
  
    const pdfDoc = await PDFDocument.create();
  
    const [americanFlag] = await pdfDoc.embedPdf(flagPdfBytes);
  
    const usConstitutionPdf = await PDFDocument.load(constitutionPdfBytes);
    const preamble = await pdfDoc.embedPage(usConstitutionPdf.getPages()[1], {
      left: 55,
      bottom: 485,
      right: 300,
      top: 575,
    });
  
    const americanFlagDims = americanFlag.scale(1);
    const preambleDims = preamble.scale(2.25);
  
    const page = pdfDoc.addPage();
  
    page.drawPage(americanFlag, {
      ...americanFlagDims,

    });
    page.drawPage(preamble, {
      ...preambleDims,
      x: page.getWidth() / 2 - preambleDims.width / 2,
      y: page.getHeight() / 2 - preambleDims.height / 2 - 50,
    });
  
    
    
      const pdfBytes = await pdfDoc.save()
        //--------------------------- Dejar de Borrar------------------------------------------
        this.saveByteArray('Reporte de Recepción - ', pdfBytes); //-------- esta linea de codigo convierte la funcion de arriba en el formato reconocido por angulars
        
      }
    
    
      saveByteArray(reportName: string, byte: BlobPart) {
        var blob = new Blob([byte], {type: "application/pdf"});
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        var fileName = reportName;
        link.download = fileName;
        link.click();
      };




  
}


