import { useEffect, useRef } from 'react';

//example:
// const userMenuRef = useClickOutside<HTMLDivElement>(
//     () => setShowUserMenu(false),
//     showUserMenu
//   );

export function useClickOutside<T extends HTMLElement>(
    handler: () => void,
    when: boolean = true
) {
    const ref = useRef<T>(null);

    useEffect(() => {
        if (!when) return;

        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                handler();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handler, when]);

    return ref;
}
