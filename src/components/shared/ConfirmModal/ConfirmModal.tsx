import { motion, AnimatePresence } from "motion/react";
import { Trash2 } from "lucide-react";
import { createPortal } from "react-dom";
import "./ConfirmModal.css";

type Props = {
    isOpen: boolean;
    titulo: string;
    onConfirm: () => void;
    onCancel: () => void;
};

export function ConfirmModal({
    isOpen,
    titulo,
    onConfirm,
    onCancel,
}: Props) {
    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={onCancel}
                        aria-hidden="true"
                    />

                    {/* Dialog */}
                    <motion.div
                        className="modal-wrapper"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-title"
                        aria-describedby="modal-desc"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.18 }}
                    >
                        <div className="modal-icon" aria-hidden="true">
                            <Trash2 size={20} />
                        </div>

                        <h2 id="modal-title" className="modal-title">
                            Excluir tarefa?
                        </h2>

                        <p id="modal-desc" className="modal-desc">
                            A tarefa <strong>"{titulo}"</strong> será removida
                            permanentemente. Esta ação não pode ser desfeita.
                        </p>

                        <div className="modal-actions">
                            <button
                                className="modal-btn-cancelar"
                                onClick={onCancel}
                                autoFocus
                            >
                                Cancelar
                            </button>

                            <button
                                className="modal-btn-confirmar"
                                onClick={onConfirm}
                            >
                                Sim, excluir
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
}