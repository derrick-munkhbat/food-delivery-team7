import { ReactNode } from "react";

export function Modal({children, open} : {children: ReactNode, open: Boolean}) {
    return(
        <div className={`modal ${open ? "modal-open" : ""}`}>
            {children}
        </div>
    );
}