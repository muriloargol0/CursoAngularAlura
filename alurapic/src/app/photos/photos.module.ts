import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { PhotoComponent } from './photo/photo.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { PhotoListComponent } from './photo-list/photo-list.component';

@NgModule({
    declarations: [
        PhotoComponent,
        PhotoFormComponent,
        PhotosComponent,
        PhotoListComponent
    ],
    imports: [ 
        HttpClientModule,
        CommonModule
    ],
    exports: [
        PhotoListComponent
    ]
})

export class PhotosModule {}