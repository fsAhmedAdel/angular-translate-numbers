import { PipeTransform } from '@angular/core';
import { NumberType } from '../helper/interfaces';
import * as i0 from "@angular/core";
export declare class TranslateNumbersPipe implements PipeTransform {
    transform(value: unknown, ...args: NumberType[]): unknown;
    static ɵfac: i0.ɵɵFactoryDeclaration<TranslateNumbersPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<TranslateNumbersPipe, "translateNumbers">;
}
