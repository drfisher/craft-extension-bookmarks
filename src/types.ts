export interface AppState {
  appVersion: number;
  bookmarks: Bookmarks;
}

export interface BookmarkItem {
  id: string;
}

export interface BookmarkGroup {
  id: string;
  items: BookmarkItem[];
}

export interface Bookmarks {
  groups: BookmarkGroup[];
  items: BookmarkItem[];
}

export type Dict = {
  [id: string]: string | number | string[] | Dict;
};

export type StringsDict = {
  [id: string]: string;
};

export type VoidFunction = () => void;
