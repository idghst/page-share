import type { BookmarkItem } from '../../src/types/typesBookmark';

const API_BASE_URL = 'https://fastapi.idghst.store';

export const fetchBookmarks = async (name?: string): Promise<BookmarkItem[]> => {
    try {
        const url = new URL('/bookmark/', API_BASE_URL);

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

        const data: BookmarkItem[] = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching bookmarks:', error);
        throw error;
    }
};
