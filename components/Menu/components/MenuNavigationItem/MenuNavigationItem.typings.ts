export type TypeMenuItem = "Home" | "Campaigns" | "Transactions";

export interface IMenuNavigationItem {
    isActive?: boolean;
    type: TypeMenuItem;
}
