import { NumberType } from '../helper/interfaces';
import * as i0 from "@angular/core";
export declare class TranslateNumbersService {
    /**
    * value : the value that has numbers and wanted to be translated
    * to : the Numeral systems that the value will be translated to ---  Optional  --- default is Arabic / Arabic_Hindi / Arabic_Eastern /
    * from : the Numeral systems that is the input is already in ---  Optional --- default is Digit s/ Arabic_Western / Latin / Cyrillic / Greek
    */
    Translate(value: string, to?: NumberType | undefined, from?: NumberType | undefined): string;
    Number(value: string, from: NumberType): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<TranslateNumbersService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TranslateNumbersService>;
}
export declare const dicLTypesString: {
    [id: number]: string[];
};
export declare const dicLTypesSearch: {
    [id: number]: RegExp[];
};
export declare function _TranslateToFrom(value: string, to: NumberType, from: NumberType): string;
