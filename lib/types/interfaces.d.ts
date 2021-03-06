import { Params, Format, Name, ComponentType, SelectPropsKey, Loadings, Results, FetchTimes, Errors } from './types';
export interface Props {
    [key: string]: any;
}
export interface ConnectOption {
    Loading?: ComponentType;
    Error?: ComponentType;
}
export interface LoadOption {
    format?: Format;
    forceUpdate?: boolean;
    params?: Params;
    id?: string;
}
export interface StrictConfig {
    name?: Name;
    expiredTime?: number;
    enableLog?: boolean;
    strictLoading?: boolean;
    DefaultLoading?: ComponentType;
    DefaultError?: ComponentType;
}
export declare type Config = StrictConfig | Name;
export interface State {
    [key: string]: any;
}
export interface Payload {
    key: string;
    result?: any;
    error?: Error;
}
export interface Action {
    type: string;
    payload: Payload;
}
export interface SelectPropsParams {
    keys: SelectPropsKey;
    loadings: Loadings;
    results: Results;
    fetchTimes: FetchTimes;
    errors: Errors;
}
