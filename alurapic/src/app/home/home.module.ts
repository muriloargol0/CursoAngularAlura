import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SignInComponent } from "./signin/signin.component";

@NgModule({
    declarations: [SignInComponent],
    imports: [
        FormsModule,
        ReactiveFormsModule
    ]
})
export class HomeModule{}