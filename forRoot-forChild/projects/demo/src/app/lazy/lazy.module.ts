import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LazyComponent } from "./lazy.component";
import { LazyRoutingModule } from "./lazy-routing.module";

@NgModule({
    imports: [CommonModule,LazyRoutingModule],
    declarations: [LazyComponent]
}) 
export class LazyModule {}