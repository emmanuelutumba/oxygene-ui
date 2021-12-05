import {NgModule} from '@angular/core';
import {ButtonModelComponent} from './button-model/button-model.component';
import {SelectModelComponent} from './select-model/select-model.component';
import {CheckBoxModelComponent} from './check-box-model/check-box-model.component';
import {DialogModelComponent} from './dialog-model/dialog-model.component';
import {InputModelComponent} from './input-model/input-model.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ButtonModelComponent, SelectModelComponent, CheckBoxModelComponent, DialogModelComponent, InputModelComponent],
  imports: [ReactiveFormsModule],
  exports: [ButtonModelComponent, SelectModelComponent, CheckBoxModelComponent, DialogModelComponent, InputModelComponent]
})
export class OxygeneUiModule {
}
