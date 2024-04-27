import {Component, OnInit} from '@angular/core';
import {DestroyableComponent} from "../../shared/destroyable-component";
import {NbMediaBreakpointsService, NbMenuItem, NbMenuService, NbSidebarService, NbThemeService} from "@nebular/theme";
import {LayoutService} from "../../core/services/layout-service.service";
import {map, takeUntil} from "rxjs";
import {MAIN_MENU} from "../main-menu";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent extends DestroyableComponent implements OnInit {
  title: string = 'UNISYS';
  userMenu: NbMenuItem[] = [
    {
      title: 'Profil',
      icon: 'person-outline',
      target: '_blank'
    },
    {
      title: 'Se deconnecter',
      link: '/logout',
      icon: 'log-out-outline'
    }
  ];
  onlyPicture: boolean = false;
  sidebarMenuItems?: NbMenuItem[];
  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    }
  ];

  currentTheme = 'default';

  constructor(private sidebarService: NbSidebarService,
              private layoutService: LayoutService,
              private menuService: NbMenuService,
              private breakpointsService: NbMediaBreakpointsService,
              private themeService: NbThemeService) {
    super()
  }

  ngOnInit(): void {
    //todo: filter by security
    this.sidebarMenuItems = MAIN_MENU;

    const {xl} = this.breakpointsService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$)
      ).subscribe(isLessThanXl => this.onlyPicture = isLessThanXl)

    this.currentTheme = this.themeService.currentTheme;
    this.themeService.onThemeChange()
      .pipe(
        map(({name}) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => {
        this.currentTheme = themeName;
        localStorage.setItem(environment.currentThemeKey, themeName);
      });
  }

  toggleSidebar() {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();
    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }

  userDisplayName(): string {
    return 'Deconnecté'
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }
}

