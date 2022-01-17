type MenusType = {
  id: string;
  value: string;
}

type RulesType = {
  [key:number]: number[];
}

type ApiResponseType = {
  menus: Array<MenusType[]>; 
  rules: RulesType;
}