import { useMediaQuery } from "react-responsive";

export const useIsMobile =  () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile;
};

export const useIsTablet =  () => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 993 });
    return isTablet;
};

export const useIsDesktop =  () => {
    const isDesktop = useMediaQuery({ minWidth: 993 });
    return isDesktop;
};