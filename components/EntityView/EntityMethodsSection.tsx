import React from 'react';
import Entity from '../../model/entity/Entity';
import EntityAttribute from '../../model/entity/EntityAttribute';
import { EntityMethodsSectionProps } from '../types';

export default (props: EntityMethodsSectionProps) => <div className="entitySection"><div className="entitySection__sectionTitle">{props.sectionTitle || props.section}</div><div/></div>;

