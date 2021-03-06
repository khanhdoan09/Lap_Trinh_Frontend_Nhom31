import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbAutocompleteModule } from 'mdb-angular-ui-kit/autocomplete';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbChartModule } from 'mdb-angular-ui-kit/charts';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDatepickerModule } from 'mdb-angular-ui-kit/datepicker';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbInfiniteScrollModule } from 'mdb-angular-ui-kit/infinite-scroll';
import { MdbLazyLoadingModule } from 'mdb-angular-ui-kit/lazy-loading';
import { MdbLightboxModule } from 'mdb-angular-ui-kit/lightbox';
import { MdbLoadingModule } from 'mdb-angular-ui-kit/loading';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbNotificationModule } from 'mdb-angular-ui-kit/notification';
import { MdbPopconfirmModule } from 'mdb-angular-ui-kit/popconfirm';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRatingModule } from 'mdb-angular-ui-kit/rating';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollbarModule } from 'mdb-angular-ui-kit/scrollbar';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbSelectModule } from 'mdb-angular-ui-kit/select';
import { MdbSidenavModule } from 'mdb-angular-ui-kit/sidenav';
import { MdbSmoothScrollModule } from 'mdb-angular-ui-kit/smooth-scroll';
import { MdbStepperModule } from 'mdb-angular-ui-kit/stepper';
import { MdbStickyModule } from 'mdb-angular-ui-kit/sticky';
import { MdbTableModule } from 'mdb-angular-ui-kit/table';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTimepickerModule } from 'mdb-angular-ui-kit/timepicker';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { MdbCalendarModule } from 'mdb-angular-calendar';
import { MdbWysiwygModule } from 'mdb-angular-wysiwyg';
import { MdbDragAndDropModule } from 'mdb-angular-drag-and-drop';
import { MdbVectorMapModule } from 'mdb-angular-vector-maps';
import { MdbFileUploadModule } from 'mdb-angular-file-upload';
import { MdbTreeviewModule } from 'mdb-angular-treeview';
import { MdbTransferModule } from 'mdb-angular-transfer';
import { MdbMentionModule } from 'mdb-angular-mention';
import { MdbCookiesManagementService } from 'mdb-angular-cookies-management';
import { MdbStorageManagementService } from 'mdb-angular-storage-management';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './view/authentication/register/register.component';
import { LoginComponent } from './view/authentication/login/login.component';
import { RecoverpwComponent } from './view/authentication/recoverpw/recoverpw.component';
import { HomeComponent } from './view/home/home.component';
import { SidebarComponent } from './view/home/sidebar/sidebar.component';
import { ChatComponent } from './view/home/chat/chat.component';
import {ChatsComponent} from  './view/home/sidebar/content/chats/chats.component'
import { MenuComponent } from './view/home/sidebar/menu/menu.component';
import { ContentComponent } from './view/home/sidebar/content/content.component';
import {ProfileComponent} from "./view/home/sidebar/content/profile/profile.component";
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TimeComponent } from './view/home/chat/time/time.component';
import { ContentChatComponent } from './view/home/chat/content-chat/content-chat.component';
import { ConversationComponent } from './view/home/chat/content-chat/conversation/conversation.component';
import { InputChatComponent } from './view/home/chat/input-chat/input-chat.component';
import {FormsModule} from "@angular/forms";
import { TextComponent } from './view/home/chat/content-chat/conversation/text/text.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { HeaderBarComponent } from './view/home/chat/header-bar/header-bar.component';
import { GroupsComponent } from './view/home/sidebar/content/groups/groups.component';
import { SettingComponent } from './view/home/sidebar/content/setting/setting.component';


@NgModule({
// <<<<<<< Updated upstream
  declarations: [AppComponent, RegisterComponent, LoginComponent, RecoverpwComponent, HomeComponent, SidebarComponent, ChatComponent, MenuComponent, ContentComponent, ProfileComponent, TimeComponent, ContentChatComponent, ConversationComponent, InputChatComponent, TextComponent, HeaderBarComponent, ChatsComponent, GroupsComponent, SettingComponent],
// =======
//   declarations: [AppComponent, RegisterComponent, LoginComponent, RecoverpwComponent, HomeComponent, SidebarComponent, ChatComponent, MenuComponent, ContentComponent, ProfileComponent, TimeComponent, ContentChatComponent, ConversationComponent, InputChatComponent, TextComponent, ChatsComponent],
// >>>>>>> Stashed changes
  imports: [
    CarouselModule,
    BrowserModule,
    BrowserAnimationsModule,
    MdbAccordionModule,
    MdbAutocompleteModule,
    MdbCarouselModule,
    MdbChartModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDatepickerModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbInfiniteScrollModule,
    MdbLazyLoadingModule,
    MdbLightboxModule,
    MdbLoadingModule,
    MdbModalModule,
    MdbNotificationModule,
    MdbPopconfirmModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRatingModule,
    MdbRippleModule,
    MdbScrollbarModule,
    MdbScrollspyModule,
    MdbSelectModule,
    MdbSidenavModule,
    MdbSmoothScrollModule,
    MdbStepperModule,
    MdbStickyModule,
    MdbTableModule,
    MdbTabsModule,
    MdbTimepickerModule,
    MdbTooltipModule,
    MdbValidationModule,
    MdbCalendarModule,
    MdbWysiwygModule,
    MdbDragAndDropModule,
    MdbVectorMapModule,
    MdbFileUploadModule,
    MdbTreeviewModule,
    MdbTransferModule,
    MdbMentionModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [MdbCookiesManagementService, MdbStorageManagementService],
  bootstrap: [AppComponent],
})
export class AppModule {}
