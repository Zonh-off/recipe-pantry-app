/**
 * Shared UI component barrel.
 *
 * Import from here — not from individual files — to keep import paths stable:
 *
 *   import { AppButton, AppCard, Chip, Modal } from '@/shared/components/ui';
 */

export { AppButton, appButtonVariants } from './AppButton';
export { AppInput } from './AppInput';
export {
    AppCard,
    AppCardHeader,
    AppCardTitle,
    AppCardDescription,
    AppCardContent,
    AppCardFooter,
    AppCardAction,
} from './AppCard';
export { AppBadge, appBadgeVariants } from './AppBadge';
export { Chip } from './Chip';
export type { ChipColor } from './Chip';
export { Modal } from './Modal';
export { SectionHeader } from './SectionHeader';
export { PageContainer } from './PageContainer';
