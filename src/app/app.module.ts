import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { WeeklyNetSalaryPipe } from './weekly-net-salary.pipe';
import { HomeComponent } from './home/home.component';
import { MathExtensionsService } from './math-extensions.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    WeeklyNetSalaryPipe,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      {
        path: 'contact',
        loadChildren: () =>
          import('./contact-us/contact-us.module').then(
            (m) => m.ContactUsModule
          ),
      },
    ]),
  ],
  providers: [MathExtensionsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
