import React from 'react';
import Entity from '../../model/Entity';
import { EntitySectionProps } from '../types'

/* Used in Components.Entity */

export default (props: EntitySectionProps) => <div className="entitySection"><div className="entitySection__sectionTitle">{props.sectionTitle || props.section}</div><div/></div>;
