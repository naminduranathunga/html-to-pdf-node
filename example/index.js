import { create } from '@namindu/html-to-pdf-node';
import fs from 'fs';

const html = fs.readFileSync('./template.ejs', 'utf8');
const options = { 
    format: "A4",
    orientation: "portrait",
    border: "10mm"
};
const document = {
  html,
  data: {
    title: 'Hello world',
    items: ["Apple", "Banana", "Cherry"]
  },
  path: './example.pdf'
}
create(document, options).then((pdf) => {
  pdf.toFile('./example.pdf');
}).catch((error) => {
  console.error(error);
});