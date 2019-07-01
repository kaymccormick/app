import React from 'react';
import Entity from '../../model/Entity';
import EntityAttribute from '../../model/EntityAttribute';
import { EntityMethodsSectionProps } from '../types';

export default (props: EntityMethodsSectionProps) => <div className="entitySection"><div className="entitySection__sectionTitle">{props.sectionTitle || props.section}</div><div/></div>;

