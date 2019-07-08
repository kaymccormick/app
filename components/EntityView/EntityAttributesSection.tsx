import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import Entity from '../../model/entity/Entity';
import {addAttribute} from '../../model/actions';
import * as Model from '../../model';
import { connect } from 'react-redux';
import{ ModelState,ApplicationState}from'../../model/types';
import EntityAttribute from './EntityAttribute';
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


export default connect(mapStateToProps, mapDispatchToProps)((props: EntityAttributesSectionProps) =>
    <React.Fragment>
        <div style={{gridColumn: '1 / 3'}}
            className="entitySection__sectionTitle">{props.sectionTitle || props.section}</div>
        <div style={{gridColumn: '3'}}>{
        }<a className="addAttributeLink" href="#" onClick={(e) => { if(props.addAttribute) { props.addAttribute(props.index); } e.preventDefault(); }}><FontAwesomeIcon style={{color: 'black'}} icon={faPlusSquare}/></a>{
        }</div>
        {props.entity && props.entity.attributes && props.entity.attributes.sectionContents ? props.entity.attributes.sectionContents.map((attr, index) => <div key={(index || -1).toString()} className="entityAttributes__attribute" style={{gridColumn: '1 / 4'}}>{attr !== undefined ? <EntityAttribute key={(index || -1).toString()} entityAttribute={attr}/> : null}</div>) : null}
    </React.Fragment>);

