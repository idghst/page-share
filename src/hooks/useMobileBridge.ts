import { useSearchParams, useNavigate } from 'react-router-dom';

export const useMobileBridge = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const getInitialData = () => {
        const data: Record<string, string> = {};
        searchParams.forEach((value, key) => {
            data[key] = value;
        });
        return data;
    };

    const sendResult = (result: any) => {
        console.log('Mobile Bridge Result:', result);

        // Try to communicate with native app if possible
        if ((window as any).ReactNativeWebView) {
            (window as any).ReactNativeWebView.postMessage(JSON.stringify(result));
        } else if (window.parent !== window) {
            // If in iframe
            window.parent.postMessage(result, '*');
        } else {
            // Fallback for standalone web testing
            alert(`Result sent: ${JSON.stringify(result)}`);
        }
    };

    const goToNextStep = (path: string, params: Record<string, string> = {}) => {
        const searchString = new URLSearchParams(params).toString();
        navigate(`${path}?${searchString}`);
    };

    return { getInitialData, sendResult, goToNextStep };
};
