import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SharedModule } from '../shared/shared.module';
// import { DataTablesModule } from 'angular-datatables';

// ROUTES
import { BODY_ROUTES } from './body.routes';

// COMPONENTS
import { BodyComponent } from './body.component';
import { HomeComponent } from './home/home.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { GroupsComponent } from './groups/groups.component';
import { PostsComponent } from './posts/posts.component';
import { ProposalsComponent } from './proposals/proposals.component';
import { DebatesComponent } from './debates/debates.component';
import { GeneralComponent } from './general/general.component';
import { FollowersComponent } from './profiles/followers/followers.component';
import { FollowingComponent } from './profiles/following/following.component';
import { MessagesComponent } from './profiles/messages/messages.component';
import { NotificationsComponent } from './profiles/notifications/notifications.component';
import { ReputationComponent } from './profiles/reputation/reputation.component';
import { UnlockusersComponent } from './profiles/unlockusers/unlockusers.component';
import { CancelationComponent } from './profiles/cancelation/cancelation.component';
import { CreategroupComponent } from './groups/creategroup/creategroup.component';
import { ListgroupsComponent } from './groups/listgroups/listgroups.component';
import { ListmygroupsComponent } from './groups/listmygroups/listmygroups.component';
import { CreatepostComponent } from './posts/createpost/createpost.component';
import { ListpostsComponent } from './posts/listposts/listposts.component';
import { ListmypostsComponent } from './posts/listmyposts/listmyposts.component';
import { CreateproposalComponent } from './proposals/createproposal/createproposal.component';
import { Assignvotes2proposalComponent } from './proposals/assignvotes2proposal/assignvotes2proposal.component';
import { ListproposalsComponent } from './proposals/listproposals/listproposals.component';
import { ListmyproposalsComponent } from './proposals/listmyproposals/listmyproposals.component';
import { AssignproposalslistComponent } from './proposals/assignproposalslist/assignproposalslist.component';
import { CreatedebateComponent } from './debates/createdebate/createdebate.component';
import { ListdebatesComponent } from './debates/listdebates/listdebates.component';
import { ListmydebatesComponent } from './debates/listmydebates/listmydebates.component';
import { ListmultidebatesComponent } from './debates/listmultidebates/listmultidebates.component';
import { SearchdebateComponent } from './searches/debatesearch/searchdebate/searchdebate.component';
import { SearchprofileinterestsComponent } from './searches/profilesearch/searchprofileinterests/searchprofileinterests.component';

// SERVICES


@NgModule({
  declarations: [
    BodyComponent,
    HomeComponent,
    ProfilesComponent,
    GroupsComponent,
    PostsComponent,
    ProposalsComponent,
    DebatesComponent,
    GeneralComponent,
    FollowersComponent,
    FollowingComponent,
    MessagesComponent,
    NotificationsComponent,
    ReputationComponent,
    UnlockusersComponent,
    CancelationComponent,
    CreategroupComponent,
    ListgroupsComponent,
    ListmygroupsComponent,
    CreatepostComponent,
    ListpostsComponent,
    ListmypostsComponent,
    CreateproposalComponent,
    Assignvotes2proposalComponent,
    ListproposalsComponent,
    ListmyproposalsComponent,
    AssignproposalslistComponent,
    CreatedebateComponent,
    ListdebatesComponent,
    ListmydebatesComponent,
    ListmultidebatesComponent,
    SearchdebateComponent,
    SearchprofileinterestsComponent
  ],
  exports: [
    BodyComponent,
    HomeComponent,
    ProfilesComponent,
    GroupsComponent,
    PostsComponent,
    ProposalsComponent,
    DebatesComponent,
    GeneralComponent,
    FollowersComponent,
    FollowingComponent,
    MessagesComponent,
    NotificationsComponent,
    ReputationComponent,
    UnlockusersComponent,
    CancelationComponent,
    CreategroupComponent,
    ListgroupsComponent,
    ListmygroupsComponent,
    CreatepostComponent,
    ListpostsComponent,
    ListmypostsComponent,
    CreateproposalComponent,
    Assignvotes2proposalComponent,
    ListproposalsComponent,
    ListmyproposalsComponent,
    AssignproposalslistComponent,
    CreatedebateComponent,
    ListdebatesComponent,
    ListmydebatesComponent,
    ListmultidebatesComponent,
    SearchdebateComponent,
    SearchprofileinterestsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    SharedModule,
    BODY_ROUTES
//    DataTablesModule,
  ]
})
export class BodyModule { }
