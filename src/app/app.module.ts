import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { TwoWayDatabindingComponent } from './components/two-way-databinding/two-way-databinding.component';
import { ButtonCustomComponent } from './components/button-custom/button-custom.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import {MatRadioModule} from '@angular/material/radio';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import {MatListModule} from '@angular/material/list';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { NgForFormComponent } from './components/ng-for-form/ng-for-form.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NgTemplateComponent } from './components/ng-template/ng-template.component';
import { NgContainerComponent } from './components/ng-container/ng-container.component';
import { NgContentComponent } from './components/ng-content/ng-content.component';
import { InputBindingComponent } from './components/input-binding/input-binding.component';
import { ClientComponent } from './components/input-binding/client/client.component';
import { EventComponent } from './components/event/event.component';
import { ChildItemComponent } from './components/event/child-item/child-item.component';
import { ClientsComponent } from './components/clients/clients.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ItemClientComponent } from './components/clients/item-client/item-client.component';
import { ParentChildComponent } from './components/parent-child/parent-child.component';
import { TimerComponent } from './components/parent-child/timer/timer.component';
import { OnChangesComponent } from './components/on-changes/on-changes.component';
import { NameChangesComponent } from './components/on-changes/name-changes/name-changes.component';
import { InterceptingComponent } from './components/intercepting/intercepting.component';
import { NameComponent } from './components/intercepting/name/name.component';

@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayDatabindingComponent,
    ButtonCustomComponent,
    NgStyleComponent,
    NgClassComponent,
    NgIfComponent,
    NgForComponent,
    NgForFormComponent,
    NgSwitchComponent,
    NgTemplateComponent,
    NgContainerComponent,
    NgContentComponent,
    InputBindingComponent,
    ClientComponent,
    EventComponent,
    ChildItemComponent,
    ClientsComponent,
    ItemClientComponent,
    ParentChildComponent,
    TimerComponent,
    OnChangesComponent,
    NameChangesComponent,
    InterceptingComponent,
    NameComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatSelectModule,
    FormsModule,
    MatRadioModule,
    MatListModule,
    MatDividerModule,
    MatProgressBarModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
