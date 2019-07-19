import React from 'react';

interface Props {
    render: (props: any) => any;
    item:any;
}
interface State {
}

export default class ExploreItem extends React.Component<Props,State> {
    state: State = {};
    render(): React.ReactNode {
        if(this.props.render) {
            return this.props.render(this.props);
        }else {
            return null;
        }
    }
}
