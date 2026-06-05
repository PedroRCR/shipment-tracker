import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  // ─── eager load ───────────────────────────────
  // small/always-needed pages load immediately
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/presentation/login.component').then(
        (m) => m.LoginComponent,
      ),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./components/dashboard/presentation/dashboard.component').then(
        (m) => m.DashboardComponent,
      ),
  },
];
/**frontend\src\app\components\dashboard\presentation\dashboard.component.ts
 * 
 * 
  // ─── lazy load ────────────────────────────────
  // large features load only when user navigates there
  {
    path: 'admin',
    loadComponent: () =>
      import('./components/admin/x.component').then((m) => m.Component),
  },

  // ─── nested children ──────────────────────────
  {
    path: 'settings',
    loadComponent: () =>
      import('./components/settings/settings.component').then(
        (m) => m.SettingsComponent,
      ),
    children: [
      {
        path: 'profile',
        loadComponent: () =>
          import('./components/settings/profile/profile.component').then(
            (m) => m.ProfileComponent,
          ),
      },
      {
        path: 'security',
        loadComponent: () =>
          import('./components/settings/security/security.component').then(
            (m) => m.SecurityComponent,
          ),
      },
    ],
  },

  // ─── route with param ─────────────────────────
  {
    path: 'user/:id',
    loadComponent: () =>
      import('./components/user/user.component').then((m) => m.UserComponent),
  },

  // ─── guard ────────────────────────────────────
  {
    path: 'supplier',
    loadComponent: () =>
      import('./components/supplier/supplier.component').then(
        (m) => m.SupplierComponent,
      ),
    canActivate: [() => inject(AuthGuard).canActivate()],
  },

  // ─── 404 ──────────────────────────────────────
  {
    path: '**',
    loadComponent: () =>
      import('./components/not-found/not-found.component').then(
        (m) => m.NotFoundComponent,
      ),
  },
 * this.router.navigate(['/login']);
this.router.navigate(['/user', id]);
this.router.navigate(['/login'], { queryParams: { tab: 'stats' } });

<a routerLink="/login">Go</a>
<a [routerLink]="['/user', userId]">Profile</a>

@Input() id!: string;                          // modern, needs withComponentInputBinding
 

import { Component, OnInit, inject, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  template: `<p>User: {{ id }}</p>`,
})
export class UserComponent implements OnInit {
  private router = inject(Router);
  private route  = inject(ActivatedRoute);

  // ─── Option A: @Input() — needs withComponentInputBinding() in config ───
  @Input() id!: string;

  // ─── Option B: read from ActivatedRoute manually ───
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const queryParam = this.route.snapshot.queryParamMap.get('tab');
  }

  // ─── Imperative navigation ───
  goTologin() {
    this.router.navigate(['/login']);
  }

  goToUser(id: string) {
    this.router.navigate(['/user', id]);
  }

  goWithQuery() {
    this.router.navigate(['/login'], {
      queryParams: { tab: 'stats' },
    });
  }
}













*/
