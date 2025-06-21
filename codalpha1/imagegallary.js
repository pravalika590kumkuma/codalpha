 const buttons = document.querySelectorAll('.filter-btn');
    const images = document.querySelectorAll('.gallery img');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const category = btn.dataset.category;

        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        images.forEach(img => {
          if (category === 'all' || img.dataset.category === category) {
            img.style.display = 'block';
          } else {
            img.style.display = 'none';
          }
        });
      });
    });

    // Lightbox Logic
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');

    images.forEach(img => {
      img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
      });
    });

    closeBtn.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });