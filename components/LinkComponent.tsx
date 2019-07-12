import React from 'react';
// onDoubleClick={(e) => { props.selectItem({id:props.id }); e.preventDefault(); }}
export default (props: any) => {
    return <a href="" className="metismenu-link" onClick={(e) => { if(props.hasSubMenu) { props.toggleSubMenu(e); } else { props.selectItem({id: props.id}); e.preventDefault(); } } } >{props.children}</a>;
};
