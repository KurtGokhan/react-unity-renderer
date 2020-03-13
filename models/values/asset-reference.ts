export const enum AssetReferenceType {
  None = 0,
  File = 1,
  Url = 2,
  Resource = 3,
  NamedAsset = 4,
  Procedural = 5,
}

export interface AssetReference<T = any> {
  type: AssetReferenceType;
  value: T;
}
