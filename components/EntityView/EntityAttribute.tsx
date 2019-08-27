import React from 'react';
import * as EntityCore from '../../entity/core';
import { Types, EntityAttributeProps } from '../types';
import ContentEditable from 'react-contenteditable';

class EntityAttribute extends React.Component<EntityAttributeProps> {
    public displayNameEditable: React.RefObject<any> = React.createRef();
    public state: {displayNameHtml: string} = { displayNameHtml: this.props.entityAttribute.displayName||'' };
    render() {
        return <div className="entityAttribute"><div className="entityAttribute__displayName">{this.props.entityAttribute.isNew ? <ContentEditable onChange={() => { }} className="editing" innerRef={this.displayNameEditable} html={this.state.displayNameHtml} disabled={false}/> : this.props.entityAttribute.displayName}</div></div>;
    }
}

export default EntityAttribute;

