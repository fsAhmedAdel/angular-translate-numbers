import * as i0 from '@angular/core';
import { Pipe, Injectable, NgModule } from '@angular/core';

class NumberConverterHelper {
}

var NumberType;
(function (NumberType) {
    NumberType[NumberType["Digits"] = 1] = "Digits";
    NumberType[NumberType["Arabic_Western"] = 1] = "Arabic_Western";
    NumberType[NumberType["Latin"] = 1] = "Latin";
    NumberType[NumberType["Cyrillic"] = 1] = "Cyrillic";
    NumberType[NumberType["Greek"] = 1] = "Greek";
    NumberType[NumberType["Arabic"] = 2] = "Arabic";
    NumberType[NumberType["Arabic_Hindi"] = 2] = "Arabic_Hindi";
    NumberType[NumberType["Arabic_Eastern"] = 2] = "Arabic_Eastern";
    NumberType[NumberType["Persian"] = 3] = "Persian";
    NumberType[NumberType["Pashto"] = 3] = "Pashto";
    NumberType[NumberType["Dari"] = 3] = "Dari";
    NumberType[NumberType["Urdu"] = 4] = "Urdu";
    NumberType[NumberType["Shahmukhi"] = 4] = "Shahmukhi";
    // Hindi = 5,
    // Braille = 6,
    NumberType[NumberType["Brahmi"] = 7] = "Brahmi";
    NumberType[NumberType["Devanagari"] = 8] = "Devanagari";
    NumberType[NumberType["Gujarati"] = 9] = "Gujarati";
    NumberType[NumberType["Gurmukhi"] = 10] = "Gurmukhi";
    NumberType[NumberType["Bengali"] = 11] = "Bengali";
    NumberType[NumberType["Assamese"] = 11] = "Assamese";
    NumberType[NumberType["Kannada"] = 12] = "Kannada";
    NumberType[NumberType["Odia"] = 13] = "Odia";
    NumberType[NumberType["Malayalam"] = 14] = "Malayalam";
    // Tamil = 15,
    NumberType[NumberType["Telugu"] = 16] = "Telugu";
    NumberType[NumberType["Burmese"] = 17] = "Burmese";
    NumberType[NumberType["Tibetan"] = 18] = "Tibetan";
    NumberType[NumberType["Mongolian"] = 19] = "Mongolian";
    NumberType[NumberType["Sinhala"] = 20] = "Sinhala";
    NumberType[NumberType["Khmer"] = 21] = "Khmer";
    NumberType[NumberType["Thai"] = 22] = "Thai";
    NumberType[NumberType["Lao"] = 23] = "Lao";
    NumberType[NumberType["Javanese"] = 24] = "Javanese";
    // EastAsia = 25,
    // Greek_Modern = 26
})(NumberType || (NumberType = {}));
// export interface IDigitTranslator {
//   Translate(value: string, to: NumberType | undefined, from: NumberType | undefined): string;
//   // Number(value: string, from: NumberType): number;
// }
// export class DigitTranslator {
//   public Translate(value: string, to: NumberType | undefined = undefined, from: NumberType | undefined = undefined): string {
//     return NumberConverterHelper.Translate(value, to, from);
//   }
//   // //TODO
//   // public Number(value: string, from: NumberType): number {
//   //   return NumberConverterHelper.Number(value, from);
//   // }
// }

class TranslateNumberTestPipe {
    transform(value, ...args) {
        return value + "tested";
    }
}
TranslateNumberTestPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: TranslateNumberTestPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
TranslateNumberTestPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: TranslateNumberTestPipe, name: "translateNumberTest" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: TranslateNumberTestPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'translateNumberTest'
                }]
        }] });

