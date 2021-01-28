import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { UniversityComponent } from './university/university.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { ServerComponent } from './server/server.component';
import { ProjectComponent } from './project/project.component';
import { QuartertwoComponent} from './quartertwo/quartertwo.component';

import { QuarterthreeComponent} from './quarterthree/quarterthree.component';
import { QuarterfourComponent} from './quarterfour/quarterfour.component';
import { QuarteroneComponent} from './quarterone/quarterone.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'default',
        component: DefaultComponent,
        data: {
          title: "Default",
          breadcrumb: "Default"
        }
      },
      // {
      //   path: 'quartertwo',
      //   component: QuartertwoComponent,
      //   data: {
      //     title: "quartertwo",
      //     breadcrumb: "quartertwo"
      //   }
      // },
      {
        path: 'e-commerce',
        component: ECommerceComponent,
        data: {
          title: "E-commerce",
          breadcrumb: "E-commerce"
        }
      },
      {
        path: 'university',
        component: UniversityComponent,
        data: {
          title: "University",
          breadcrumb: "University"
        }
      },
      {
        path: 'bitcoin',
        component: BitcoinComponent,
        data: {
          title: "Crypto",
          breadcrumb: "Crypto"
        }
      },
      // {
      //   path: 'quartertwo',
      //   component: QuartertwoComponent,
      //   data: {
      //     title: "quartertwo",
      //     breadcrumb: "quartertwo"
      //   }
      // },
      {
        path: 'project',
        component: ProjectComponent,
        data: {
          title: "Project",
          breadcrumb: "Project"
        }
      },
      {
        path: 'quarterthree',
        component: QuarterthreeComponent,
        data: {
          title: "quarterthree",
          breadcrumb: "quarterthree"
        }
      },
      {
        path: 'quartertwo',
        component: QuartertwoComponent,
        data: {
          title: "quartertwo",
          breadcrumb: "quartertwo"
        }
      },
      {
        path: 'quarterone',
        component: QuarteroneComponent,
        data: {
          title: "quarterone",
          breadcrumb: "quarterone"
        }
      },
      {
        path: 'quarterfour',
        component: QuarterfourComponent,
        data: {
          title: "quarterfour",
          breadcrumb: "quarterfour"
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
