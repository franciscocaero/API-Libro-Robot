import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-apiview',
  templateUrl: './apiview.page.html',
  styleUrls: ['./apiview.page.scss'],
})
export class BookListComponent implements OnInit {
  item?: { title: string; imageUrl: string; imageType: 'dog' | 'robot' };

  constructor(private apiService: APIService, private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    
    this.loadRandomBookAndImage();
  }

  loadRandomBookAndImage(): void {
    const id = Math.floor(Math.random() * 10) + 1;
    this.apiService.getBookTitle(id).subscribe((data) => {
      const book = data.results[0];
      const imageType = Math.random() < 0.5 ? 'dog' : 'robot';

      if (imageType === 'dog') {
        this.apiService.getRandomDogImage().subscribe((response) => {
          this.item = {
            title: book.title,
            imageUrl: response.message,
            imageType: 'dog',
          };
        });
      } else {
        this.item = {
          title: book.title,
          imageUrl: this.apiService.getRobotImage(book.title),
          imageType: 'robot',
        };
      }
    });
  }

  saveItem(): void {
    if (this.item) {
      this.firebaseService.addItem(this.item.title, this.item.imageUrl)
        .then(() => alert('Item saved successfully!'))
        .catch(err => alert('Error saving item: ' + err));
    }
  }
}





