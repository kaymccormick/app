import React from 'react';
import Entity from '../../model/Entity';

/* Used in Components.Entity */
export interface EntitySectionProps {
    section: string;
    sectionTitle?: string;
}

export default (props: EntitySectionProps) => <div className="entitySection"><div className="entitySection__sectionTitle">{props.sectionTitle || props.section}</div><div/></div>;
