export declare const useMobileBridge: () => {
    getInitialData: () => Record<string, string>;
    sendResult: (result: any) => void;
    goToNextStep: (path: string, params?: Record<string, string>) => void;
};
