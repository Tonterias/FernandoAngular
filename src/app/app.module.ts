import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { DataTablesModule } from 'angular-datatables';

// ROUTES
import { APP_ROUTING } from './app.routes';

// SERVICES

// COMPONENTS
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/body/home/home.component';
// import { GeneralComponent } from './components/body/general/general.component';
// import { DashboardsComponent } from './components/body/dashboards/dashboards.component';
// import { ProfilesComponent } from './components/body/profiles/profiles.component';
//   import { FollowersComponent } from './components/body/profiles/followers/followers.component';
//   import { FollowingComponent } from './components/body/profiles/following/following.component';
//   import { MessagesComponent } from './components/body/profiles/messages/messages.component';
//   import { NotificationsComponent } from './components/body/profiles/notifications/notifications.component';
//   import { ReputationComponent } from './components/body/profiles/reputation/reputation.component';
//   import { UnlockusersComponent } from './components/body/profiles/unlockusers/unlockusers.component';
//   import { CancelationComponent } from './components/body/profiles/cancelation/cancelation.component';
// import { GroupsComponent } from './components/body/groups/groups.component';
//   import { CreategroupComponent } from './components/body/groups/creategroup/creategroup.component';
//   import { ListgroupsComponent } from './components/body/groups/listgroups/listgroups.component';
//   import { ListmygroupsComponent } from './components/body/groups/listmygroups/listmygroups.component';
// import { PostsComponent } from './components/body/posts/posts.component';
//   import { CreatepostComponent } from './components/body/posts/createpost/createpost.component';
//   import { ListpostsComponent } from './components/body/posts/listposts/listposts.component';
//   import { ListmypostsComponent } from './components/body/posts/listmyposts/listmyposts.component';
// import { ProposalsComponent } from './components/body/proposals/proposals.component';
//   import { CreateproposalComponent } from './components/body/proposals/createproposal/createproposal.component';
//   import { Assignvotes2proposalComponent } from './components/body/proposals/assignvotes2proposal/assignvotes2proposal.component';
//   import { ListproposalsComponent } from './components/body/proposals/listproposals/listproposals.component';
//   import { ListmyproposalsComponent } from './components/body/proposals/listmyproposals/listmyproposals.component';
//   import { AssignproposalslistComponent } from './components/body/proposals/assignproposalslist/assignproposalslist.component';
// import { DebatesComponent } from './components/body/debates/debates.component';
//   import { CreatedebateComponent } from './components/body/debates/createdebate/createdebate.component';
//   import { ListdebatesComponent } from './components/body/debates/listdebates/listdebates.component';
//   import { ListmydebatesComponent } from './components/body/debates/listmydebates/listmydebates.component';
//   import { ListmultidebatesComponent } from './components/body/debates/listmultidebates/listmultidebates.component';
// import { SearchdebateComponent } from './components/body/searches/debatesearch/searchdebate/searchdebate.component';
// // tslint:disable-next-line:max-line-length
// import { SearchprofileinterestsComponent } from './components/body/searches/profilesearch/searchprofileinterests/searchprofileinterests.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
    // HomeComponent,
    // ProfilesComponent,
    // GroupsComponent,
    // PostsComponent,
    // ProposalsComponent,
    // DebatesComponent,
    // DashboardsComponent,
    // GeneralComponent,
    // FollowersComponent,
    // FollowingComponent,
    // MessagesComponent,
    // NotificationsComponent,
    // ReputationComponent,
    // UnlockusersComponent,
    // CancelationComponent,
    // CreategroupComponent,
    // ListgroupsComponent,
    // ListmygroupsComponent,
    // CreatepostComponent,
    // ListpostsComponent,
    // ListmypostsComponent,
    // CreateproposalComponent,
    // Assignvotes2proposalComponent,
    // ListproposalsComponent,
    // ListmyproposalsComponent,
    // AssignproposalslistComponent,
    // CreatedebateComponent,
    // ListdebatesComponent,
    // ListmydebatesComponent,
    // ListmultidebatesComponent,
    // SearchdebateComponent,
    // SearchprofileinterestsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
//    DataTablesModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
