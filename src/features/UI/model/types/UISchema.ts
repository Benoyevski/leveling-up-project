// <Адрес сьраницы, позиция скролла>
export type ScrollSchema = Record<string, number>

export interface UISchema {
    scroll: ScrollSchema;
}
