import React from 'react';
import Entity from '../../model/Entity';
import {addAttribute} from '../../model/actions';
import EntityAttribute from '../../model/EntityAttribute';
import { connect } from 'react-redux';
import{ ModelState,ApplicationState}from'../../model/types';
import { EntitySectionProps, EntityAttributesSectionProps } from '../types';


const mapStateToProps = (state: ApplicationState, ownProps: { index: number }): EntityAttributesSectionProps => ({
    section: 'attributes',
    entity: state.model.entities ? state.model.entities.get(ownProps.index) : undefined,
});
// @ts-ignore
const mapDispatchToProps = (dispatch: any) => ({
    "addAttribute": (index: number) => {
    console.log('dispatch');
    return dispatch(addAttribute(index));
    },
});


//<div>{props.entity.attributes.map((att) =>
export default connect(mapStateToProps, mapDispatchToProps)((props: EntityAttributesSectionProps) => <React.Fragment><div style={{gridColumn: '1 / 3'}} className="entitySection__sectionTitle">{props.sectionTitle || props.section}</div>{props.entity && props.entity.attributes && props.entity.attributes.sectionContents ? props.entity.attributes.sectionContents.map((attr) => <div style={{gridColumn: '1 / 3'}}>{JSON.stringify(attr, null, 4)}</div>) : null}
<div style={{gridColumn: '3'}}><a className="addAttributeLink" href="#" onClick={(e) => { if(props.addAttribute) { props.addAttribute(props.index); } e.preventDefault(); }}>+</a></div></React.Fragment>);

