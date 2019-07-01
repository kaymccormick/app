import React from 'react';
import Entity from '../../model/Entity';
import {addAttribute} from '../../model/actions';
import EntityAttribute from '../../model/EntityAttribute';
import { EntitySectionProps } from './EntitySection';
import { connect } from 'react-redux';
import{ ModelState}from'../../model/types';


const mapStateToProps = (state: ModelState): EntityAttributesSectionProps => ({
    section: 'attributes',
});
// @ts-ignore
const mapDispatchToProps = (dispatch: any) => ({
    "addAttribute": (index: number) => dispatch(addAttribute(index)),
});


/* Used in Components.Entity */
export interface EntityAttributesSectionProps extends EntitySectionProps {
// @ts-ignore
    addAttribute?: any;
}
//<div>{props.entity.attributes.map((att) =>
export default connect(mapStateToProps, mapDispatchToProps)((props: EntityAttributesSectionProps) => <React.Fragment><div style={{gridColumn: '1 / 3'}} className="entitySection__sectionTitle">{props.sectionTitle || props.section}</div><div style={{gridColumn: '3'}}><a className="addAttributeLink" href="#" onClick={(e) => { props.addAttribute(); e.preventDefault(); }}>+</a></div></React.Fragment>);

