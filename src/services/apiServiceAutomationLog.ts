import type { AutomationLogItem } from '../../src/types/typesAutomationLog';

const API_BASE_URL = 'https://fastapi.idghst.store';

export const fetchAutomationLogs = async (name?: string): Promise<AutomationLogItem[]> => {
    try {
        const url = new URL('/automation_log/', API_BASE_URL);

        // Add query parameter if name is provided
        if (name) {
            url.searchParams.append('name', name);
        }

        const response = await fetch(url.toString(), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const data: AutomationLogItem[] = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching automation logs:', error);
        throw error;
    }
};
