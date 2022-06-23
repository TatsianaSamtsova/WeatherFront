import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Weather: {},
  Admin: {}
};

const pluralNames = {
  Weather: 'Weather',
  Admin: 'Admin'
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
};
