import React from 'react';
import Entity from '../../model/Entity';
import EntityAttribute from '../../model/EntityAttribute';
import { EntitySectionProps } from './EntitySection';

/* Used in Components.Entity */
export interface EntityMethodsSectionProps extends EntitySectionProps {
}

export default (props: EntityMethodsSectionProps) => <div className="entitySection"><div className="entitySection__sectionTitle">{props.sectionTitle || props.section}</div><div/></div>;

