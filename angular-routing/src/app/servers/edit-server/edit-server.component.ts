import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CanDeactivateComponent } from './can-deactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanDeactivateComponent {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  isChangesSaved = false;

  constructor(private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
        this.allowEdit = params['allowEdit'] == 'true' ? true : false;
    })
    this.route.params.subscribe((params: Params) => {
      console.log('parasas: ', params);
      
        const id = params['id'];
        this.server = this.serversService.getServer(+id);
        this.serverName = this.server.name;
        this.serverStatus = this.server.status;
    })
    
    // this.server = this.serversService.getServer(1);
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.isChangesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  canDeactivate() {
    if (!this.allowEdit) {
      return true;
    }

    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.isChangesSaved) {
      return confirm('Do you want to leave?');
    } else {
      return true;
    }

  }

}
