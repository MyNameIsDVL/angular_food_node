import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit(): void {
    this.setSlider();
  }

  public setSlider() {
    let slideImage: NodeListOf<HTMLDivElement> = document.querySelectorAll(".dvl-slide-image");
    let slideContainer = <HTMLDivElement>document.querySelector(".dvl-slides-container");
    let nextBtn = <HTMLDivElement>document.querySelector(".dvl-next-btn");
    let prevBtn = <HTMLDivElement>document.querySelector(".dvl-prev-btn");

    let currentSlide = 0;

    let numberOfImages = slideImage.length;
    let slideWidth = slideImage[0].clientWidth;

    //  set up my slider

    slideImage.forEach((img, i) => {
      img.style.left = i * 100 + "%";
    });

    slideImage[0].classList.add("dvl-active");

    prevBtn.addEventListener("click", () => {
      if (currentSlide >= numberOfImages - 1) {
        slideContainer.style.transform = "translateX(-" + slideWidth * 0 + "px)";
        currentSlide = 0;
        return;
      }
      currentSlide++;
      slideContainer.style.transform = "translateX(-" + slideWidth * currentSlide + "px)";
    });

    nextBtn.addEventListener("click", () => {
      if (currentSlide <= 0) {
        slideContainer.style.transform = "translateX(-" + slideWidth * (numberOfImages - 1) + "px)";
        currentSlide = numberOfImages - 1;
        return;
      }
      currentSlide--;
      slideContainer.style.transform = "translateX(-" + slideWidth * currentSlide + "px)";
    });
  }

}
