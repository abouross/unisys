import {Component, OnInit} from '@angular/core';
import {DestroyableComponent} from "../../shared/destroyable-component";
import {NbMediaBreakpointsService, NbMenuItem, NbMenuService, NbSidebarService, NbThemeService} from "@nebular/theme";
import {LayoutService} from "../../core/services/layout-service.service";
import {map, takeUntil} from "rxjs";
import {MAIN_MENU} from "../main-menu";

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
}

