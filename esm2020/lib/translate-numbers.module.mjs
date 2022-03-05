import { NgModule } from '@angular/core';
import { TranslateNumbersPipe } from './Pipe/translate-numbers.pipe';
import { TranslateNumbersService } from './Service/translate-numbers.service';
import { TranslateNumberTestPipe } from './Pipe/translate-number-test.pipe';
import * as i0 from "@angular/core";
export class AngularTranslateNumbersModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLW51bWJlcnMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci10cmFuc2xhdGUtbnVtYmVycy9zcmMvbGliL3RyYW5zbGF0ZS1udW1iZXJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOztBQWtCNUUsTUFBTSxPQUFPLDZCQUE2Qjs7MEhBQTdCLDZCQUE2QjsySEFBN0IsNkJBQTZCLGlCQWR0QyxvQkFBb0I7UUFDcEIsdUJBQXVCLGFBS3ZCLG9CQUFvQjtRQUNwQix1QkFBdUI7MkhBT2QsNkJBQTZCLGFBTDdCO1FBQ1Qsb0JBQW9CO1FBQ3BCLHVCQUF1QjtLQUMxQixZQVRVLEVBQ1I7MkZBVVUsNkJBQTZCO2tCQWhCekMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osb0JBQW9CO3dCQUNwQix1QkFBdUI7cUJBQ3hCO29CQUNELE9BQU8sRUFBRSxFQUNSO29CQUNELE9BQU8sRUFBRTt3QkFDUCxvQkFBb0I7d0JBQ3BCLHVCQUF1QjtxQkFDeEI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULG9CQUFvQjt3QkFDcEIsdUJBQXVCO3FCQUMxQjtpQkFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZU51bWJlcnNQaXBlIH0gZnJvbSAnLi9QaXBlL3RyYW5zbGF0ZS1udW1iZXJzLnBpcGUnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVOdW1iZXJzU2VydmljZSB9IGZyb20gJy4vU2VydmljZS90cmFuc2xhdGUtbnVtYmVycy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlTnVtYmVyVGVzdFBpcGUgfSBmcm9tICcuL1BpcGUvdHJhbnNsYXRlLW51bWJlci10ZXN0LnBpcGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFRyYW5zbGF0ZU51bWJlcnNQaXBlLFxyXG4gICAgVHJhbnNsYXRlTnVtYmVyVGVzdFBpcGUsXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBUcmFuc2xhdGVOdW1iZXJzUGlwZSxcclxuICAgIFRyYW5zbGF0ZU51bWJlclRlc3RQaXBlLFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBUcmFuc2xhdGVOdW1iZXJzUGlwZSxcclxuICAgIFRyYW5zbGF0ZU51bWJlcnNTZXJ2aWNlXHJcbl0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbmd1bGFyVHJhbnNsYXRlTnVtYmVyc01vZHVsZSB7XHJcblxyXG59XHJcbiJdfQ==