import { type ReactNode, useEffect, useState } from "react";
import "./media-viewer-style.css";



interface MediaPopupProps {
    children: ReactNode;

}

export default function MediaPopup({
    children,

}: MediaPopupProps) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!open) return;

        const scrollY = window.scrollY;

        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollY}px`;
        document.body.style.left = "0";
        document.body.style.right = "0";
        document.body.style.width = "100%";
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.left = "";
            document.body.style.right = "";
            document.body.style.width = "";
            document.body.style.overflow = "";

            window.scrollTo(0, scrollY);
        };
    }, [open]);

return (
        <>
            <div
                className="mv-preview"
                onClick={() => setOpen(true)}
            >
                {children}

                <div className="mv-overlay">
                    ⛶
                </div>
            </div>

            {open && (
                <div
                    className="mv-modal"
                    onClick={() => setOpen(false)}
                >
                    <div
                        className="mv-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="mv-close"
                            onClick={() => setOpen(false)}
                        >
                            ✕
                        </button>

                        {children}
                    </div>
                </div>
            )}
        </>
    );
}