import {CanActivate} from '@angular/router';
import { Injectable } from '@angular/core';
import { StateManagerService } from '../state-manager.service';

@Injectable({providedIn: 'root'})
    export class AuthGuard implements CanActivate {
        constructor (private stateManager: StateManagerService) {

        }
        canActivate() {
            return !!this.stateManager.authUser();
        }
    }

