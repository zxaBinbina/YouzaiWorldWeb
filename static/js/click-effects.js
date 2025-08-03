document.addEventListener('DOMContentLoaded', function() {
    const defaultConfig = {
        effect: 'both',
        rippleColor: '#ffffff',
        particleCount: 20,
        rippleSize: 50,
        particleColors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ff8a00', '#22c1c3']
    };
    
    const config = window.clickEffectConfig ? 
        {...defaultConfig, ...window.clickEffectConfig} : 
        defaultConfig;
    
    document.addEventListener('click', function(e) {
        const posX = e.clientX;
        const posY = e.clientY;
        
        if (config.effect === 'both' || config.effect === 'ripple') {
            createRipple(posX, posY, config);
        }
        
        if (config.effect === 'both' || config.effect === 'particles') {
            createParticles(posX, posY, config);
        }
    });
    
    function createRipple(x, y, cfg) {
        const ripple = document.createElement('div');
        ripple.classList.add('click-ripple');
        
        ripple.style.left = `${x - cfg.rippleSize/2}px`;
        ripple.style.top = `${y - cfg.rippleSize/2}px`;
        ripple.style.width = `${cfg.rippleSize}px`;
        ripple.style.height = `${cfg.rippleSize}px`;
        ripple.style.backgroundColor = cfg.rippleColor;
        
        document.body.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
    
    function createParticles(x, y, cfg) {
        for (let i = 0; i < cfg.particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('click-particle');
            
            const size = Math.random() * 6 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            const color = cfg.particleColors[Math.floor(Math.random() * cfg.particleColors.length)];
            particle.style.backgroundColor = color;
            
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            
            document.body.appendChild(particle);
            
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 100 + 50;
            const duration = Math.random() * 1000 + 500;
            
            const animation = particle.animate([
                { transform: `translate(0, 0)`, opacity: 1 },
                { transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`, opacity: 0 }
            ], {
                duration: duration,
                easing: 'cubic-bezier(0, 0.9, 0.57, 1)',
                fill: 'forwards'
            });
            
            animation.onfinish = () => {
                particle.remove();
            };
        }
    }
});