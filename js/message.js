let notificationCount = 0;

        document.querySelectorAll(".addToCartBtn").forEach(button => {
            button.addEventListener("click", function () {
                notificationCount++;

                const message = document.createElement("div");
                message.classList.add("cart-item");
                message.style.top = `${notificationCount * 20}px`;

                // Добавление HTML структуры сообщения
                message.innerHTML = `
                    <img
                        src="./img/message-cap.png"
                        alt="Pepka Cap"
                        class="product-image"
                    />
                    <div class="item-details">
                        <div class="item-status">
                            <span class="icon"><svg width="10px" height="10px" ><use href="./sprite/symbol-defs.svg#icon-shopping-bag"></use></svg</span> <p class="text-message">Added to cart<p>
                        </div>
                        <div class="item-name">PEPKA CAP</div>
                    </div>
                    <div class="item-options">
                        <div class="size-option">L</div>
                        <div class="color-option"></div>
                    </div>
                `;

                // Добавление сообщения в контейнер для уведомлений
                const notificationsContainer = document.getElementById("notifications");
                notificationsContainer.appendChild(message);

                // Удаление сообщения через 3 секунды
                setTimeout(() => {
                    notificationsContainer.removeChild(message);
                    notificationCount--;
                    // Сброс отступов для всех оставшихся сообщений
                    document.querySelectorAll('.cart-item').forEach((item, index) => {
                        item.style.top = `${(index + 1) * 20}px`;
                    });
                }, 1500);
            });
        });