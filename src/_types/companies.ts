
export type TCompany = {
  id: number;
  name: string;
  address: string;
  isSelected: boolean;
}

export type TCompanyServer = Omit<TCompany, 'selected'>
