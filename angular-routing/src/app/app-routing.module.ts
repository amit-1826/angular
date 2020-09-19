import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./not-found/not-found.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";
import { HomeComponent } from "./home/home.component";
import { AuthGuardService } from "./auth-gaurd.service";
import { CanDeactivateGuardService } from "./servers/edit-server/can-deactivate-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { ServerResolverService } from "./servers/server/server-resolver.service";


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  // children is used when user wants to load the parent route as well as its child routes
  {
    path: 'users', component: UsersComponent, children: [
      {
        path: ':id/:name', component: UserComponent
      }
    ]
  },
  {
    path: 'servers', canActivateChild: [AuthGuardService], component: ServersComponent, children: [
      {
        path: ':id', component: ServerComponent, resolve: {server: ServerResolverService}
      },
      // canDeactivate is used to restrict user to move to another route or page unless some conditions are fulfilled
      {
        path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuardService]
      }
    ]
  },
  /* {
    path: 'not-found', component: NotFoundComponent
  }, */
  // Passing static message into the routes using data property
  {
    path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found.!!'}
  },
  {
    path: '**', redirectTo: 'not-found'
  }
]

@NgModule({
  // useHash is used so that when the app is served on server then route not found 404 error occurs,
  // So to avoid that we are using # into the route, so that
  // our hosting server finds the route from our app first
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
