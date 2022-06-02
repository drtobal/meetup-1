import { Injectable } from '@angular/core';
import { BREAKPOINT_MD } from 'src/app/data/breakpoints';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {

  getMatchMedia(size: 'sm' | 'md'): MediaQueryList {
    switch (size) {
      case 'md':
        return window.matchMedia(`(min-width: ${BREAKPOINT_MD}px)`);
      case 'sm':
      default:
        return window.matchMedia('(min-width: 0)');
    }
  }

  screenIs(size: 'sm' | 'md'): boolean {
    switch (size) {
      case 'md':
        return window.innerWidth >= BREAKPOINT_MD;
      case 'sm':
      default:
        return true;
    }
  }
}
