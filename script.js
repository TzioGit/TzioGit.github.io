document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalLink = document.getElementById('modal-link');
    const modalImage = document.getElementById('modal-image');
    const closeBtn = document.querySelector('.close-modal');
    const projectCards = document.querySelectorAll('.project-card');

    // Έλεγχος αν υπάρχει το modal στο HTML
    if (!modal) {
        console.error("Δεν βρέθηκε το modal στο HTML!");
        return; 
    }

    // Άνοιγμα Modal
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            // Ανάκτηση δεδομένων από τα data-attributes της κάρτας
            const title = card.getAttribute('data-title');
            const desc = card.getAttribute('data-desc');
            const link = card.getAttribute('data-link');
            const imageSrc = card.getAttribute('data-image'); // Εικόνα για το popup

            // Τοποθέτηση δεδομένων στο Modal
            modalTitle.textContent = title;
            modalDesc.textContent = desc;
            modalLink.href = link;
            
            if (imageSrc) {
                modalImage.src = imageSrc;
                modalImage.style.display = 'block';
            } else {
                modalImage.style.display = 'none';
            }

            // Εμφάνιση Modal
            modal.classList.add('active');
            
            // Αποτροπή scroll στη σελίδα
            document.body.style.overflow = 'hidden';
        });
    });

    // Κλείσιμο Modal με το (X)
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Κλείσιμο Modal κάνοντας κλικ έξω από το κουτί
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Συνάρτηση για κλείσιμο
    function closeModal() {
        modal.classList.remove('active');
        // Επαναφορά του scroll
        document.body.style.overflow = 'auto';
        
        // Καθαρισμός του src της εικόνας
        setTimeout(() => {
            modalImage.src = '';
        }, 400); // 0.4s μετά το fade out animation
    }

    // --- Λειτουργία Accordion για τις Συχνές Ερωτήσεις (FAQ) ---
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        
        questionBtn.addEventListener('click', () => {
            // Αν θέλεις να κλείνουν οι άλλες ερωτήσεις όταν ανοίγεις μία, ξε-σχολίασε τις επόμενες 3 γραμμές:
            // faqItems.forEach(otherItem => {
            //     if (otherItem !== item) otherItem.classList.remove('active');
            // });

            // Εναλλαγή της κλάσης 'active' για να ανοίξει/κλείσει η τρέχουσα ερώτηση
            item.classList.toggle('active');
        });
    });
});