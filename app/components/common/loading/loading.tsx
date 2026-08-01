

import "./loading-style.css";

interface LoadingProps {
    loading: boolean;
    fullScreen?: boolean;
}

export default function Loading({
    loading,
    fullScreen = false,
}: LoadingProps) {
    if (!loading) return null;

    return (
        <div className={fullScreen ? "loading-full" : "loading-inline"}>
            <div className="spinner"></div>
        </div>
    );
}