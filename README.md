📙 A light-weight utility to translate numbers from one Type to another that are dependent on `DECIMAL SYSTEM` but as default it converts from  `Arabic(Western)` numbers like `(1,2,251,..)` into `Arabic(Eastern)` like ` (١,٢,٢٥١,..) `  

[demo](https://stackblitz.com/edit/angular-translate-numbers)

## 📌 Supported Numeral systems
`Arabic,
Gujarati,
Gurmukhi,
Bengali,
Assamese,
Kannada,
Odia,
Malayalam,
Telugu,
Burmese,
Tibetan,
Mongolian,
Sinhala,
Khmer,
Thai,
Lao,
Javanese,
Arabic_Weste
Latin,
Cyrillic,
Greek,
Arabic_Hindi
Arabic_Easte
Persian,
Pashto,
Dari,
Urdu,
Shahmukhi,
Brahmi,
Devanagari`

## 📌 Installation
```sh
$ npm i angular-translate-numbers
```

## 📌 Usage  
1- add ` AngularTranslateNumbersModule`  to `imports` in `NgModule` 
```javascript
@NgModule({
  imports: [
    AngularTranslateNumbersModule,
    //here any other imports modules
    ]
```
2- import `TranslateNumbersService` Service and `NumberType` Numeral systems Enum in a Component 
```javascript
import {TranslateNumbersService,NumberType } from 'angular-translate-numbers';
```
3- inject `TranslateNumbersService` in any constructor and init Enum In the Component so you can easily use the supported Number types
```javascript
  NumberTypes = NumberType;
 constructor(private service: TranslateNumbersService) {
  }
```

## 📌 Coding 
### ⚙️ Using Service (`TranslateNumbersService`)
> 👋 for `typeScript` Files using .
 ```javascript
Translate(value : string, to?: NumberType , `from`?: NumberType ): string;
 ```
`value` 
-the value that has numbers and wanted to be translated

`to` 
-The Numeral systems that the value will be translated to 
-Optional  
-Default is Arabic / Arabic_Hindi / Arabic_Eastern /

`from`
-the Numeral systems that is the input is already in 
-Optional 
-Default is Digit s/ Arabic_Western / Latin / Cyrillic / Greek
 
  
 ```javascript
 Number( value : string, from : NumberType): number;
```
`value`
-the value that Already Translated And Want to Convert it To Number

`from`
-the Numeral systems that is the input is already in

   
## 📌 Examples
#### Defaults 
```javascript
this.service.Translate("i am 28 years old");
//result => i am ٢٨ years old

this.service.Translate("i am 28 years old",NumberType.Arabic);
//result => i am ٢٨ years old

this.service.Translate("i am 28 years old",NumberType.Arabic,NumberType.Digits);
//result => i am ٢٨ years old
```


#### From type to another 
```javascript
this.service.Translate("i am 28 years old",NumberType.Assamese);
//result => i am ২৮ years old

this.service.Translate("i am 28 years old",NumberType.Malayalam,NumberType.Digits);
//result => i am ൨൮ years old

this.service.Translate("i am ൨൮ years old",NumberType.Digits,NumberType.Malayalam);
//result => i am 28 years old  

this.service.Translate("i am 28 years old",NumberType.Malayalam,NumberType.Assamese);
//result => i am 28 years old  
//>was not translated as the 'from' input was wrong
```
#### From type to number value
 ```javascript
 let number_Malayalam_Type = this.service.Translate("28",NumberType.Malayalam);
 //result =>  ൨൮
let number_Assamese_Type = this.service.Translate(number_Malayalam_Type,NumberType.Assamese,NumberType.Malayalam);
//result =>  ২৮
let digitsValueAsNumber = this.service.Number(number_Assamese_Type,NumberType.Assamese);
//result =>  28
let digitsValueAsNumber = this.service.Number(number_Assamese_Type+"hi",NumberType.Assamese);
//result =>  NAN
//was not converted to number as the 'input value' contained un number characters 
let digitsValueAsNumber2 = this.service.Number(number_Assamese_Type,NumberType.Javanese);
//result =>  NAN
//was not converted to number as the 'from' Number Type was not correct
```

### ⚙️ Using Pipe (`TranslateNumbersPipe`)
> 👋 for `template` using .

``` html

{{ 123456 | translateNumbers }}<!-- default converts to aranic-->
<!-- Result  ١٢٣٤٥٦ -->
{{ 123456 | translateNumbers: NumberTypes.Arabic }} <!-- example to change 'to' Type -->
<!-- Result  ١٢٣٤٥٦ -->
{{ "١٢٣٤٥٦" | translateNumbers: NumberTypes.Assamese: NumberTypes.Arabic}}<!-- example to change 'to' Type from another type-->
<!-- Result  ১২৩৪৫৬ -->
{{ "১২৩৪৫৬" | translateNumbers: NumberTypes.Digits:NumberTypes.Assamese }})<!-- example to change 'to' Digits from another type-->
<!-- Result  123456 -->
```
## 📌 Demo & github
[demo](https://stackblitz.com/edit/angular-translate-numbers)
[github](https://github.com/fsAhmedAdel/angular-translate-numbers)


> 👋 In upcoming versions, we might add more Numeral Types so please feedback for issues or wanted Numeral systems .

