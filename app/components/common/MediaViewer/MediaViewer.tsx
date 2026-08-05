import { type ReactNode, useEffect, useState } from "react";
import "./media-viewer-style.css";
import zoomBtn from '~/assets/image/icon/zoom.svg';
import playBtn from '~/assets/image/icon/play.svg';


interface MediaPopupProps {
    children: ReactNode;

    name: string
    popupContent?: React.ReactNode;

}

export default function MediaPopup({
    children,
   
    name,
   popupContent,
}: MediaPopupProps) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) {
            document.documentElement.style.overflow = "hidden";
            document.body.style.overflow = "hidden";

            // Hide the entire page
            document.body.classList.add("media-open");
        } else {
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
            document.body.classList.remove("media-open");
        }
    }, [open]);

  return (
        <>
            <div
                className="mv-preview"
                onClick={() => setOpen(true)}
            >
                {children}

                <div className="mv-overlay">
                    <img className="zoom-btn-img" src={name == "" ?playBtn: zoomBtn} />
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

                        {popupContent ?? children}
                    </div>
                </div>
            )}
        </>
    );
}