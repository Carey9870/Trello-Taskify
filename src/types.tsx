import { KeyboardEventHandler } from 'react';
import { Card, Board, List, ENTITY_TYPE, ACTION, AuditLog } from '@prisma/client';

export interface SidebarProps {
    storageKey?: string
}

type Organization = {
    id: string
    slug: string
    imageUrl: string
    name: string
}

export interface NavItemProps {
    isExpanded: boolean
    organization: Organization
    onExpand: (id: string) => void
    isActive: boolean
}

export type MobileSidebarStore = {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

export type ProModalStore = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

export type CardModalStore = {
    id?: string
    isOpen: boolean
    onOpen: (id: string) => void
    onClose: () => void
}

export interface BoardProps {
    title: string
    id: string
}

export interface FormInputProps {
    errors?: {
        title?: string[]
    }
}

export interface UseActionOptions<TOutput> {
    onSuccess?: (data: TOutput) => void
    onError?: (error: string) => void
    onComplete?: () => void
}

export interface CFormInputProps {
    id: string
    label?: string
    type?: string
    placeholder?: string
    required?: boolean
    disabled?: boolean
    errors?: Record<string, string[] | undefined>
    className?: string
    defaultValue?: string
    onBlur?: () => void
}

export interface FormErrorsProps {
    id: string
    errors?: Record<string, string[] | undefined>
}

export interface FormSubmitProps {
    children: React.ReactNode
    disabled?: boolean
    className?: string
    variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'primary'
    
}

export interface HintProps {
    children: React.ReactNode
    description: string
    side?: 'left' | 'right' | 'top' | 'bottom'
    sideOffset?: number
}

export interface FormPopoverProps {
    children: React.ReactNode
    side?: 'left' | 'right' | 'top' | 'bottom'
    align?: 'start' | 'center' | 'end'
    sideOffset?: number
}

export interface FormPickerProps {
    id: string
    errors?: Record<string, string[] | undefined>
}

export interface BoardNavbarProps {
    data: Board
}

export interface BoardOptionsProps {
    id: string
}

export interface BoardIdPageProps {
    params: {
        boardId: string
    }
}

export interface ListContainerProps {
    data: List[]
    boardId: string
}

// -----------------------------

export type ListWithCards = List & { cards: Card[] }

export type CardWithList = Card & { list: List[] }

// -----------------------------

export interface ListWrapperProps {
    children: React.ReactNode
}

export interface ListItemProps {
    data: ListWithCards
    index: number
}

export interface ListHeaderProps {
    data: List
    onAddCard: () => void
}

export interface ListOptionsProps {
    data: List
    onAddCard: () => void
}

export interface CardFormProps {
    listId: string
    enableEditing: () => void
    disableEditing: () => void
    isEditing: boolean
}

export interface FormTextareaProps {
    id: string
    label?: string
    placeholder?: string
    required?: boolean
    disabled?: boolean
    errors?: Record<string, string[] | undefined>
    className?: string
    onBlur?: () => void
    onClick?: () => void
    onKeyDown?: KeyboardEventHandler<HTMLTextAreaElement> | undefined
    defaultValue?: string
}

export interface CardItemProps {
    data: Card
    index: number
}

export interface HeaderProps {
    data: CardWithList
}

export interface DescriptionProps {
    data: CardWithList
}

export interface ActionsProps {
    data: CardWithList
}

export interface Props {
    entityId: string
    entityType: ENTITY_TYPE
    entityTitle: string
    action: ACTION
}

export interface ActivityProps {
    items: AuditLog[]
}

export interface ActivityItemProps {
    data: AuditLog;
}

