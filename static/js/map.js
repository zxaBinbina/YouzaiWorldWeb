// 地图画卡片悬停效果增强
        document.querySelectorAll('.map-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.boxShadow = '0 15px 30px rgba(92, 217, 255, 0.2)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.05)';
            });
        });
        
        // 分页按钮悬停效果
        document.querySelectorAll('.page-btn:not(.disabled)').forEach(btn => {
            btn.addEventListener('mouseenter', function() {
                if(!this.classList.contains('active')) {
                    this.style.backgroundColor = '#e0f7ff';
                }
            });
            
            btn.addEventListener('mouseleave', function() {
                if(!this.classList.contains('active')) {
                    this.style.backgroundColor = '#f0faff';
                }
            });
        });