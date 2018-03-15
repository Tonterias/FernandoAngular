import { RouterModule, Routes } from '@angular/router';

// import { DashboardsComponent } from './components/body/dashboards/dashboards.component';
// import { DebatesComponent } from './components/body/debates/debates.component';
//   import { CreatedebateComponent } from './components/body/debates/createdebate/createdebate.component';
//   import { ListdebatesComponent } from './components/body/debates/listdebates/listdebates.component';
//   import { ListmydebatesComponent } from './components/body/debates/listmydebates/listmydebates.component';
//   import { ListmultidebatesComponent } from './components/body/debates/listmultidebates/listmultidebates.component';
// import { GeneralComponent } from './components/body/general/general.component';
// import { GroupsComponent } from './components/body/groups/groups.component';
//   import { CreategroupComponent } from './components/body/groups/creategroup/creategroup.component';
//   import { ListgroupsComponent } from './components/body/groups/listgroups/listgroups.component';
//   import { ListmygroupsComponent } from './components/body/groups/listmygroups/listmygroups.component';
// import { HomeComponent } from './components/body/home/home.component';
// import { PostsComponent } from './components/body/posts/posts.component';
//   import { CreatepostComponent } from './components/body/posts/createpost/createpost.component';
//   import { ListpostsComponent } from './components/body/posts/listposts/listposts.component';
//   import { ListmypostsComponent } from './components/body/posts/listmyposts/listmyposts.component';
// import { ProfilesComponent } from './components/body/profiles/profiles.component';
//   import { FollowersComponent } from './components/body/profiles/followers/followers.component';
//   import { FollowingComponent } from './components/body/profiles/following/following.component';
//   import { MessagesComponent } from './components/body/profiles/messages/messages.component';
//   import { NotificationsComponent } from './components/body/profiles/notifications/notifications.component';
//   import { ReputationComponent } from './components/body/profiles/reputation/reputation.component';
//   import { UnlockusersComponent } from './components/body/profiles/unlockusers/unlockusers.component';
//   import { CancelationComponent } from './components/body/profiles/cancelation/cancelation.component';
// import { ProposalsComponent } from './components/body/proposals/proposals.component';
//   import { CreateproposalComponent } from './components/body/proposals/createproposal/createproposal.component';
//   import { AssignproposalslistComponent } from './components/body/proposals/assignproposalslist/assignproposalslist.component';
//   import { ListproposalsComponent } from './components/body/proposals/listproposals/listproposals.component';
//   import { ListmyproposalsComponent } from './components/body/proposals/listmyproposals/listmyproposals.component';
//   import { Assignvotes2proposalComponent } from './components/body/proposals/assignvotes2proposal/assignvotes2proposal.component';
// // tslint:disable-next-line:max-line-length
// import { SearchprofileinterestsComponent } from './components/body/searches/profilesearch/searchprofileinterests/searchprofileinterests.component';
//   // tslint:disable-next-line:quotemark
//   import { SearchdebateComponent } from './components/body/searches/debatesearch/searchdebate/searchdebate.component';

const APP_ROUTES: Routes = [
  // { path: 'dashboards', component: DashboardsComponent },
  // { path: 'debates', component: DebatesComponent },
  //   { path: 'debates/listdebates', component: ListdebatesComponent },
  //   { path: 'debates/listmydebates', component: ListmydebatesComponent },
  //   { path: 'debates/createdebate', component: CreatedebateComponent },
  //   { path: 'debates/listmultidebates', component: ListmultidebatesComponent },
  // { path: 'general', component: GeneralComponent },
  // { path: 'groups', component: GroupsComponent },
  //   { path: 'groups/creategroup', component: CreategroupComponent },
  //   { path: 'groups/listgroups', component: ListgroupsComponent },
  //   { path: 'groups/listmygroups', component: ListmygroupsComponent },
  // { path: 'home', component: HomeComponent },
  // { path: 'posts', component: PostsComponent },
  //   { path: 'posts/createpost', component: CreatepostComponent },
  //   { path: 'posts/listposts', component: ListpostsComponent },
  //   { path: 'posts/listmyposts', component: ListmypostsComponent },
  // { path: 'profiles', component: ProfilesComponent },
  //   { path: 'profiles/followers', component: FollowersComponent },
  //   { path: 'profiles/following', component: FollowingComponent },
  //   { path: 'profiles/messages', component: MessagesComponent },
  //   { path: 'profiles/notifications', component: NotificationsComponent },
  //   { path: 'profiles/reputation', component: ReputationComponent },
  //   { path: 'profiles/unlockusers', component: UnlockusersComponent },
  //   { path: 'profiles/cancelation', component: CancelationComponent },
  // { path: 'proposals', component: ProposalsComponent },
  //   { path: 'proposals/createproposal', component: CreateproposalComponent },
  //   { path: 'proposals/assignvotes2proposal', component: Assignvotes2proposalComponent },
  //   { path: 'proposals/listproposals', component: ListproposalsComponent },
  //   { path: 'proposals/listmyproposals', component: ListmyproposalsComponent },
  //   { path: 'proposals/assignproposalslist', component: AssignproposalslistComponent },
  //   { path: 'searches/debatesearch/searchdebate', component: SearchdebateComponent },
  //   { path: 'searches/profilesearch/searchprofileinterests', component: SearchprofileinterestsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
