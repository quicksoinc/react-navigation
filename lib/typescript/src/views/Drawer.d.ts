import * as React from 'react';
import { ViewStyle, StyleProp } from 'react-native';
import Animated from 'react-native-reanimated';
import { PanGestureHandler } from './GestureHandler';
declare type Renderer = (props: {
    progress: Animated.Node<number>;
}) => React.ReactNode;
declare type Props = {
    open: boolean;
    onOpen: () => void;
    onClose: () => void;
    gestureEnabled: boolean;
    swipeEnabled: boolean;
    drawerPosition: 'left' | 'right';
    drawerType: 'front' | 'back' | 'slide' | 'permanent';
    keyboardDismissMode: 'none' | 'on-drag';
    swipeEdgeWidth: number;
    swipeDistanceThreshold?: number;
    swipeVelocityThreshold: number;
    hideStatusBar: boolean;
    statusBarAnimation: 'slide' | 'none' | 'fade';
    overlayStyle?: StyleProp<ViewStyle>;
    drawerStyle?: StyleProp<ViewStyle>;
    sceneContainerStyle?: StyleProp<ViewStyle>;
    renderDrawerContent: Renderer;
    renderSceneContent: Renderer;
    gestureHandlerProps?: React.ComponentProps<typeof PanGestureHandler>;
    dimensions: {
        width: number;
        height: number;
    };
};
export default class DrawerView extends React.Component<Props> {
    static defaultProps: {
        drawerPosition: string;
        drawerType: string;
        gestureEnabled: boolean;
        swipeEnabled: boolean;
        swipeEdgeWidth: number;
        swipeVelocityThreshold: number;
        keyboardDismissMode: string;
        hideStatusBar: boolean;
        statusBarAnimation: string;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props): void;
    componentWillUnmount(): void;
    private handleEscape;
    private handleEndInteraction;
    private handleStartInteraction;
    private getDrawerWidth;
    private clock;
    private interactionHandle;
    private isDrawerTypeFront;
    private isOpen;
    private nextIsOpen;
    private isSwiping;
    private initialDrawerWidth;
    private gestureState;
    private touchX;
    private velocityX;
    private gestureX;
    private offsetX;
    private position;
    private containerWidth;
    private drawerWidth;
    private drawerOpacity;
    private drawerPosition;
    private touchDistanceFromDrawer;
    private swipeDistanceThreshold;
    private swipeVelocityThreshold;
    private currentOpenValue;
    private pendingOpenValue;
    private isStatusBarHidden;
    private manuallyTriggerSpring;
    private transitionTo;
    private dragX;
    private translateX;
    private progress;
    private handleContainerLayout;
    private handleDrawerLayout;
    private toggleDrawer;
    private toggleStatusBar;
    render(): JSX.Element;
}
export {};
