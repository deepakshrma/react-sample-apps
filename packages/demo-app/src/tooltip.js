/*


import * as React from 'react'
import styled, { StyledFunction } from "styled-components"
const div: StyledFunction<any> = styled.div
const TooltipBody = div`
    position: absolute;
    min-width: 200px;
    max-width: 400px;
    padding: 10px 10px;
    color: #000;
    border-radius: 4px;
    z-index: 99999999;
    box-sizing: border-box;
    box-shadow: 0 1px 8px rgba(0,0,0,0.5);
    transition: opacity 0.8s;
    border: 1px solid #d3d3de;
    visibility: hidden;
    opacity: 0;
    i {
        position: absolute;
        overflow: hidden;
        &::after {
            content: '';
            position: absolute;
            width: 12px;
            height: 12px;
            background-color: #fff;
            // box-shadow: 0 1px 8px rgba(0,0,0,0.5);
            border: 1px solid #d3d3de;
        }
    }
    &.top {
        top: -20px;
        left: 50%;
        transform: translate(-30%,-100%);
        i {
            top: 100%;
            left: 30%;
            margin-left: -15px;
            width: 24px;
            height: 12px;
            &::after {
                left: 50%;
                transform: translate(-50%,-50%) rotate(45deg);
            }
        }
    }
    &.right {
        float: right;
        top: 50%;
        left: 100%;
        margin-left: 20px;
        transform: translate(0, -50%);
        i {
            top: 50%;
            right: 100%;
            margin-top: -12px;
            width: 12px;
            height: 24px;
            &::after {
                left: 0;
                top: 50%;
                transform: translate(50%,-50%) rotate(-45deg);
            }
        }
    }
    &.bottom {
        top: 40px;
        left: 50%;
        transform: translate(-50%, 0);
        i {
            bottom: 100%;
            left: 50%;
            margin-left: -12px;
            width: 24px;
            height: 12px;
            &::after {
                left: 50%;
                transform: translate(-50%,50%) rotate(45deg);
            }
        }
    }
    &.left {
        float: left;
        top: 50%;
        right: 100%;
        margin-right: 20px;
        transform: translate(0, -50%);
        i {
            top: 50%;
            left: 100%;
            margin-top: -12px;
            width: 12px;
            height: 24px;
            &::after {
                left: 0;
                top: 50%;
                transform: translate(-50%,-50%) rotate(-45deg);
            }
        }
    }
`
const TooltipWrapper = div`
    position: relative;
    display: inline-block;
    min-height: 30px;
    &:hover .right, &:hover .top, &:hover .left, &:hover .bottom{
        visibility: visible;
        opacity: 1;
    }
`
type Props = {
    children?: React.ReactChild;
    title?: string | React.ReactNode;
    placement?: string;
}
const Tooltip = ({children = '', title = '', placement = 'top'}: Props) => {
    return <TooltipWrapper>
            <TooltipBody className={placement}>
                {title}
                <i></i>
            </TooltipBody>
        {children}
    </TooltipWrapper>
}
export default Tooltip;
*/
