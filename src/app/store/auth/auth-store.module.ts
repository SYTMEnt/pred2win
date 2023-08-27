import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import {  Store, StoreModule } from '@ngrx/store';
import { reducer as authReducer } from './reducers';
import { AuthStoreService } from './auth-store.service';
import { AuthEffects } from './effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('auth', authReducer ),
    EffectsModule.forFeature(AuthEffects)
  ],
  providers: [
    {
        provide: AuthStoreService,
        deps: [Store]
    }
  ],
})
export class AuthStoreModule {}