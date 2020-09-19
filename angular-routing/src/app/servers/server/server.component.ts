import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { ServerResolverService } from './server-resolver.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
    private router: Router,
    private serverResolver: ServerResolverService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    // this is used for resolver for dynamic data passing into the route
    this.route.data.subscribe((data: Data) => {
      this.server = data['server'];
    })
    /* const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
     this.route.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(+params['id']);
    }) */
  }

  onEditServer() {
    //  queryParamsHandling: 'merge' / 'preserve'
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

}
