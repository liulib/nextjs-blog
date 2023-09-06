export interface BaseResponse<T> {
    code: number;
    data: T;
    message: string;
}

export interface Menu {
    title: string;
    url: string;
    idx: number;
    icon: any;
}

export interface ISideTitle {
    title: string;
    lineIndex: number;
    indent: number;
}
