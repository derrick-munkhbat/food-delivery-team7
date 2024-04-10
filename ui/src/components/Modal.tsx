import { ReactNode } from "react";

export function Modal ({children, open} : {children: ReactNode, open: Boolean}) {
    return(
        <dialog className={`modal ${open ? "modal-open" : ""}`}>
                {children}
        </dialog>
    );
}