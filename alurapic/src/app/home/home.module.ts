import { VmessageModule } from './../shared/components/vmessage/vmessage.module';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SignInComponent } from "./signin/signin.component";

@NgModule({
    declarations: [SignInComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        VmessageModule
    ]
})
export class HomeModule{}