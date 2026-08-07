import { type ReactNode, useEffect, useState } from "react";
import "./media-viewer-style.css";
import zoomBtn from '~/assets/image/icon/zoom.svg';
import playBtn from '~/assets/image/icon/play.svg';



import { createPortal } from "react-dom";



interface MediaPopupProps {
  children: ReactNode;
  name: string;
  popupContent?: ReactNode;
}

export default function MediaPopup({
  children,
  name,
  popupContent,
}: MediaPopupProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add("media-open");
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.classList.remove("media-open");
    }

    return () => {
      document.body.classList.remove("media-open");
    };
  }, [open]);

  return (
    <>
      <div className="mv-preview" onClick={() => setOpen(true)}>
        {children}

        <div className="mv-overlay">
          <img className="zoom-btn-img" src={name === "" ? playBtn : zoomBtn} alt="Toggle popup" />
        </div>
      </div>
      {open &&
        createPortal(
          <div className="mv-modal" onClick={() => setOpen(false)}>
                <div className="mv-content"
                   
                
                
                >
                    
              <button className="mv-close" onClick={() => setOpen(false)}>
                ✕
              </button>
                    <div className="ani-img"    onClick={(e) => e.stopPropagation()} >
                         {popupContent ?? children}
                     </div>
                   
                    <h1 className="mv-nm"> { name}</h1>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}