import { RouterModule, Routes } from '@angular/router';

// COMPONENTS
import { BodyComponent } from './body.component';

import { HomeComponent } from './home/home.component';
import { GeneralComponent } from './general/general.component';
    import { LoginComponent } from './general/login/login.component';
    import { RegisterComponent } from './general/register/register.component';
    import { AboutComponent } from './general/about/about.component';
    import { ContactComponent } from './general/contact/contact.component';
    import { PricesComponent } from './general/prices/prices.component';
    import { FaqComponent } from './general/faq/faq.component';
    import { TermsComponent } from './general/terms/terms.component';
    import { PrivacyComponent } from './general/privacy/privacy.component';
    import { CookiesComponent } from './general/cookies/cookies.component';
    import { ComingsoonComponent } from './general/comingsoon/comingsoon.component';
    import { WorkwithusComponent } from './general/workwithus/workwithus.component';
    import { AdvertiseComponent } from './general/advertise/advertise.component';
import { ProfilesComponent } from './profiles/profiles.component';
    import { FollowersComponent } from './profiles/followers/followers.component';
    import { FollowingComponent } from './profiles/following/following.component';
    import { MessagesComponent } from './profiles/messages/messages.component';
    import { NotificationsComponent } from './profiles/notifications/notifications.component';
    import { ReputationComponent } from './profiles/reputation/reputation.component';
    import { UnlockusersComponent } from './profiles/unlockusers/unlockusers.component';
    import { CancelationComponent } from './profiles/cancelation/cancelation.component';
import { GroupsComponent } from './groups/groups.component';
    import { CreategroupComponent } from './groups/creategroup/creategroup.component';
    import { ListgroupsComponent } from './groups/listgroups/listgroups.component';
    import { ListmygroupsComponent } from './groups/listmygroups/listmygroups.component';
import { PostsComponent } from './posts/posts.component';
    import { CreatepostComponent } from './posts/createpost/createpost.component';
    import { ListpostsComponent } from './posts/listposts/listposts.component';
    import { ListmypostsComponent } from './posts/listmyposts/listmyposts.component';
import { ProposalsComponent } from './proposals/proposals.component';
    import { CreateproposalComponent } from './proposals/createproposal/createproposal.component';
    import { Assignvotes2proposalComponent } from './proposals/assignvotes2proposal/assignvotes2proposal.component';
    import { ListproposalsComponent } from './proposals/listproposals/listproposals.component';
    import { ListmyproposalsComponent } from './proposals/listmyproposals/listmyproposals.component';
    import { AssignproposalslistComponent } from './proposals/assignproposalslist/assignproposalslist.component';
import { DebatesComponent } from './debates/debates.component';
    import { CreatedebateComponent } from './debates/createdebate/createdebate.component';
    import { ListdebatesComponent } from './debates/listdebates/listdebates.component';
    import { ListmydebatesComponent } from './debates/listmydebates/listmydebates.component';
    import { ListmultidebatesComponent } from './debates/listmultidebates/listmultidebates.component';
import { AccoutSettingsComponent } from './dashboards/accout-settings/accout-settings.component';
import { Graficas1Component } from './dashboards/graficas1/graficas1.component';
import { ProgressComponent } from './dashboards/progress/progress.component';
import { PromesasComponent } from './dashboards/promesas/promesas.component';
import { SearchdebateComponent } from './searches/debatesearch/searchdebate/searchdebate.component';
import { SearchprofileinterestsComponent } from './searches/profilesearch/searchprofileinterests/searchprofileinterests.component';


