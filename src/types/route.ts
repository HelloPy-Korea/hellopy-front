import {ActionFunction, LoaderFunction} from "react-router-dom";
import React from "react";

export interface RouteCommon {
    loader?: LoaderFunction;
    action?: ActionFunction;
    ErrorBoundary?: React.ComponentType<unknown>;
}

export interface IRoute extends RouteCommon{
    path: string;
    Element: React.ComponentType<unknown>;
}

export interface Pages {
    [key: string]: {
        default: React.ComponentType<unknown>;
    } & RouteCommon
}