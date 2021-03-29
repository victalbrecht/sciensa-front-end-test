import {
  trigger,
  transition,
  style,
  animate,
  AnimationTriggerMetadata,
} from '@angular/animations';

export const collapseAnimation: AnimationTriggerMetadata = trigger('collapse', [
  transition(':enter', [
    style({ height: 0, overflow: 'hidden' }),
    animate('.3s ease-in-out'),
  ]),
  transition(':leave', [
    animate('.3s ease-in-out', style({ height: 0, overflow: 'hidden' })),
  ]),
]);
