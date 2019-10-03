import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/Header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './product-list/product.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { TestStyleComponent } from './test-style/test-style.component';
import { HomeComponent } from './home/home.component';
import { ChapterComponent } from './test-style/chapter/chapter.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { CounterComponent } from './input-output/counter/counter.component';
import { BlockHostComponent } from './block-host/block-host.component';
import { BlockComponent } from './block-host/block/block.component';
import { DataBindingComponent } from './data-binding/data-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    AddProductComponent,
    TestStyleComponent,
    HomeComponent,
    ChapterComponent,
    InputOutputComponent,
    CounterComponent,
    BlockHostComponent,
    BlockComponent,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'table', component: ProductListComponent},
      {path: 'form', component: AddProductComponent},
      {path: 'home', component: HomeComponent},
      {path: 'test-style', component: TestStyleComponent},
      {path: 'input', component: InputOutputComponent},
      {path: 'view', component: BlockHostComponent},
      {path: 'binding', component: DataBindingComponent}
    ]),
    FormsModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
