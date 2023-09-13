import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from "@angular/forms";
import { validate } from 'gerador-validador-cpf'

export function documentValue(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    return validate(control.value)
      ? null : {document: control.value, message: "CPF inválido"};
  }
}

@Directive({
    selector: '[documentValue]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: DocumentValidatorDirective,
        multi: true
    }]
})
export class DocumentValidatorDirective implements Validator {

    validate(control: AbstractControl): { [key: string]: any } | null {
        return documentValue()(control);
    }
}
