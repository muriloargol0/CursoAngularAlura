import { PhotoService } from './../photo/photo.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { Photo } from '../photo/photo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = []; 
  filter: string = '';
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';
  
  constructor(private activatedRoute: ActivatedRoute,
    private photoService: PhotoService) {
  }
  
  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data.photos;
    //Este filtro só será aplicado se o usuário ficar 300ms sem digitar, para evitar múltiplas chamadas
  }

  load(){
    this.photoService.listFromUserPaginated(this.userName, ++this.currentPage)
    .subscribe(photos => {
      this.filter = '';
      this.photos = this.photos.concat(photos); //Faz o push de cada item do array
      if(!photos.length) this.hasMore = false;
    });
  }
}
