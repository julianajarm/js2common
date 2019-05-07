Vue.component ('cart', {
    props: ['cartItems', 'img', 'visibility'],
    template: `
    <div class="cart-block" v-show="visibility">
        <p v-if="!cartItems.length">Cart is empty</p>
        
        <cart-item
            v-for="product of cartItems"
            :key="product.id_product"
            :img="img"
            :cart-item="product">
        </cart-item>
        
    </div>
    `,
});

Vue.component ('cart-item', {
    props: ['cartItems', 'img'],
    template: `
        <div class="cart-item" v-for="product of cartItems" :key="product.id_product">
            <div class="product-bio">
                <img :src="imgCart" alt="Some image">
                    <div class="product-desc">
                        <p class="product-title">{{cartItem.product_name}}</p>
                        <p class="product-quantity">Quantity: {{product.quantity}}</p>
                        <p class="product-single-price">$ {{product.price}} each</p>
                    </div>
            </div>
            <div class="right-block">
                <p class="product-price">{{cartItem.quantity*cartItem.price}}</p>
                <button class="del-btn" @click="patent.$emit('remove', cartItem)">&times;</button>
            </div>
        </div>
    `,
});