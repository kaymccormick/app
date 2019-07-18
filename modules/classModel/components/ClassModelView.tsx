import React from 'react';
import { List,Map } from 'immutable'
import classNames from 'classnames';
import {ApplicationState} from "../../../model/types";
import {ApplicationModule} from '../../../src/ApplicationModule';
import {ModuleState} from '../types';
import { ModuleState as MenusModuleState } from '../../menus/types';
import Site from '../../../model/site/Site';

export interface ClassModelViewProps {
    classModel?: ModuleState;
    menus: MenusModuleState;
    fetchInitialData?: () => void;
    module?: ApplicationModule<any>;
    site?: Site;
}

export default class ClassModelView extends React.Component<ClassModelViewProps> {
    state: any = { };
    public constructor(props: ClassModelViewProps) {
        super(props);
    }

    public componentDidMount() {
        console.log('moutn');
        if(this.props.fetchInitialData) {
            this.props.fetchInitialData();
        }
    }

    public render() {
        const content = null;
        return <div>{content}</div>;
    }
}
