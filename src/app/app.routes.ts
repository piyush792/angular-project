import { Route } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { IntervalComponent } from './interval/interval.component';
import { OfFromComponent } from './of-from/of-from.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { MapComponent } from './map/map.component';
import { RetryComponent } from './retry/retry.component';
import { SubjectComponent } from './subject/subject.component';
import { ExhaustMapComponent } from './exhaust-map/exhaust-map.component';

export const routes: Route[] = [
    {
        path: '',
        component: BlogComponent,
        loadChildren: () => import('./blog/blog.route')
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.route')
    },
    {
        path:'interval',
        component:IntervalComponent
    },
    {
        path:'of-from',
        component:OfFromComponent
    },
    {
        path:'to-array',
        component:ToArrayComponent
    },
    {
        path:'map',
        component:MapComponent
    },
    {
        path:'retry',
        component:RetryComponent
    },
    {
        path:'subject',
        component:SubjectComponent
    },
    {
        path:'exhaust',
        component:ExhaustMapComponent
    }
];