const bodyRoutes: Routes = [
    {
        path: '',
        component: BodyComponent,
        children: [
            { path: 'home', component: HomeComponent, data: { titulo: 'Home' } },
            { path: 'general', component: GeneralComponent },
                { path: 'general/login', component: LoginComponent },
                { path: 'general/register', component: RegisterComponent },
                { path: 'general/about', component: AboutComponent },
                { path: 'general/contact', component: ContactComponent },
                { path: 'general/prices', component: PricesComponent },
                { path: 'general/faq', component: FaqComponent },
                { path: 'general/terms', component: TermsComponent },
                { path: 'general/privacy', component: PrivacyComponent },
                { path: 'general/cookies', component: CookiesComponent },
                { path: 'general/comingsoon', component: ComingsoonComponent },
                { path: 'general/workwithus', component: WorkwithusComponent },
                { path: 'general/advertise', component: AdvertiseComponent },
            { path: 'debates', component: DebatesComponent, data: { titulo: 'Debates' } },
                { path: 'debates/listdebates', component: ListdebatesComponent, data: { titulo: 'Listado de debates' } },
                { path: 'debates/listmydebates', component: ListmydebatesComponent, data: { titulo: 'Mis debates' } },
                { path: 'debates/createdebate', component: CreatedebateComponent, data: { titulo: 'Crear debate' } },
                { path: 'debates/listmultidebates', component: ListmultidebatesComponent, data: { titulo: 'Encuentas' } },
            { path: 'groups', component: GroupsComponent, data: { titulo: 'Grupos' } },
                { path: 'groups/creategroup', component: CreategroupComponent, data: { titulo: 'Crear grupo' } },
                { path: 'groups/listgroups', component: ListgroupsComponent, data: { titulo: 'Listado de grupos' } },
                { path: 'groups/listmygroups', component: ListmygroupsComponent, data: { titulo: 'Mis grupos' } },
            { path: 'posts', component: PostsComponent, data: { titulo: 'Artículos' } },
                { path: 'posts/createpost', component: CreatepostComponent, data: { titulo: 'Crear artículo' } },
                { path: 'posts/listposts', component: ListpostsComponent, data: { titulo: 'Listado de artículos' } },
                { path: 'posts/listmyposts', component: ListmypostsComponent, data: { titulo: 'Mis artículos' } },
            { path: 'profiles', component: ProfilesComponent, data: { titulo: 'Perfil' } },
                { path: 'profiles/followers', component: FollowersComponent, data: { titulo: 'Followers' } },
                { path: 'profiles/following', component: FollowingComponent, data: { titulo: 'Following' } },
                { path: 'profiles/messages', component: MessagesComponent, data: { titulo: 'Mensajes' } },
                { path: 'profiles/notifications', component: NotificationsComponent, data: { titulo: 'Notificaciones' } },
                { path: 'profiles/reputation', component: ReputationComponent, data: { titulo: 'Reputación' } },
                { path: 'profiles/unlockusers', component: UnlockusersComponent, data: { titulo: 'Desbloquear' } },
                { path: 'profiles/cancelation', component: CancelationComponent, data: { titulo: 'Cancelar cuenta' } },
            { path: 'proposals', component: ProposalsComponent, data: { titulo: 'Propuestas' } },
                { path: 'proposals/createproposal', component: CreateproposalComponent, data: { titulo: 'Crear propuesta' } },
                { path: 'proposals/assignvotes2proposal', component: Assignvotes2proposalComponent, data: { titulo: 'Asignar votos' } },
                { path: 'proposals/listproposals', component: ListproposalsComponent, data: { titulo: 'Listar propuesta' } },
                { path: 'proposals/listmyproposals', component: ListmyproposalsComponent, data: { titulo: 'Mis propuestas' } },
                { path: 'proposals/assignproposalslist', component: AssignproposalslistComponent, data: { titulo: 'Asignar propuesta' } },
            { path: 'dashboard/account-settings', component: AccoutSettingsComponent },
            { path: 'dashboard/graficas1', component: Graficas1Component },
            { path: 'dashboard/progress', component: ProgressComponent },
            { path: 'dashboard/promesas', component: PromesasComponent },
            { path: 'searches/debatesearch/searchdebate', component: SearchdebateComponent, data: { titulo: 'Buscar debate' } },
            // tslint:disable-next-line:max-line-length
            { path: 'searches/profilesearch/searchprofileinterests', component: SearchprofileinterestsComponent, data: { titulo: 'Buscar perfil' } },
            { path: '', redirectTo: '/home', pathMatch: 'full' }
        ]
    }
];


export const BODY_ROUTES = RouterModule.forChild( bodyRoutes );
