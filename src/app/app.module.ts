import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { SettingsService } from './services/settings.service';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SettingsComponent } from './components/settings/settings.component';
import { PlayerComponent } from './components/player/player.component';
import { SkillComponent } from './components/skill/skill.component';
import { SkillcdComponent } from './components/skillcd/skillcd.component';
import { SkillCDComponent } from './components/skill-cd/skill-cd.component';
import { PlayerLifeComponent } from './components/player-life/player-life.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    PlayerComponent,
    SkillComponent,
    SkillcdComponent,
    SkillCDComponent,
    PlayerLifeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    SettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