class TranslateNumbersService {
    /**
    * value : the value that has numbers and wanted to be translated
    * to : the Numeral systems that the value will be translated to ---  Optional  --- default is Arabic / Arabic_Hindi / Arabic_Eastern /
    * from : the Numeral systems that is the input is already in ---  Optional --- default is Digit s/ Arabic_Western / Latin / Cyrillic / Greek
    */
    Translate(value, to = undefined, from = undefined) {
        if (!to || to < 0 || to > 26) {
            to = NumberType.Arabic;
        }
        if (!from || from < 0 || from > 26) {
            from = NumberType.Digits;
        }
        return _TranslateToFrom(value, to, from);
    }
    Number(value, from) {
        let stringAsDigits = _TranslateToFrom(value, NumberType.Digits, from);
        return Number(stringAsDigits);
    }
}
TranslateNumbersService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: TranslateNumbersService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
TranslateNumbersService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: TranslateNumbersService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: TranslateNumbersService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });
const dicLTypesString = {
    1: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    // 6: ['⠚', '⠁', '⠃', '⠉', '⠙', '⠑', '⠋', '⠛', '⠓', '⠊'],
    7: ['𑁦', '𑁧', '𑁨', '𑁩', '𑁪', '𑁫', '𑁬', '𑁭', '𑁮', '𑁯'],
    8: ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'],
    9: ['૦', '૧', '૨', '૩', '૪', '૫', '૬', '૭', '૮', '૯'],
    10: ['੦', '੧', '੨', '੩', '੪', '੫', '੬', '੭', '੮', '੯'],
    11: ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'],
    12: ['೦', '೧', '೨', '೩', '೪', '೫', '೬', '೭', '೮', '೯'],
    13: ['୦', '୧', '୨', '୩', '୪', '୫', '୬', '୭', '୮', '୯'],
    14: ['൦', '൧', '൨', '൩', '൪', '൫', '൬', '൭', '൮', '൯'],
    // 15: ['0   ௧', '௨', '௩', '௪', '௫', '௬', '௭', '௮', '௯'],
    16: ['౦', '౧', '౨', '౩', '౪', '౫', '౬', '౭', '౮', '౯'],
    17: ['၀', '၁', '၂', '၃', '၄', '၅', '၆', '၇', '၈', '၉'],
    18: ['༠', '༡', '༢', '༣', '༤', '༥', '༦', '༧', '༨', '༩'],
    19: ['᠐', '᠑', '᠒', '᠓', '᠔', '᠕', '᠖', '᠗', '᠘', '᠙'],
    20: ['෦', '෧', '෨', '෩', '෪', '෫', '෬', '෭', '෮', '෯'],
    21: ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'],
    22: ['๐', '๑', '๒', '๓', '๔', '๕', '๖', '๗', '๘', '๙'],
    23: ['໐', '໑', '໒', '໓', '໔', '໕', '໖', '໗', '໘', '໙'],
    24: ['꧐', '꧑', '꧒', '꧓', '꧔', '꧕', '꧖', '꧗', '꧘', '꧙'],
    2: ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'],
    3: ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'],
    4: ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'],
    25: ['〇', '一', '二', '三', '四', '五', '六', '七', '八', '九'],
    26: ['ο', 'Αʹ', 'Βʹ', 'Γʹ', 'Δʹ', 'Εʹ', 'Ϛʹ', 'Ζʹ', 'Ηʹ', 'Θʹ']
};
const dicLTypesSearch = {
    1: [/0/g, /1/g, /2/g, /3/g, /4/g, /5/g, /6/g, /7/g, /8/g, /9/g],
    // 6: [/⠚/g, /⠁/g, /⠃/g, /⠉/g, /⠙/g, /⠑/g, /⠋/g, /⠛/g, /⠓/g, /⠊/g],
    7: [/𑁦/g, /𑁧/g, /𑁨/g, /𑁩/g, /𑁪/g, /𑁫/g, /𑁬/g, /𑁭/g, /𑁮/g, /𑁯/g],
    8: [/०/g, /१/g, /२/g, /३/g, /४/g, /५/g, /६/g, /७/g, /८/g, /९/g],
    9: [/૦/g, /૧/g, /૨/g, /૩/g, /૪/g, /૫/g, /૬/g, /૭/g, /૮/g, /૯/g],
    10: [/੦/g, /੧/g, /੨/g, /੩/g, /੪/g, /੫/g, /੬/g, /੭/g, /੮/g, /੯/g],
    11: [/০/g, /১/g, /২/g, /৩/g, /৪/g, /৫/g, /৬/g, /৭/g, /৮/g, /৯/g],
    12: [/೦/g, /೧/g, /೨/g, /೩/g, /೪/g, /೫/g, /೬/g, /೭/g, /೮/g, /೯/g],
    13: [/୦/g, /୧/g, /୨/g, /୩/g, /୪/g, /୫/g, /୬/g, /୭/g, /୮/g, /୯/g],
    14: [/൦/g, /൧/g, /൨/g, /൩/g, /൪/g, /൫/g, /൬/g, /൭/g, /൮/g, /൯/g],
    // 15: [/0   ௧/g, /௨/g, /௩/g, /௪/g, /௫/g, /௬/g, /௭/g, /௮/g, /௯/g],
    16: [/౦/g, /౧/g, /౨/g, /౩/g, /౪/g, /౫/g, /౬/g, /౭/g, /౮/g, /౯/g],
    17: [/၀/g, /၁/g, /၂/g, /၃/g, /၄/g, /၅/g, /၆/g, /၇/g, /၈/g, /၉/g],
    18: [/༠/g, /༡/g, /༢/g, /༣/g, /༤/g, /༥/g, /༦/g, /༧/g, /༨/g, /༩/g],
    19: [/᠐/g, /᠑/g, /᠒/g, /᠓/g, /᠔/g, /᠕/g, /᠖/g, /᠗/g, /᠘/g, /᠙/g],
    20: [/෦/g, /෧/g, /෨/g, /෩/g, /෪/g, /෫/g, /෬/g, /෭/g, /෮/g, /෯/g],
    21: [/០/g, /១/g, /២/g, /៣/g, /៤/g, /៥/g, /៦/g, /៧/g, /៨/g, /៩/g],
    22: [/๐/g, /๑/g, /๒/g, /๓/g, /๔/g, /๕/g, /๖/g, /๗/g, /๘/g, /๙/g],
    23: [/໐/g, /໑/g, /໒/g, /໓/g, /໔/g, /໕/g, /໖/g, /໗/g, /໘/g, /໙/g],
    24: [/꧐/g, /꧑/g, /꧒/g, /꧓/g, /꧔/g, /꧕/g, /꧖/g, /꧗/g, /꧘/g, /꧙/g],
    2: [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g],
    3: [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
    4: [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
    25: [/〇/g, /一/g, /二/g, /三/g, /四/g, /五/g, /六/g, /七/g, /八/g, /九/g],
    26: [/ο/g, /Αʹ/g, /Βʹ/g, /Γʹ/g, /Δʹ/g, /Εʹ/g, /Ϛʹ/g, /Ζʹ/g, /Ηʹ/g, /Θʹ/g],
};
function _TranslateToFrom(value, to, from) {
    value = value + "";
    if (!to || to < 0 || to > 26) {
        to = NumberType.Arabic;
    }
    if (!from || from < 0 || from > 26) {
        from = NumberType.Digits;
    }
    let searches = dicLTypesSearch[from];
    let replaces = dicLTypesString[to];
    if (searches && replaces) {
        for (let index = 0; index < searches.length; index++) {
            let search = searches[index];
            let replace = replaces[index];
            if (search && replace)
                value = value.replace(search, replace);
        }
    }
    return value;
}

class TranslateNumbersPipe {
    transform(value, ...args) {
        let to;
        let from;
        if (args) {
            to = args[0];
            from = args[1];
        }
        else {
            to = NumberType.Arabic;
            from = NumberType.Digits;
        }
        let newv = value + "";
        return _TranslateToFrom(newv, to, from);
    }
}
TranslateNumbersPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: TranslateNumbersPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
TranslateNumbersPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: TranslateNumbersPipe, name: "translateNumbers" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: TranslateNumbersPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'translateNumbers',
                    pure: true
                }]
        }] });

class AngularTranslateNumbersModule {
}
AngularTranslateNumbersModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AngularTranslateNumbersModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AngularTranslateNumbersModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AngularTranslateNumbersModule, declarations: [TranslateNumbersPipe,
        TranslateNumberTestPipe], exports: [TranslateNumbersPipe,
        TranslateNumberTestPipe] });
AngularTranslateNumbersModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AngularTranslateNumbersModule, providers: [
        TranslateNumbersPipe,
        TranslateNumbersService
    ], imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: AngularTranslateNumbersModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        TranslateNumbersPipe,
                        TranslateNumberTestPipe,
                    ],
                    imports: [],
                    exports: [
                        TranslateNumbersPipe,
                        TranslateNumberTestPipe,
                    ],
                    providers: [
                        TranslateNumbersPipe,
                        TranslateNumbersService
                    ],
                }]
        }] });

/*
 * Public API Surface of angular-translate-numbers
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AngularTranslateNumbersModule, NumberConverterHelper, NumberType, TranslateNumberTestPipe, TranslateNumbersPipe, TranslateNumbersService, _TranslateToFrom, dicLTypesSearch, dicLTypesString };
//# sourceMappingURL=angular-translate-numbers.mjs.map
