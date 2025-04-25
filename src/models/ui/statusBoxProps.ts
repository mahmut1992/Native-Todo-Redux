interface Item {
  count: number;
  title: string;
  color: string;
  status: string;
}

interface StatusBoxProps {
  item: Item;
}

export type {StatusBoxProps, Item};
