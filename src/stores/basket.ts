import { defineStore } from 'pinia';
import api from '../services/api';
import type { Sneakers } from '../types/types'

interface State {
    items: Sneakers[];
    loading: boolean;
    error: string | null;
}


export const useBasketStore = defineStore('backet', {
    state: (): State => ({
        items: [],
        loading: false,
        error: null
    }),
    getters: {
        totalItems(): number {
            return this.items.length;
        },
        totalPrice(): number {
            return this.items.reduce((sum, item) => sum + item.price, 0);
        },
    },
    actions: {
        async addToBasket(sneaker: Sneakers) {
            this.loading = true;
            this.error = null;
            try {
                await api.postBasket(sneaker);
                this.items.push(sneaker);
            } catch (error) {
                this.error = 'Не удалось добавить товар в корзину';
                console.error('Ошибка при добавлении товара в корзину:', error);
            } finally {

                this.loading = false;
            }
        },

        async fetchBasketItems() {
            this.loading = true;
            this.error = null;
            try {

                const basket = await api.getBasket();

                console.log('API response:', basket);

                if (basket) {
                    this.items = basket;
                } else {
                    this.items = [];
                }

                console.log('this.items after fetch:', this.items);

            } catch (error) {
                this.error = 'Не удалось загрузить товары из корзины';
                console.error('Ошибка при загрузке товаров из корзины:', error);
            } finally {
                this.loading = false;
            }
        },


    },

})
