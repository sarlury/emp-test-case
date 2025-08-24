import { Component, computed, Input, signal } from '@angular/core';

@Component({
  selector: 'app-loading',
  imports: [],
  templateUrl: './loading.html',
  styleUrl: './loading.scss'
})
export class Loading {

  private _active = signal(false);
  private _label = signal('Loading…');

  @Input() set active(v: boolean | null | undefined) { this._active.set(!!v); }
  @Input() set text(v: string | null | undefined) { if (v) this._label.set(v); }

  activeState = computed(() => this._active());
  label = computed(() => this._label());

}
