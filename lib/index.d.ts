/**
 * @package html-to-pdf-node
 * @author Namindu Ranathunga
 * @version 1.0.0
 * 2024
 * The original code was converted to typescript and changed the h by Namindu Ranathunga
 * Originally written by Shyam Hajare <hajareshyam@gmail.com>
 */
import * as pdf from 'html-pdf';
import * as fs from 'fs';
export interface Document {
    html: string;
    data: any;
    render?: boolean;
    path?: string;
    type?: 'buffer' | 'stream' | 'file';
}
export interface Options extends pdf.CreateOptions {
}
/**
 * create function is used to create pdf from ejs templates.
 * @param  {document, options}
 * @return {callback}
 */
export declare const create: (document: Document, options: Options) => Promise<pdf.FileInfo | Buffer | fs.ReadStream>;
