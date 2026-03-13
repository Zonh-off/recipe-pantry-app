/**
 * Modal – a semantic wrapper over shadcn's Dialog.
 *
 * Provides a consistent, app-styled modal shell with:
 *   - White bg-white surface (light theme first)
 *   - Green-600 primary confirm button by default
 *   - Accessible title + description slots
 *   - Optional footer with confirm / cancel actions
 *
 * Usage (controlled):
 *   <Modal
 *     open={open}
 *     onOpenChange={setOpen}
 *     title="Delete CollectionEntity"
 *     description="This action cannot be undone."
 *     confirmLabel="Delete"
 *     confirmVariant="destructive"
 *     onConfirm={handleDelete}
 *   >
 *     <p>Are you sure?</p>
 *   </Modal>
 *
 * Usage (uncontrolled with trigger):
 *   <Modal title="Add Ingredient" trigger={<AppButton>Add</AppButton>}>
 *     <AddIngredientForm />
 *   </Modal>
 */

'use client';

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogTrigger,
} from '@/components/ui/dialog';
import { AppButton } from './AppButton';
import type { ReactNode } from 'react';

interface ModalProps {
    /** Controlled open state */
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    /** Accessible modal title (always required) */
    title: string;
    /** Optional subtitle / description */
    description?: string;
    /** Optional trigger element (uncontrolled mode) */
    trigger?: React.ReactElement;
    /** Modal body content */
    children?: ReactNode;
    /** Label for the primary confirm button in the footer */
    confirmLabel?: string;
    /** Label for the cancel button in the footer */
    cancelLabel?: string;
    /** Variant for the confirm button */
    confirmVariant?: 'primary' | 'destructive' | 'secondary';
    /** Called when confirm is clicked */
    onConfirm?: () => void;
    /** Called when cancel or close is clicked */
    onCancel?: () => void;
    /** Shows a loading spinner on the confirm button */
    confirmLoading?: boolean;
    /** Disable the confirm button */
    confirmDisabled?: boolean;
    /** Max width of the modal panel (Tailwind class fragment) */
    size?: 'sm' | 'md' | 'lg';
}

const SIZE_CLASSES: Record<NonNullable<ModalProps['size']>, string> = {
    sm: 'sm:max-w-sm',
    md: 'sm:max-w-md',
    lg: 'sm:max-w-lg',
};

export function Modal({
    open,
    onOpenChange,
    title,
    description,
    trigger,
    children,
    confirmLabel,
    cancelLabel = 'Cancel',
    confirmVariant = 'primary',
    onConfirm,
    onCancel,
    confirmLoading,
    confirmDisabled,
    size = 'md',
}: ModalProps) {
    const hasFooter = !!confirmLabel || !!cancelLabel;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            {trigger && <DialogTrigger render={trigger} />}

            <DialogContent
                className={`bg-white rounded-2xl border border-slate-200 shadow-lg gap-0 p-0 ${SIZE_CLASSES[size]}`}
                showCloseButton
            >
                {/* Header */}
                <DialogHeader className="px-6 pt-6 pb-4 border-b border-slate-100">
                    <DialogTitle className="text-base font-semibold text-slate-900">
                        {title}
                    </DialogTitle>
                    {description && (
                        <DialogDescription className="text-sm text-slate-500 mt-1">
                            {description}
                        </DialogDescription>
                    )}
                </DialogHeader>

                {/* Body */}
                {children && (
                    <div className="px-6 py-5">{children}</div>
                )}

                {/* Footer */}
                {hasFooter && (
                    <DialogFooter
                        className="px-6 py-4 border-t border-slate-100 bg-slate-50/60 rounded-b-2xl"
                        showCloseButton={false}
                    >
                        {cancelLabel && (
                            <AppButton
                                variant="secondary"
                                size="sm"
                                onClick={() => {
                                    onCancel?.();
                                    onOpenChange?.(false);
                                }}
                            >
                                {cancelLabel}
                            </AppButton>
                        )}
                        {confirmLabel && (
                            <AppButton
                                variant={confirmVariant === 'destructive' ? 'destructive' : confirmVariant}
                                size="sm"
                                loading={confirmLoading}
                                disabled={confirmDisabled}
                                onClick={onConfirm}
                            >
                                {confirmLabel}
                            </AppButton>
                        )}
                    </DialogFooter>
                )}
            </DialogContent>
        </Dialog>
    );
}
