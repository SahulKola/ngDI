import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { PollingModule } from "polling";

@NgModule({
    imports: [CommonModule, PollingModule],
    declarations: [HomeComponent],

})
export class HomeModule {}