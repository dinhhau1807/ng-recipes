import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective implements OnInit {
  private isOpen = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {}

  @HostListener('document:click', ['$event']) onDocumentClick(
    event: Event
  ): void {
    if (event.target !== this.elementRef.nativeElement && this.isOpen) {
      this.elementRef.nativeElement.click();
    }
  }

  @HostListener('click') toggleOpen(): void {
    this.isOpen = !this.isOpen;

    const parent = this.renderer.parentNode(this.elementRef.nativeElement);
    const menu = this.renderer.nextSibling(this.elementRef.nativeElement);

    if (this.isOpen) {
      this.renderer.addClass(parent, 'show');
      this.renderer.addClass(menu, 'show');
    } else {
      this.renderer.removeClass(parent, 'show');
      this.renderer.removeClass(menu, 'show');
    }
  }
}
