import { Pipe } from '@angular/core';
import { NumberType } from '../helper/interfaces';
import { _TranslateToFrom } from '../Service/translate-numbers.service';
import * as i0 from "@angular/core";
export class TranslateNumbersPipe {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLW51bWJlcnMucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItdHJhbnNsYXRlLW51bWJlcnMvc3JjL2xpYi9QaXBlL3RyYW5zbGF0ZS1udW1iZXJzLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOztBQVF4RSxNQUFNLE9BQU8sb0JBQW9CO0lBQy9CLFNBQVMsQ0FBQyxLQUFjLEVBQUUsR0FBRyxJQUFrQjtRQUU3QyxJQUFJLEVBQWMsQ0FBQztRQUNuQixJQUFJLElBQWdCLENBQUM7UUFDckIsSUFBSSxJQUFJLEVBQUU7WUFDUixFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2IsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoQjthQUFNO1lBQ0wsRUFBRSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7WUFDdkIsSUFBSSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7U0FDMUI7UUFDRCxJQUFJLElBQUksR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLE9BQU8sZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMxQyxDQUFDOztpSEFkVSxvQkFBb0I7K0dBQXBCLG9CQUFvQjsyRkFBcEIsb0JBQW9CO2tCQUxoQyxJQUFJO21CQUFDO29CQUNKLElBQUksRUFBRSxrQkFBa0I7b0JBQ3hCLElBQUksRUFBRSxJQUFJO2lCQUNYIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOdW1iZXJUeXBlIH0gZnJvbSAnLi4vaGVscGVyL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQgeyBfVHJhbnNsYXRlVG9Gcm9tIH0gZnJvbSAnLi4vU2VydmljZS90cmFuc2xhdGUtbnVtYmVycy5zZXJ2aWNlJztcclxuXHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ3RyYW5zbGF0ZU51bWJlcnMnLFxyXG4gIHB1cmU6IHRydWVcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVOdW1iZXJzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybSh2YWx1ZTogdW5rbm93biwgLi4uYXJnczogTnVtYmVyVHlwZVtdKTogdW5rbm93biB7XHJcblxyXG4gICAgbGV0IHRvOiBOdW1iZXJUeXBlO1xyXG4gICAgbGV0IGZyb206IE51bWJlclR5cGU7XHJcbiAgICBpZiAoYXJncykge1xyXG4gICAgICB0byA9IGFyZ3NbMF07XHJcbiAgICAgIGZyb20gPSBhcmdzWzFdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdG8gPSBOdW1iZXJUeXBlLkFyYWJpYztcclxuICAgICAgZnJvbSA9IE51bWJlclR5cGUuRGlnaXRzO1xyXG4gICAgfVxyXG4gICAgbGV0IG5ld3YgPSB2YWx1ZSArIFwiXCI7XHJcbiAgICByZXR1cm4gX1RyYW5zbGF0ZVRvRnJvbShuZXd2LCB0bywgZnJvbSk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG59XHJcbiJdfQ==