export var NumberType;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItdHJhbnNsYXRlLW51bWJlcnMvc3JjL2xpYi9oZWxwZXIvaW50ZXJmYWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQyxNQUFNLENBQU4sSUFBYSxVQTZDYjtBQTdDQSxXQUFhLFVBQVU7SUFDdEIsK0NBQVUsQ0FBQTtJQUNWLCtEQUFrQixDQUFBO0lBQ2xCLDZDQUFTLENBQUE7SUFDVCxtREFBWSxDQUFBO0lBQ1osNkNBQVMsQ0FBQTtJQUVULCtDQUFVLENBQUE7SUFDViwyREFBZ0IsQ0FBQTtJQUNoQiwrREFBa0IsQ0FBQTtJQUVsQixpREFBVyxDQUFBO0lBQ1gsK0NBQVUsQ0FBQTtJQUNWLDJDQUFRLENBQUE7SUFFUiwyQ0FBUSxDQUFBO0lBQ1IscURBQWEsQ0FBQTtJQUViLGFBQWE7SUFFYixlQUFlO0lBRWYsK0NBQVUsQ0FBQTtJQUNWLHVEQUFjLENBQUE7SUFDZCxtREFBWSxDQUFBO0lBQ1osb0RBQWEsQ0FBQTtJQUViLGtEQUFZLENBQUE7SUFDWixvREFBYSxDQUFBO0lBRWIsa0RBQVksQ0FBQTtJQUNaLDRDQUFTLENBQUE7SUFDVCxzREFBYyxDQUFBO0lBQ2QsY0FBYztJQUNkLGdEQUFXLENBQUE7SUFDWCxrREFBWSxDQUFBO0lBQ1osa0RBQVksQ0FBQTtJQUNaLHNEQUFjLENBQUE7SUFDZCxrREFBWSxDQUFBO0lBQ1osOENBQVUsQ0FBQTtJQUNWLDRDQUFTLENBQUE7SUFDVCwwQ0FBUSxDQUFBO0lBQ1Isb0RBQWEsQ0FBQTtJQUNiLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDdEIsQ0FBQyxFQTdDYSxVQUFVLEtBQVYsVUFBVSxRQTZDdkI7QUFFRCxzQ0FBc0M7QUFDdEMsZ0dBQWdHO0FBQ2hHLHdEQUF3RDtBQUN4RCxJQUFJO0FBRUosaUNBQWlDO0FBRWpDLGdJQUFnSTtBQUNoSSwrREFBK0Q7QUFDL0QsTUFBTTtBQUVOLGNBQWM7QUFDZCxnRUFBZ0U7QUFDaEUsMkRBQTJEO0FBQzNELFNBQVM7QUFDVCxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiBleHBvcnQgIGVudW0gTnVtYmVyVHlwZSB7XHJcbiAgRGlnaXRzID0gMSxcclxuICBBcmFiaWNfV2VzdGVybiA9IDEsXHJcbiAgTGF0aW4gPSAxLFxyXG4gIEN5cmlsbGljID0gMSxcclxuICBHcmVlayA9IDEsXHJcblxyXG4gIEFyYWJpYyA9IDIsXHJcbiAgQXJhYmljX0hpbmRpID0gMixcclxuICBBcmFiaWNfRWFzdGVybiA9IDIsXHJcblxyXG4gIFBlcnNpYW4gPSAzLFxyXG4gIFBhc2h0byA9IDMsXHJcbiAgRGFyaSA9IDMsXHJcblxyXG4gIFVyZHUgPSA0LFxyXG4gIFNoYWhtdWtoaSA9IDQsXHJcblxyXG4gIC8vIEhpbmRpID0gNSxcclxuXHJcbiAgLy8gQnJhaWxsZSA9IDYsXHJcblxyXG4gIEJyYWhtaSA9IDcsXHJcbiAgRGV2YW5hZ2FyaSA9IDgsXHJcbiAgR3VqYXJhdGkgPSA5LFxyXG4gIEd1cm11a2hpID0gMTAsXHJcblxyXG4gIEJlbmdhbGkgPSAxMSxcclxuICBBc3NhbWVzZSA9IDExLFxyXG5cclxuICBLYW5uYWRhID0gMTIsXHJcbiAgT2RpYSA9IDEzLFxyXG4gIE1hbGF5YWxhbSA9IDE0LFxyXG4gIC8vIFRhbWlsID0gMTUsXHJcbiAgVGVsdWd1ID0gMTYsXHJcbiAgQnVybWVzZSA9IDE3LFxyXG4gIFRpYmV0YW4gPSAxOCxcclxuICBNb25nb2xpYW4gPSAxOSxcclxuICBTaW5oYWxhID0gMjAsXHJcbiAgS2htZXIgPSAyMSxcclxuICBUaGFpID0gMjIsXHJcbiAgTGFvID0gMjMsXHJcbiAgSmF2YW5lc2UgPSAyNCxcclxuICAvLyBFYXN0QXNpYSA9IDI1LFxyXG4gIC8vIEdyZWVrX01vZGVybiA9IDI2XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBpbnRlcmZhY2UgSURpZ2l0VHJhbnNsYXRvciB7XHJcbi8vICAgVHJhbnNsYXRlKHZhbHVlOiBzdHJpbmcsIHRvOiBOdW1iZXJUeXBlIHwgdW5kZWZpbmVkLCBmcm9tOiBOdW1iZXJUeXBlIHwgdW5kZWZpbmVkKTogc3RyaW5nO1xyXG4vLyAgIC8vIE51bWJlcih2YWx1ZTogc3RyaW5nLCBmcm9tOiBOdW1iZXJUeXBlKTogbnVtYmVyO1xyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgY2xhc3MgRGlnaXRUcmFuc2xhdG9yIHtcclxuXHJcbi8vICAgcHVibGljIFRyYW5zbGF0ZSh2YWx1ZTogc3RyaW5nLCB0bzogTnVtYmVyVHlwZSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZCwgZnJvbTogTnVtYmVyVHlwZSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZCk6IHN0cmluZyB7XHJcbi8vICAgICByZXR1cm4gTnVtYmVyQ29udmVydGVySGVscGVyLlRyYW5zbGF0ZSh2YWx1ZSwgdG8sIGZyb20pO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgLy8gLy9UT0RPXHJcbi8vICAgLy8gcHVibGljIE51bWJlcih2YWx1ZTogc3RyaW5nLCBmcm9tOiBOdW1iZXJUeXBlKTogbnVtYmVyIHtcclxuLy8gICAvLyAgIHJldHVybiBOdW1iZXJDb252ZXJ0ZXJIZWxwZXIuTnVtYmVyKHZhbHVlLCBmcm9tKTtcclxuLy8gICAvLyB9XHJcbi8vIH1cclxuXHJcbiJdfQ==