export interface FilterOption {
  label: string;
  count: number;
  selected?: boolean;
}

export interface CharacteristicGroup {
  name: string;
  values: CharacteristicCount[];
}

export interface CharacteristicCount {
  value: string;
  count: number;
}