import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LazyComponent } from "./lazy.component";
import { LazyRoutingModule } from "./lazy-routing.module";
import { PollingModule } from "polling";

@NgModule({
    imports: [CommonModule, PollingModule,LazyRoutingModule],
    declarations: [LazyComponent]
}) 
export class LazyModule {}