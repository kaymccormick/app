import React from 'react';
import Entity from '../../model/Entity';
import EntityAttribute from '../../model/EntityAttribute';
import { EntitySectionProps } from './EntitySection';

/* Used in Components.Entity */
export interface EntityAttributesSectionProps extends EntitySectionProps {
}

export default (props: EntityAttributesSectionProps) => <div className="entitySection"><div className="entitySection__sectionTitle">{props.sectionTitle || props.section}</div><div/></div>;

