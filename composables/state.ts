export const useCounter = () => useState<number>('counter', () => 0);

export const useCart = () => useState<[]>('cart', () => []);