import { AnimatePresence, motion } from "motion/react";
import { CheckCircle, XCircle, X } from "lucide-react";
import type { Toast } from "../../../hooks/useToast";
import "./ToastContainer.css";

type Props = {
    toasts: Toast[];
    removeToast: (id: number) => void;
};

export function ToastContainer({ toasts, removeToast }: Props) {
    return (
        <div className="toast-container" role="region" aria-label="Notificações" aria-live="polite">
            <AnimatePresence>
                {toasts.map((toast) => (
                    <motion.div
                        key={toast.id}
                        className={`toast toast-${toast.type}`}
                        role="alert"
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.18 }}
                    >
                        <span className="toast-icon" aria-hidden="true">
                            {toast.type === "success" ? (
                                <CheckCircle size={16} />
                            ) : (
                                <XCircle size={16} />
                            )}
                        </span>
                        <span className="toast-message">{toast.message}</span>
                        <button
                            className="toast-close"
                            onClick={() => removeToast(toast.id)}
                            aria-label="Fechar notificação"
                        >
                            <X size={14} />
                        </button>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}