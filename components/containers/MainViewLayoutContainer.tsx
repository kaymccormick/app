import React from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import MainViewLayout, { MainViewLayoutProps } from '../MainViewLayout';

export const MainViewLayoutContainer = (props: MainViewLayoutProps) => <DndProvider backend={HTML5Backend}><MainViewLayout {...props}/></DndProvider>;
