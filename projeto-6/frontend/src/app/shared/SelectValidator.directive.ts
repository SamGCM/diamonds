import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from "@angular/forms";

export function selectValue(): ValidatorFn {

  return (control: AbstractControl): { [key: string]: any } | null => {
    console.log(control.value)
    return control.value?.toLowerCase() !== 'default'
      ? null : {selectValue: control.value};
  }
}

@Directive({
    selector: '[selectValue]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: SelectValidatorDirective,
        multi: true
    }]
})
export class SelectValidatorDirective implements Validator {

    validate(control: AbstractControl): { [key: string]: any } | null {
        return selectValue()(control);
    }
}
